var fs=require('fs');

var Product = require('mongoose').model('Product');

var playlist = [];

/*var productData={
productID:"poliu867",
    sku:"wwweert",
    description:"greaty"
}
*/

exports.addData=function(req,res,next){
        console.log(req.body);
        return;
       var product1=new Product(req.body);
       product1.save(function(err,results){
       	if(!err)
       	res.json({"error":0,"errorMsg":"Registered success.", "result": results});
       	else
       		{console.log(err);}
       });
      
};

exports.imageUpload=function(req,res){
  console.log(req.body); //form fields
  /* example output:
  { title: 'abc' }
 
   */
  console.log(req.file); //form files
  /* example output:
            { fieldname: 'upl',
              originalname: 'grumpy.png',
              encoding: '7bit',
              mimetype: 'image/png',
              destination: './uploads/',
              filename: '436ec561793aa4dc475a88e84776b1b9',
              path: 'uploads/436ec561793aa4dc475a88e84776b1b9',
              size: 277056 }
   */
  res.json({"error":0,"errorMsg":"Registered success.", "result": req.file.path});
  res.status(204).end();
   
   console.log(req.file.path);


};


exports.getData = function(req,res){
	
	Product.find({}).exec(function(err,result){
      console.log(result);
	});


};

exports.deleteData=function(req,res){
	console.log(req.body.url);
	if(playlist.indexOf(req.body.url)!=-1)
	{
		var index=playlist.indexOf(req.body.url);
		var deleted=playlist.splice(index,1);
	     console.log('---song deleted----',deleted);
	     console.log('-------playlist-----',playlist);
   if(playlist.length > 0)    	
	{
		res.json({"error":0,"errorMsg":"Registered success.", "result": playlist});
    }
 else
 {
 	var str="No Song to Play";
 	console.log(str);
 	res.json({"error":0,"errorMsg":"Registered success.", "result": str});
 }

	}
};