(function(){

var playCtrl=function($scope, $state, $stateParams, httpFactory,$polling){
  $scope.lists=httpFactory.getList();


};
    playCtrl.$inject=['$scope', '$state', '$stateParams', 'httpFactory'];
    angular.module('playApp')
    .controller('playCtrl',playCtrl);
}());