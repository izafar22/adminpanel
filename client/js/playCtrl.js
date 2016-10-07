(function(){

var playCtrl=function($scope, $state, $stateParams, httpFactory,$interval){
  $scope.lists=httpFactory.getList();
  $interval(function(){ 
  	$scope.lists= httpFactory.getList();
  },10000);

};
    playCtrl.$inject=['$scope', '$state', '$stateParams', 'httpFactory','$interval'];
    angular.module('playApp')
    .controller('playCtrl',playCtrl);
})();