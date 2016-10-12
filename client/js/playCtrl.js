(function(){

var playCtrl=function($scope, $state, $stateParams, httpFactory,$interval){

var getList=function(){
  httpFactory.getPlaylist()
.then(function(res){
  $scope.lists=res.data.result;
},function(err){
  console.log(err);
});
};

$interval(getList,1000);


  $scope.delete=function(video){
  	
    var vobj={"url":video};
     console.log('--------vobj-----',vobj);
       	httpFactory.deleteSong(vobj)
  	.then(function(res){
  		console.log('----deleted-play-----',res.data.result)
      httpFactory.setDelete(video);
  	},function(err){
  		console.log(err);
  	});
  
  }

};
    playCtrl.$inject=['$scope', '$state', '$stateParams', 'httpFactory','$interval'];
    angular.module('playApp')
    .controller('playCtrl',playCtrl);
})();