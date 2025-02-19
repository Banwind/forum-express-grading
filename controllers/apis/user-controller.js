const jwt = require('jsonwebtoken')

const userController = {
  signIn: (req, res, next) => {
    try {
      const userData = req.user.toJSON()
      delete userData.password // 刪除 password 欄位
      const token = jwt.sign(userData, process.env.JWT_SECRET, {
        expiresIn: '30d'
      }) // 簽發 JWT，效期為 30 天
      res.json({
        status: 'success',
        data: {
          token,
          user: req.user
        }
      })
    } catch (err) {
      next(err)
    }
  }
}
module.exports = userController
