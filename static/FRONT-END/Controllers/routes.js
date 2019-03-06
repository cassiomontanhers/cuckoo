
angular.module('routes', ["ngRoute"]).config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "FRONT-END/Pages/main.html",
    controller : "indexCtr",
    css: 'FRONT-END/Styles/main.css'
  })
  .when("/log", {
    templateUrl : "FRONT-END/Pages/log.html",
    controller : "logCtr",
    css: ''
  });
});
