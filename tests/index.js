const request = require('supertest')

const app = require('../app')

describe('# 測試環境初始化', function () {
  context('# First Test Case', () => {
    it(' GET /admin/users ', (done) => {
      request(app)
        .get('/')
        .end(function (err, res) {
          console.log(err); // 加入這行
          console.log(res); // 加入這行
          done();
        })
    })
  })
})