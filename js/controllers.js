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

.controller('resultController', function($scope, $http, $location, $sce, posteService) {
	$scope.pickedEnnemies = posteService.getEnnemies();
	//$scope.detailsEnnemies = new Array();
	
	$scope.goToFullResult = function() {
    	$http.get('data/championFull.json')
    		.then(function(res) {
    			var json = angular.fromJson(res.data);
    			
    			for(var c in $scope.pickedEnnemies) {
    				var champName = $scope.pickedEnnemies[c].hero;
    				
    				angular.forEach(json.data, function(value, key) {
    					if (value.name === champName) {
    						$scope.pickedEnnemies[c].title = value.title;
    						$scope.pickedEnnemies[c].blurb = value.blurb;
    						$scope.pickedEnnemies[c].allytips = value.allytips;
    						$scope.pickedEnnemies[c].enemytips = value.enemytips;
    						$scope.pickedEnnemies[c].tags = value.tags;
    					}
					});
    			}
    			//console.log($scope.detailsEnnemies);
    			$location.path("/fullResult");
    	});
    	
    	console.log($scope.detailsEnnemies);
    	$location.path("/fullResult");
    }
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