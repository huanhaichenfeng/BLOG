//导入express内置模块
var express = require('express');

//创建一个express服务器实例
var app = express();

// 托管静态资源文件
app.use('/node_modules',express.static('node_modules'))

// 设置模板引擎
app.set('view engine','ejs');
// 模板页面的存放路径
app.set('views','./views')

// 导入indexRouter 路由模块
var indexRouter = require('./router/indexRouter.js')

// 注册路由模块
app.use(indexRouter);

//指定端口号并启动服务器监听
app.listen(3000, function () {
console.log('Express server running at http://127.0.0.1:3000');
})