//引入debug模块
var debug = require('debug')('hehe');
//TODO-me:引入页面../app.js
var app = require('../app');
//设置settings里的port属性为3000
app.set('port', process.env.PORT || 3000);
//app.get('port')获取上面设置的这个端口号，在只有一个参数的情况下，app.get == app.set
//TODO-me：分析 application.js
var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
