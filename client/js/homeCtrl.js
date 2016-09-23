(function(){

var homeCtrl=function($scope,$state,httpFactory,$timeout)
                   {

    console.log("homeCtrl loaded--");
    console.log($scope.songUrl);
    
    $scope.submit = function(){
        console.log($scope.songUrl);
        httpFactory.youtubehit({'url':$scope.songUrl})
        .then(function(res){
            console.log('----submit------',res.data.result);
            httpFactory.setList(res.data.result); 
            $state.go('play');
        },function(err){
           console.log(err);
        });
      
    };


};
    
homeCtrl.$inject=['$scope','$state','httpFactory','$timeout'];
 angular.module('playApp')
  .controller('homeCtrl',homeCtrl); 
}());

