// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
var lolsmartpick = angular.module('lolsmartpick', ['ionic', 'ngRoute', 'ngTouch'])

.config(function ($compileProvider){
  // Set the whitelist for certain URLs just to be safe
  $compileProvider.aHrefSanitizationWhitelist(/^\s*(https?|ftp|mailto|file|tel):/);
})

.config(function($routeProvider, $locationProvider) {
  // Set up the initial routes that our app will respond to.
  // These are then tied up to our nav router which animates and
  // updates a navigation bar
  $routeProvider.when('/welcome', {
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeController'
  });
  
  $routeProvider.when('/result', {
    templateUrl: 'templates/result.html',
    controller: 'resultController'
  });
  
  $routeProvider.when('/fullResult', {
    templateUrl: 'templates/fullResult.html',
    controller: 'resultController'
  });

  $routeProvider.when('/pick', {
    templateUrl: 'templates/pickChamps.html',
    controller: 'pickController'
  });
  
  $routeProvider.when('/assistance/:id', {
    templateUrl: 'templates/assistance.html',
    controller: 'assistanceController'
  });
  
  $routeProvider.when('/allChamps/:id', {
    templateUrl: 'templates/allChamps.html',
    controller: 'allChampsController'
  });
  
  $routeProvider.when('/about', {
    templateUrl: 'templates/aboutUs.html',
    controller: 'aboutController'
  });

  $routeProvider.when('/parameters', {
    templateUrl: 'templates/parametre.html',
    controller: 'parametersController'
  });

  // if none of the above routes are met, use this fallback
  // which executes the 'IntroCtrl' controller (controllers.js)
  $routeProvider.otherwise({
    redirectTo: '/welcome'
  });
});
