(function(){
var httpFactory=function($http,$q){
   var setdel="";
   var count=0;
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
		getPlaylist:function(){
             console.log("getPlaylist is getting called");
              var req={
              	method:"GET",
              	url: serverUrl + "getPlaylist",
              	headers:{
              		'Content-Type': 'application/json'
              	}
              };
     return $http(req);    
		},
		setList:function(list){
          videolist=list;
		},
		
        getList:function(){
			return videolist;
		},

    deleteSong:function(videoObj){
      var request={
                method:"POST",
                url: serverUrl + "deleteSong",
                headers:{
                  'Content-Type': 'application/json'
                },
                data:videoObj
              }
                  //console.log('deleted song----',videoObj);
              return $http(request);
    },
    setDelete:function(video){
      setdel=video;
    },
    getDelete:function(){
      return setdel;
    }

	}	
};
 httpFactory.$inject=['$http','$q'];
    angular.module('playApp')
    .factory('httpFactory',httpFactory);
    
}());