lolsmartpick.service('posteService', function() {
	var DEFAULT_POSTE = "N<br/>O<br/>N<br/>E";

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
		{"hero" : "Aatrox", "img" : "img/icons/AatroxSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Ahri", "img" : "img/icons/AhriSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Akali", "img" : "img/icons/AkaliSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Alistar", "img" : "img/icons/AlistarSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Amumu", "img" : "img/icons/AmumuSquare.png", "poste" : DEFAULT_POSTE},
	];

	var ennemies = [
		{"hero" : "Anivia", "img" : "img/icons/AniviaSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Annie", "img" : "img/icons/AnnieSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Ashe", "img" : "img/icons/AsheSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Azir", "img" : "img/icons/AzirSquare.png", "poste" : DEFAULT_POSTE},
		{"hero" : "Amumu", "img" : "img/icons/AmumuSquare.png", "poste" : DEFAULT_POSTE},
	];

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

	changeAlly : function(index, champ){
		console.log(champ.name + " added at the index " + index);
		allies[index].hero = champ.name;
		allies[index].img = champ.image;
	},

	changeEnnemy : function(index, champ){
		ennemies[index].hero = champ.name;
		ennemies[index].img = champ.image;
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
	var champs = list_champ;

	this.getChamps = function(){
		return champs;
	}

	this.selectChamp = function(champ, index){
		if(index < 5){
			console.log(champ.name + " selectionné à l'index " + index);
			posteService.changeAlly(index, champ);
		}else if(index >=5){
			console.log(champ.name + " selectionné à l'index " + index);
			posteService.changeEnnemy(index-5, champ);
		}
		for(tempChamp in champs){
			if(tempChamp.name == champ.name){
				tempChamp.use = true;
				break;
			}
		}
	}
});