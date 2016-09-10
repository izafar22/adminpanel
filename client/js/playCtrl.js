playApp.controller('playCtrl', function($scope, $state, $stateParams,$rootScope, $timeout, httpFactory,$cookies) 
{
    
  $scope.createdBy="bholu";

  //console.log("----------------------",$rootScope.source);

   httpFactory.getList()
    .then(function(videolist){
      if(videolist){
      $scope.lists=videolist;
      console.log('recived',$scope.lists);
    }
      else {
        console.log("videolist value not recieved");
      }
      //$rootScope.list=videolist;
    },function(err){
      console.log(err);
    });





    //$scope.cookieval=$cookies.put('cookie',$scope.lists);
     

   /* if ($rootScope & $rootScope.users) {
        $scope.users = $rootScope.users;
    }
    console.log('chatCtrl-----', $scope.users);

    $scope.chatHistory = [];

   */
   
    /*console.log('jndfkj----------',i);
    var index = i.indexOf("=");
    console.log(index);
    var urlPath = i.slice(index + 1);
    console.log("https://www.youtube.com/embed/" + urlPath);
    //$scope.src = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + urlPath);
    playlist.push(urlPath);
    console.log(playlist);*/

    //}

    /*if (true) {

        for (var i = 0; i < $rootScope.source.length; i++) {
            console.log($rootScope.source[i]);
            var index = $rootScope.source[i].indexOf("=");
            console.log(index);
            var urlPath = $rootScope.source[i].slice(index + 1);

            $timeout(function() {
                console.log("https://www.youtube.com/embed/" + urlPath);
                $scope.src = $sce.trustAsResourceUrl("https://www.youtube.com/embed/" + urlPath);

            }, 5000);

        }
       
    }*/
    



});
