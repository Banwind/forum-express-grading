const { Restaurant, Category } = require('../models')
const { getOffset, getPagination } = require('../helpers/pagination-helper')

const restaurantService = {
  getRestaurants: (req, callback) => {
    const DEFAULT_LIMIT = 9
    const categoryId = Number(req.query.categoryId) || ''
    const page = Number(req.query.page) || 1
    const limit = Number(req.query.limit) || DEFAULT_LIMIT
    const offset = getOffset(limit, page)

    Promise.all([
      Restaurant.findAndCountAll({
        include: Category,
        where: {
          ...(categoryId ? { categoryId } : {})
        },
        raw: true,
        nest: true,
        limit,
        offset
      }),
      Category.findAll({ raw: true })
    ])
      .then(([restaurants, categories]) => {
        const favoritedRestaurantsId = req.user?.FavoritedRestaurants
          ? req.user.FavoritedRestaurants.map(fr => fr.id)
          : []
        const likedRestaurantsId = req.user?.LikedRestaurants
          ? req.user.LikedRestaurants.map(fr => fr.id)
          : []

        const data = restaurants.rows.map(r => ({
          ...r,
          description: r.description.substring(0, 50), // 覆蓋前面的description
          isFavorited: favoritedRestaurantsId.includes(r.id),
          isLiked: likedRestaurantsId.includes(r.id)
        }))

        return callback(null, {
          restaurants: data,
          categories,
          categoryId,
          pagination: getPagination(limit, page, restaurants.count)
        })
      })
      .catch(err => callback(err))
  }
}

module.exports = restaurantService
