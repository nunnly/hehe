//TODO-me:引入debug模块
var debug = require('debug')('hehe');
//TODO-me:引入页面../app.js
var app = require('../app');

app.set('port', process.env.PORT || 3000);

var server = app.listen(app.get('port'), function() {
  debug('Express server listening on port ' + server.address().port);
});
