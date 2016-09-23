(function(){
var httpFactory=function($http,$q){
   var playerlist;
   var videolist;
	var serverUrl = "http://127.0.0.1:9000/api/";
	
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
             console.log('youtubehit service getting loaded');
            
			return $http(req);
			
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
          videolist=list;
		},
		
        getList:function(){
			return videolist;
		},
		videoIdgen:function(obj){
          var index=obj.indexof('=');
          var urlPath = obj.slice(index + 1);
          return urlPath;
		}

	}	



};
 httpFactory.$inject=['$http','$q'];
    angular.module('playApp')
    .factory('httpFactory',httpFactory);
    
}());