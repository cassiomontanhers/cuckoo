
angular.module('indexController', []).controller('indexCtr', ['$scope', '$http', function($scope, $http){

  function getEmployees(){
    $http.get("/getEmployees").then(function (response) {
      console.log(response);
      $scope.employees = response.data;
    });
  }

  getEmployees();

}]);
