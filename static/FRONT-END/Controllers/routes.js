
angular.module('routes', ["ngRoute"]).config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "FRONT-END/Pages/home.html",
    controller : "homeCtr",
    css: 'FRONT-END/Styles/home.css'
  })
  .when("/contact", {
    templateUrl : "FRONT-END/Pages/contact.html",
    controller : "contactCtr",
    css: 'FRONT-END/Styles/contact.css'
  })
  .when("/feature", {
    templateUrl : "FRONT-END/Pages/feature.html",
    controller : "featureCtr",
    css: 'FRONT-END/Styles/feature.css'
  })
  .when("/OLDMAIN", {
    templateUrl : "FRONT-END/Pages/main.html",
    controller : "indexCtr",
    css: 'FRONT-END/Styles/main.css'
  })
  .when("/OLDLOG", {
    templateUrl : "FRONT-END/Pages/log.html",
    controller : "logCtr",
    css: ''
  });
});
