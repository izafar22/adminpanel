(function(){

var homeCtrl=function($scope,$state,httpFactory,$interval)
                   {

    console.log("homeCtrl loaded--");
    console.log($scope.songUrl);
    
    $scope.submit = function(){
        console.log($scope.songUrl);
        httpFactory.setFirstSong($scope.songUrl);
   
            httpFactory.addSong({'url':$scope.songUrl})
        .then(function(res){
            console.log('----submit------',res.data.result);
   
            $state.go('play');
        },function(err){
           console.log(err);
        });
    };
   
};
    
homeCtrl.$inject=['$scope','$state','httpFactory','$interval'];
 angular.module('playApp')
  .controller('homeCtrl',homeCtrl); 
})();

