var app = angular.module('cuckooApp', []);
app.controller('indexCtr', function($scope, $http) {

  function getEmployees(){
    $http.get("/getEmployees").then(function (response) {
      console.log(response);
      $scope.employees = response.data;
    });
  }

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
      getEmployees();
    }, function(){
      console.log("failure");
    });
  }

  function eraseFields(){
    $scope.name = '';
    $scope.company = '';
  }

  eraseFields();
  getEmployees();
  $scope.addEmployee = addEmployee;

});
