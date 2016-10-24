
var express = require('express');
var app = express();
//var http = require('http').Server(app);
var path = require('path');
var cors=require('cors');
var bodyParser = require('body-parser');
//var busboy = require('connect-busboy');

module.exports = function(){

// default options, no immediate parsing 
	app.use(express.static(path.join(__dirname, '../client')));
	app.use(cors());
    app.use(bodyParser.json());

    app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});
	
	
	require('../server/routes/api.server.routes')(app);
    
	
	return app;
	
}
