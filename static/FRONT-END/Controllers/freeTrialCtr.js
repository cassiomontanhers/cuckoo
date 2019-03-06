
angular.module('freeTrialController', []).controller('freeTrialCtr', ['$scope', '$rootScope', '$http', '$route', function($scope, $rootScope, $http, $route){
  $rootScope.css = $route.current.$$route.css;

}]);
