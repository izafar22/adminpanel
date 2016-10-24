var api = require('../controllers/api.server.controller');
/*var multipart=require('connect-multiparty');
var multipartMiddleware=multipart();
*/
var multer=require('multer');
var fs=require('fs');
module.exports = function(app){
	

 app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});


  app.get('/', function(req, res){
	  res.sendFile(__dirname + '/index.html');
	});

	

    app.route('/api/addData')
       .post(api.addData);


    app.route('/api/getData')
       .get(api.getData);

    app.route('/api/deleteData')
     .post(api.deleteData);

    
   app.route('/api/upload')
    .post(multer({ dest: './client/uploads/'}).single('displayImage'),api.imageUpload);

};

