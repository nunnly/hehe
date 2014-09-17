//TODO-me：分析引入express模块,./node_modules
var express = require('express');
//TODO-me：分析引入核心模块path
var path = require('path');
//TODO-me：分析引入静态图标模块,./node_modules
var favicon = require('static-favicon');
//TODO-me：分析引入日志模块,./node_modules
var logger = require('morgan');
//TODO-me：分析引入cookie分析模块,./node_modules
var cookieParser = require('cookie-parser');
//TODO-me：分析模块,./node_modules
var bodyParser = require('body-parser');
//引入路由页面2条
var routes = require('./routes/index');
var users = require('./routes/users');
//通过express创建一个HTTP服务器
var app = express();

//视图引擎安装设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(favicon());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/users', users);

/// catch 404 and forward to error handler
//捕获404错误转发给错误处理
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace
//捕获开发环境下的错误处理
if (app.get('env') === 'development') {
    app.use(function (err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
//捕获生产环境下的错误处理，没有泄露堆栈路径（痕迹）给用户
app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});


module.exports = app;
