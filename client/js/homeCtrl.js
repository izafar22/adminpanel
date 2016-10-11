(function(){

var homeCtrl=function($scope,$state,httpFactory,$interval)
                   {

    console.log("homeCtrl loaded--");
    console.log($scope.songUrl);
    
    $scope.submit = function(){
        console.log($scope.songUrl);
    var callee =function(){
        if(httpFactory.getDelete()!=$scope.songUrl){
            httpFactory.youtubehit({'url':$scope.songUrl})
        .then(function(res){
            console.log('----submit------',res.data.result);
            httpFactory.setList(res.data.result); 
            $state.go('play');
        },function(err){
           console.log(err);
        });
    }
    else
    {
            httpFactory.getPlaylist()
        .then(function(res){
            console.log('----submit--playlist----',res.data.result);
            httpFactory.setList(res.data.result); 
            $state.go('play');
        },function(err){
           console.log(err);
        });

    }
};
    
    callee();
    $interval(callee,1000);
};
};
    
homeCtrl.$inject=['$scope','$state','httpFactory','$interval'];
 angular.module('playApp')
  .controller('homeCtrl',homeCtrl); 
})();

