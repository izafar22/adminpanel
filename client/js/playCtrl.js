(function(){

var playCtrl=function($scope, $state, $stateParams, httpFactory,$interval){
  $scope.lists=httpFactory.getList();
  $interval(function(){ 
  	$scope.lists= httpFactory.getList();
  	console.log('---lists Play---',$scope.lists);
  },10000);

  $scope.delete=function(video){
  	console.log('__________play video----',video);

  	httpFactory.deleteSong({'url':video})
  	.then(function(res){
  		console.log('----deleted------',res.data.result);
  	},function(err){
  		console.log(err);
  	});
  
  }

};
    playCtrl.$inject=['$scope', '$state', '$stateParams', 'httpFactory','$interval'];
    angular.module('playApp')
    .controller('playCtrl',playCtrl);
})();