//var User = require('mongoose').model('User');

var playlist = [];


exports.addSong=function(req,res,next){
	console.log(req.body);

	if(req.body){
		playlist.push(req.body.url);
	}
	console.log(playlist)

	res.json({"error":0,"errorMsg":"Registered success.", "result": playlist});
      
   /*var songList = new Song(req.body); 
   songList.save(function(err,result){
   	console.log('---Song Data---',result);
if(!err){

				res.json({"error":0,"errorMsg":"Registered success.", "result": result});
	            return true;
			}else{
				res.json({"error":1,"errorMsg":err});
	            return true;
			}
   })*/
}


exports.getPlaylist = function(req,res){

	res.json({"error":0,"errorMsg":"Registered success.", "result": playlist});


}

exports.getPlaylist=function(req,res,next){ 
};