(function(){

var playCtrl=function($scope, $state, $stateParams, httpFactory,$interval){
  $scope.lists=httpFactory.getList();
  $interval(function(){ 
  	var arr= httpFactory.getList();
    if(arr.indexOf(httpFactory.getDelete())==-1)
  	  {$scope.lists=arr;}
      arr=null;
    console.log('---lists Play---',$scope.lists);
  },2000);

  $scope.delete=function(video){
  	console.log('__________play video----',typeof(video));
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