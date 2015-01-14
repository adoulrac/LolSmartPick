lolsmartpick.service('posteService', function() {
	var DEFAULT_POSTE = "N<br/>O<br/>N<br/>E";
	var champs = window.localStorage['localChamps'] == null ? list_champ : JSON.parse(window.localStorage['localChamps']);

	var alliesPoste = [
		{"name" : "T<br/>O<br/>P"},
		{"name" : "S<br/>U<br/>P"},
		{"name" : "A<br/>D<br/>C"},
		{"name" : "M<br/>I<br/>D"},
		{"name" : "J<br/>U<br/>N"}
	];

	var ennemiesPoste = [
		{"name" : "T<br/>O<br/>P"},
		{"name" : "S<br/>U<br/>P"},
		{"name" : "A<br/>D<br/>C"},
		{"name" : "M<br/>I<br/>D"},
		{"name" : "J<br/>U<br/>N"}
	];

	var allies = [
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"}
	];

	var ennemies = [
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"}
	];
	
	var excludesChamps = new Array();

	return {
	getAllies : function() {
		return allies;
	},

	getEnnemies : function() {
		return ennemies;
	},

	getAlliesPoste : function() {
		return alliesPoste;
	},

	getEnnemiesPoste : function() {
		return ennemiesPoste;
	},
	
	getExcludes : function() {
		excludesChamps = new Array();
		console.log(champs);
		for(var i=0; i < champs.length; i++){
		console.log(champs[i].exclude)
			if(champs[i].exclude == true) {
				excludesChamps.push(champs[i]);
			}
		}
		return excludesChamps;
	},
	
	resetAll : function(){
		console.log("Reset pick");
		allies = [
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"}
		];
		ennemies = [
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"},
		{"hero" : "Unknown", "img" : "unknown.png", "poste" : DEFAULT_POSTE, "counters" : "", "id":"-1"}
		];
		for(var i=0; i<champs.length; i++){
			champs[i].use = false;
		}
	},

	changeAlly : function(index, champ){
		console.log(champ.name + " added at the index " + index);
		allies[index].hero = champ.name;
		allies[index].img = champ.image;
		allies[index].id = champ.id;
	},

	changeEnnemy : function(index, champ){
		ennemies[index].hero = champ.name;
		ennemies[index].img = champ.image;
		ennemies[index].counters = champ.counters;
		ennemies[index].id = champ.id;
	},

	changePosteAlly : function(Oldposte) {
		if(Oldposte.poste != DEFAULT_POSTE){
			alliesPoste.push({"name" : Oldposte.poste});
		}
		Oldposte.poste = alliesPoste[0].name
		alliesPoste.splice(0,1);
		if(alliesPoste.length <= 0){
			alliesPoste.push({"name" : DEFAULT_POSTE});
		}
	},

	changePosteEnnemy : function(Oldposte) {
		if(Oldposte.poste != DEFAULT_POSTE){
			ennemiesPoste.push({"name" : Oldposte.poste});
		}
		Oldposte.poste = ennemiesPoste[0].name
		ennemiesPoste.splice(0,1);
		if(ennemiesPoste.length <= 0){
			ennemiesPoste.push({"name" : DEFAULT_POSTE});
		}
	}};
});

lolsmartpick.service('allChampService', function(posteService, $filter) {
	var champs = window.localStorage['localChamps'] == null ? list_champ : JSON.parse(window.localStorage['localChamps']);
	
	this.getChamps = function(){
		return champs;
	}

	this.selectChamp = function(champ, index){
		console.log(champ);
		if(index < 5){
			console.log(champ.name + " selectionné à l'index " + index);
			posteService.changeAlly(index, champ);
		}else if(index >=5){
			console.log(champ.name + " selectionné à l'index " + index);
			posteService.changeEnnemy(index-5, champ);
		}
		for(var i=0; i< champs.length; i++){
			if(champs[i].name == champ.name){
				champs[i].use = true;
				break;
			}
		}
	}
});

lolsmartpick.service('welcomeService', function(posteService, $filter) {

	this.initializePick = function(){
		console.log("Pick initialization");
		posteService.resetAll();
	}
});

lolsmartpick.service('assistanceService', function(posteService, $filter) {

	this.assistance = function(){
		console.log("assistance initialization");
		var alliesPoste = posteService.getAllies();
		var ennemiesPoste = posteService.getEnnemies();
		var excludes = posteService.getExcludes();
		console.log(excludes);
		//on retire les id -1
		var allies = [];
		var ennemies = [];
		for (indexA = 0; indexA < alliesPoste.length; ++indexA) {
			if(alliesPoste[indexA].id != -1) {
				allies.push(alliesPoste[indexA].id);
			}
		}
		for (indexE = 0; indexE < ennemiesPoste.length; ++indexE) {
			if(ennemiesPoste[indexE].id != -1) {
				ennemies.push(ennemiesPoste[indexE].id);
			}
		}
		/*var allies = [1,5,7,13];
		var ennemies = [85,43,24,121,2];*/
		var picks = allies.concat(ennemies).concat(excludes);
		var listResult = Array.apply(null, new Array(matriceChamps.length-1)).map(Number.prototype.valueOf,0);
		var score;
		//boucle sur tous les choix potentiels
		for (index = 0; index < listResult.length; ++index) {
			//si ce n'est pas un perso déjà choisi
		    if(picks.indexOf(index) == -1) {
		    	score = 0;
		    	for (indexA = 0; indexA < allies.length; ++indexA) {
		    		if(index < allies[indexA]) {
		    			score += matriceChamps[allies[indexA]][index];
		    		} else {
		    			score += matriceChamps[index][allies[indexA]];
		    		}
		    	}
		    	for (indexE = 0; indexE < ennemies.length; ++indexE) {
		    		if(index < ennemies[indexE]) {
		    			score += matriceChamps[index][ennemies[indexE]];
		    		} else {
		    			score -= matriceChamps[ennemies[indexE]][index];
		    		}
		    	}
		    	listResult[index] = score;
		    } else {
		    	listResult[index] = -100;
		    }
		}
		//on copie les résultats dans une map (on veut les index)
		var resultScoreIndex = [];
		for (var i in listResult) {
		    resultScoreIndex.push([listResult[i],i]);
		}
		//tri décroissant
		resultScoreIndex.sort(function(left, right) {
		  return left[0] > right[0] ? -1 : 1;
		});
		//on récupère les 5 premiers depuis la liste d'objet du modèle
		var indexes5 = resultScoreIndex.slice(0,5);
		var res = [];
		for (index = 0; index < indexes5.length; ++index) {
			res.push(list_champ[indexes5[index][1]]);
		}

		return res;
	}

});
