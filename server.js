
var	express = require('./config/express');

var app = express();


app.listen(9000, function(){
  console.log('listening on *:9000');
});