var app = angular.module('cuckooApp', ["ngRoute"]);

app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "main.html",
    controller : "indexCtr"
  })
  .when("/log", {
    templateUrl : "log.html",
    controller : "logCtr"
  });
});

app.controller('logCtr', function($scope, $http) {

  function addEmployee(){
    var req = {
     method: 'POST',
     url: '/addEmployee',
     headers: {
       'Content-Type': 'application/json'
     },
     data : {
           name: $scope.name,
           company: $scope.company
           }
    }

    $http(req).then(function(){
      console.log("success");
      eraseFields();
    }, function(){
      console.log("failure");
    });
  }

  function eraseFields(){
    $scope.name = '';
    $scope.company = '';
  }

  eraseFields();
  $scope.addEmployee = addEmployee;

});

app.controller('indexCtr', function($scope, $http) {

  function getEmployees(){
    $http.get("/getEmployees").then(function (response) {
      console.log(response);
      $scope.employees = response.data;
    });
  }

  getEmployees();

});
