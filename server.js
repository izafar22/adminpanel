var mongoose = require('./config/mongoose');
var	express = require('./config/express');


db = mongoose();
var app = express();


app.listen(9000, function(){
  console.log('listening on *:9000');
});