
angular.module('routes', ["ngRoute"]).config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "Pages/main.html",
    controller : "indexCtr"
  })
  .when("/log", {
    templateUrl : "Pages/log.html",
    controller : "logCtr"
  });
});
