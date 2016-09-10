	playApp.factory("httpFactory" , function ($http,$q){
   var playerlist;
   var videolist;
	var serverUrl = "http://127.0.0.1:9000/api/"
	return {
		youtubehit:function(songObj){
             
              var req={
              	method:"POST",
              	url: serverUrl + "addSong",
              	headers:{
              		'Content-Type': 'application/json'
              	},
              	data:songObj
              }
              var defer=$q.defer();

			$http(req).success(function(res){
				console.log('service---------',res);
				playerlist=res;
				console.log('----youtube--Playerlist',playerlist.result)
				videolist=playerlist.result;
				console.log("value recieved",videolist);
				defer.resolve(res);
			})
			.error(function(err,status){
				defer.reject(err);
			})
			return defer.promise;
			
		},
		getPlaylist:function(callback){
             
              var req={
              	method:"GET",
              	url: serverUrl + "getPlaylist",
              	headers:{
              		'Content-Type': 'application/json'
              	},
              }

			$http(req).then(function(success){
				console.log(success);
				callback(null,success);
			},function(err){
				callback(err,null);
			});

		},
		setList:function(list){
          playerlist=list;
		},
		getList:function(){
			var defer=$q.defer();
			defer.resolve(videolist);
			return defer.promise;
		},
		videoIdgen:function(obj){
          var index=obj.indexof('=');
          var urlPath = obj.slice(index + 1);
          return urlPath;
		}

	}	

})

	