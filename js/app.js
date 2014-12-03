// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('lolsmartpick', ['ionic', 'ngRoute', 'ngTouch'])

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

  $routeProvider.when('/pick', {
    templateUrl: 'templates/pickChamps.html',
    controller: 'pickController'
  });
  
  $routeProvider.when('/assistance', {
    templateUrl: 'templates/assistance.html',
    controller: 'assistanceController'
  });
  
  $routeProvider.when('/allChamps', {
    templateUrl: 'templates/allChamps.html',
    controller: 'allChampsController'
  });

  // if none of the above routes are met, use this fallback
  // which executes the 'IntroCtrl' controller (controllers.js)
  $routeProvider.otherwise({
    redirectTo: '/welcome'
  });
})
  
.controller('welcomeController', function($scope, $location) {
	$scope.goToPickAssistance = function(){
		$location.path("/pick");
	}
})

.controller('allChampsController', function($scope, $location) {
	$scope.toogleView = function(){
		$location.path("/assistance");
	}
})

.controller('assistanceController', function($scope, $location) {
	$scope.toogleView = function(){
		$location.path("/allChamps");
	}
})

.controller('resultController', function($scope, $location) {
	//todo
})

.controller('pickController', function($scope, $location, $sce) {
	var DEFAULT_POSTE = "N<br/>O<br/>N<br/>E";
	$scope.alliesPoste = [
		{"name" : "T<br/>O<br/>P"},
		{"name" : "S<br/>U<br/>P"},
		{"name" : "A<br/>D<br/>C"},
		{"name" : "M<br/>I<br/>D"},
		{"name" : "J<br/>U<br/>N"}
	];

	$scope.ennemiesPoste = [
		{"name" : "T<br/>O<br/>P"},
		{"name" : "S<br/>U<br/>P"},
		{"name" : "A<br/>D<br/>C"},
		{"name" : "M<br/>I<br/>D"},
		{"name" : "J<br/>U<br/>N"}
	];

	$scope.allies = [
		{"hero" : "Aatrox", "img" : "img/icons/AatroxSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Ahri", "img" : "img/icons/AhriSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Akali", "img" : "img/icons/AkaliSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Alistar", "img" : "img/icons/AlistarSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Amumu", "img" : "img/icons/AmumuSquare.png", "poste" : DEFAULT_POSTE},
	];

	$scope.ennemies = [
		{"hero" : "Anivia", "img" : "img/icons/AniviaSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Annie", "img" : "img/icons/AnnieSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Ashe", "img" : "img/icons/AsheSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Azir", "img" : "img/icons/AzirSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Amumu", "img" : "img/icons/AmumuSquare.png", "poste" : DEFAULT_POSTE},
	];

	$scope.trulyTrustHTML = function(html){
		return $sce.trustAsHtml(html);
	};

	$scope.changePoste = function(listPoste, ally) {
		if(ally.poste != DEFAULT_POSTE){
			listPoste.push({"name" : ally.poste});
		}
		ally.poste = listPoste[0].name
		listPoste.splice(0,1);
		if(listPoste.length <= 0){
			listPoste.push({"name" : DEFAULT_POSTE});
		}
	};

	$scope.selectChamp = function(ally){
		$location.path("/allChamps");
	}
	
	$scope.startGame = function(){
		$location.path("/result");
	}

});
