// 二、路由模块
//     作用: 处理分发
// 1.导包 express
const express = require('express');
// 2.获取路由对象 express.Router()
const router = express.Router()
const c_user = require('./controllers/c_user');
const c_topic = require('./controllers/c_topic.js');

//3. router.get()
router.get('/signin', c_user.showSignin)//渲染登录页的请求
      .post('/signin', c_user.handleSignin)// 点击登录的请求
      .get('/', c_topic.showToipc) // 点击登录验证邮箱和密码都正确,客户端跳转页面


// 4.导出 router
module.exports = router;






