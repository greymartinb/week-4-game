


//global variables//

var fightsWon= 0;
	
var firstTime = true;

var secondTime = true;

var resetTrigger= false;

var defenderFilled= false;


var players = [
	 luke = {
	 	name : "Luke Skywalker",
	 	attack : 8,
	 	attackIterator: 8,
	 	healthPoints: 100,
	 	image: "'assets/images/Luke.png' class= 'portrait'"
	 	},
	 obiWan = {
	 	name : "Obi-Wan Kenobi",
	 	attack : 12,
	 	attackIterator: 8,
	 	healthPoints : 120,
	 	image: "'assets/images/obiWan.jpg' class= 'portrait'"
		},
	 darthSidious = {
	 	name : "Darth Sidious",
	 	attack : 15,
	 	attackIterator: 20,
	 	healthPoints : 150,
	 	image: "'assets/images/darthSidious.jpg' class= 'portrait'"
	 	},
	 darthMaul = {
	 	name : "Darth Maul",
	 	attack : 18,
	 	attackIterator: 25,
	 	healthPoints : 160,
	 	image: "'assets/images/darthMaul.jpg' class= 'portrait'"
	 },
	 localAttacker = {
	 	name : "shithead",
	 	attack : 5,
	 	attackIterator: 5,
	 	healthPoints: 100
	 	},
	 localDefender = {
	 	name : "bum",
	 	attack : 5,
	 	attackIterator: 5,
	 	healthPoints: 100
	 	}	
	 ];
//prints out players to screen//
var printPlayers = function()
{
	$("div.attacker").hide();
	$("div.defender").hide();
	$("div.lukePossibleDefender").hide();
	$("div.obiWanPossibleDefender").hide();
	$("div.darthSidiousPossibleDefender").hide();
	$("div.darthMaulPossibleDefender").hide();
	$("div.lukeDefender").hide();
	$("div.obiWanDefender").hide();
	$("div.darthSidiousDefender").hide();
	$("div.darthMaulDefender").hide();
};

var reset = function()
{
	if (resetTrigger === true)
	{
	$("div.luke").show();
	$("div.obiWan").show();
	$("div.darthSidious").show();
	$("div.darthMaul").show();
	$("div.attacker").hide();
	$("div.defender").hide();
	$("div.lukePossibleDefender").hide();
	$("div.obiWanPossibleDefender").hide();
	$("div.darthSidiousPossibleDefender").hide();
	$("div.darthMaulPossibleDefender").hide();
	$("div.lukeDefender").hide();
	$("div.obiWanDefender").hide();
	$("div.darthSidiousDefender").hide();
	$("div.darthMaulDefender").hide();
	firstTime= true;
	secondTime= true;
	fightsWon=0;
}
};




// // attack function //
var attack = function(attacker,defender) 
{

	if (defender.healthPoints >0 && secondTime===false ){
	defender.healthPoints = defender.healthPoints - attacker.attack;
	attacker.healthPoints = attacker.healthPoints - defender.attack;
	attacker.attack= attacker.attack + attacker.attackIterator;
	$("div.obiWan").hide();
	$("div.darthSidious").hide();
	$("div.darthMaul").hide();
	$("div.obiWanDefender").hide();
	$("div.darthSidiousDefender").hide();
	$("div.darthMaulDefender").hide();
	$("div.attacker").replaceWith("<div class='attacker firstClick'>" + "<img src="+attacker.image+">"+"<p> Name : " + attacker.name + "</p>" + "<p> Attack : " + attacker.attack + "</p>"+"<p>HP : " + attacker.healthPoints + "</p>"+ "</div>");
	$("div.defender").replaceWith("<div class='defender thirdClick'>"+ "<img src="+ defender.image+">" + "<p> Name : " + defender.name + "</p>" + "<p> Attack : " + defender.attack + "</p>"+"<p>HP : " + defender.healthPoints + "</p>"+ "</div>");
			 

 if (attacker.healthPoints <= 0 && secondTime===false){
		$("div.defender").replaceWith ( "<div class='defender thirdClick'><h1>You Lost, Click Reset To Start Again </div>");
		resetTrigger = true;
		secondTime= true;
	} else if (defender.healthPoints <= 0 && secondTime===false)
		{$("div.defender").replaceWith ("<div class='defender thirdClick'><h1> You won this fight, pick your next opponent then click attack </h5> </div>");
		secondTime= true;
		defenderFilled=false;
		fightsWon++;
	};
return secondTime;
};};

// extract selector value// 
var clickExtractor= function(localthis)
{
var selector = $(localthis);
};


var playerSelect = function(localthis){



	if ($(localthis).hasClass("luke") && firstTime=== true)
	{
		$("div.obiWan").hide();
		$("div.luke").hide();
		$("div.darthSidious").hide();
		$("div.darthMaul").hide();
		$("div.obiWanPossibleDefender").show();
		$("div.darthSidiousPossibleDefender").show();
		$("div.darthMaulPossibleDefender").show();
		localAttacker = players[0];
	 }

	else if ($(localthis).hasClass("obiWan") && firstTime=== true)
	{	$("div.obiWan").hide();
		$("div.luke").hide();
		$("div.darthSidious").hide();
		$("div.darthMaul").hide();
		$("div.lukePossibleDefender").show();
		$("div.darthSidiousPossibleDefender").show();
		$("div.darthMaulPossibleDefender").show();
		localAttacker = players[1];
	}
	else if ($(localthis).hasClass("darthSidious")&& firstTime=== true)
	{
	$("div.obiWan").hide();
		$("div.luke").hide();
		$("div.darthSidious").hide();
		$("div.darthMaul").hide();;
		$("div.lukePossibleDefender").show();
		$("div.obiWanPossibleDefender").show();
		$("div.darthMaulPossibleDefender").show();
		localAttacker = players[2];
	}
	else if ($(localthis).hasClass("darthMaul")&& firstTime=== true)
	{
	$("div.obiWan").hide();
		$("div.luke").hide();
		$("div.darthSidious").hide();
		$("div.darthMaul").hide();
		$("div.lukePossibleDefender").show();
		$("div.obiWanPossibleDefender").show();
		$("div.darthSidiousPossibleDefender").show();
		localAttacker = players[3];
	}
	firstTime=false;
	return localAttacker;
	};

	defenderSelect = function(localthis){
	if ($(localthis).hasClass("lukePossibleDefender") && secondTime=== true)
	{	$("div.lukePossibleDefender").hide();
		localDefender = players[0];
	}
	else if ($(localthis).hasClass("obiWanPossibleDefender") && secondTime=== true)
	{	$("div.obiWanPossibleDefender").hide();
		localDefender = players[1];
	}
	else if ($(localthis).hasClass("darthSidiousPossibleDefender") && secondTime=== true)
	{	$("div.darthSidiousPossibleDefender").hide();
		localDefender = players[2];
	}
	else if ($(localthis).hasClass("darthMaulPossibleDefender") && secondTime=== true)
	{	$("div.darthMaulPossibleDefender").hide();
		localDefender = players[3];
	}
	secondTime=false;
	defenderFilled=true;
	return localDefender;

	};
//MAIN//
var attacker = {
	 	name : "Darth Bung",
	 	attack : 25,
	 	attackIterator: 25,
	 	healthPoints : 160
	 };

var defender = {
	 	name : "Darth Happy",
	 	attack : 25,
	 	attackIterator: 25,
	 	healthPoints : 160
	 }

