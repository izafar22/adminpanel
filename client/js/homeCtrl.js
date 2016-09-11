playApp.controller('homeCtrl',function($scope,$state,httpFactory,$timeout)
{
 //var socket= io();
    console.log("homeCtrl loaded--");
    /*$scope.data = {};*/

    console.log($scope.songUrl);

    



     /*var req={
        method:"GET",
        //url:"http://127.0.0.1:3000/data",
        url:"https://www.youtube.com/watch?v=UcVIRGDja9k",

    headers:{
            'Content-Type':'application/json'
        }
    };*/

     //$scope.getData = httpFactory.youtubehit(req);

    /*$scope.chat = function(){
        //$rootScope.username=$scope.data.username;
        //alert("sdfsdf")
        $scope.data.userId = (Math.floor(Math.random()*90000000) + 10000);
        $rootScope.currentUserID = $scope.data.userId;
        socket.emit('createOnlines',$scope.data);
	    socket.on('allusers',function(postdata){
	    	$rootScope.users = postdata;
            $state.go('chat');
	    }) 
    }*/

    


    $scope.submit = function(){
        console.log($scope.songUrl);
        httpFactory.youtubehit({'url':$scope.songUrl})
        .then(function(res){
            console.log('----submit------',res);
             $state.go('play');
        },function(err){
           console.log(err);
        });
        /*console.log(result);
        console.log(err);
        console.log(result.data.result);
        httpFactory.setList(result.data.result);*/
        
    



        
        
  
    };


});
