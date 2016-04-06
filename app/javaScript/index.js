var app = angular.module('LoginTest',[]);
app.controller('indexController',function($scope,$http){
  // $scope.name = "Peter";
  // $scope.password = "****";
  $scope.submit = function(){

      $http({
        method: 'POST',
        url: '/api/authenticate',
        headers: {'Content-Type': 'application/x-www-form-urlencoded'},
        transformRequest: function(obj) {
            var str = [];
            for(var p in obj)
            str.push(encodeURIComponent(p) + "=" + encodeURIComponent(obj[p]));
            return str.join("&");
        },
        data: {name: $scope.name, password: $scope.password}
    }).success(function (data, status) {
      // if(data.success){
      //   $http.get("")
      // }
      console.log(data);
      console.log(status);
    });
  };
});
