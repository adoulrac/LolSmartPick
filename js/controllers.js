lolsmartpick.controller('welcomeController', function($scope, $location, $sce, welcomeService) {
	$scope.goToPickAssistance = function(){
		welcomeService.initializePick();
		$location.path("/pick");
	}

	$scope.goToParameters = function(){
		$location.path("/parameters");
	}
	
	$scope.goToAboutUs = function(){
		$location.path("/about");
	}
})

.controller('allChampsController', function($scope, $location, $routeParams, allChampService) {
	$scope.champs = window.localStorage['localChamps'] == null ? list_champ : JSON.parse(window.localStorage['localChamps']);

	$scope.selectChamp = function(champ) {
		allChampService.selectChamp(champ, $routeParams.id);
		$location.path("/pick");
	}

	$scope.backToPick = function() {
    	$location.path("/pick");
    }

    $scope.toogleView = function() {
    	$location.path("/assistance/" +  $routeParams.id);
    }
})

.controller('assistanceController', function($scope, $location, $routeParams, allChampService, assistanceService) {
	$scope.champs = assistanceService.assistance($routeParams.id);

	$scope.backToPick = function() {
    	$location.path("/pick");
    }

    $scope.toogleView = function() {
    	$location.path("/allChamps/" +  $routeParams.id);
    }
    
    $scope.selectChamp = function(champ) {
		allChampService.selectChamp(champ, $routeParams.id);
		$location.path("/pick");
	}
})

.controller('resultController', function($scope, $location, $sce, posteService) {
	$scope.pickedEnnemies = posteService.getEnnemies();
})

.controller('aboutController', function($scope, $location, $sce) {
	// NOP
})

.controller('parametersController', function($scope, $location, $sce) {
	$scope.champs = window.localStorage['localChamps'] == null ? list_champ : JSON.parse(window.localStorage['localChamps']);

	$scope.backToHome = function() {
    	$location.path("/welcome");
    }

    $scope.excludeChamp = function(index){
    	if($scope.champs[index].exclude == 'true'){
    		$scope.champs[index].exclude = 'false';
    	} else {
     		$scope.champs[index].exclude = 'true';   		
    	}
    	window.localStorage['localChamps'] = JSON.stringify($scope.champs);
    }

})

.controller('pickController', ['$scope', '$location', 
	'$sce', 'posteService', function($scope, $location, $sce, posteService) {
	var DEFAULT_POSTE = "N<br/>O<br/>N<br/>E";
	$scope.alliesPoste = posteService.getAlliesPoste();

	$scope.ennemiesPoste = posteService.getEnnemiesPoste();

	$scope.allies = posteService.getAllies();

	$scope.ennemies = posteService.getEnnemies();

	$scope.trulyTrustHTML = function(html){
		return $sce.trustAsHtml(html);
	};

	$scope.changePosteAlly = function(OldPost) {
		posteService.changePosteAlly(OldPost);
	}

	$scope.changePosteEnnemy = function(OldPost) {
		posteService.changePosteEnnemy(OldPost);
	}

	$scope.selectChamp = function(index){
		$location.path("/allChamps/" + index);
	}
	
	$scope.startGame = function(){
		$location.path("/result");
	}

}]);