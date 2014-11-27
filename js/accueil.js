angular.module('lolsmartpick', ['ngTouch', 'ngSanitize', 'ngRoute'])
.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/pick', {
        templateUrl: 'views/pickChamps.html',
        controller: 'accueilController'
      }).
      when('/champs', {
        templateUrl: 'views/listChamp.html',
        controller: 'listChampController'
      }).
      otherwise({
        redirectTo: '/pick'
      });
  }])
.controller('accueilController', ['$scope', '$sce', '$location', function($scope, $sce, $location) {
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
		$location.path("/champs");
	}
}]); 