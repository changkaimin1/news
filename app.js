// 一、程序入口文件

//1.导包
const express = require('express');
const router = require('./router');
const bodyParser = require('body-parser');

//2.返回app对象
const app = express();


//配置包(模板引擎的)
app.engine('html', require('express-art-template'));


//统一处理静态资源   app.use('/标识符', express.static('./路径'));
/* <link rel="stylesheet" href="/node_modules/bootstrap/dist/css/bootstrap.css"></link> */
app.use('/node_modules', express.static('./node_modules'));
/* <link rel="stylesheet" href="/public/css/login.css"> */
app.use('/public', express.static('./public'));


// 配置包 (body-parser)
app.use(bodyParser.urlencoded({
    extended: false
}));





// 使用router  注意代码位置
app.use(router);
//4.绑定端口 
app.listen(12346, () => {
    console.log('端口');
})







