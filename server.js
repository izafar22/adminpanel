
var	express = require('./config/express'),

	http = express();


http.listen(9000, function(){
  console.log('listening on *:9000');
});