lolsmartpick.controller('welcomeController', function($scope, $location, $sce, welcomeService) {
	$scope.goToPickAssistance = function(){
		welcomeService.initializePick();
		$location.path("/pick");
	}
	
	$scope.goToAboutUs = function(){
		$location.path("/about");
	}
})

.controller('allChampsController', function($scope, $location, $routeParams, allChampService) {

	$scope.champs = list_champ;

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

.controller('assistanceController', function($scope, $location, $routeParams, allChampService) {
	$scope.champs = allChampService.getChamps();

	$scope.backToPick = function() {
    	$location.path("/pick");
    }

    $scope.toogleView = function() {
    	$location.path("/allChamps/" +  $routeParams.id);
    }
})

.controller('resultController', function($scope, $location, $sce, posteService) {
	$scope.pickedEnnemies = posteService.getEnnemies();
})

.controller('aboutController', function($scope, $location, $sce) {
	// NOP
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