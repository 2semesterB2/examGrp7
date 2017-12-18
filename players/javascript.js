// JavaScript Document
//var playernumber=3;
//if (playernumber<=0) {
	//for (i = 0; i < 5; i++)
		
//}

var farvearray=['rgb(255,0,0)','green','yellow','blue'];
var antalklik=0;
var score=0;



var nummer3=setInterval(function(){
	$('#3').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	}
,1000);
$('#3').click(function(){
clearInterval(nummer3);
	if($('#3').css('background-color')=='rgb(255, 0, 0)'){
		score=score+1;}
antalklik=antalklik+1;
	$('#3').off('click');
	if(antalklik>3){
		alert(' Your Score: ' +score);
	}
		
			  });

var nummer4=setInterval(function(){
	$('#4').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
	
},1000);
$('#4').click(function(){
clearInterval(nummer4);
	if($('#4').css('background-color')=='rgb(255, 0, 0)'){
//	if($('#4').css('background-color')=='rgb(255,0,0)'){      GAMMEL LINIE
		//  vi havde ikke lagt mærke til at der var spaces efter kommaerne da vi kiggede på outputtet fra nummer 5
		score=score+1;
	};
	antalklik=antalklik+1;
	$('#4').off('click');
	if(antalklik>3){
		alert(' Your Score: ' +score);
	}  });

var nummer5=setInterval(function(){
	$('#5').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},1000);
$('#5').click(function(){
clearInterval(nummer5);
	if($('#5').css('background-color')=='rgb(255, 0, 0)'){
		score=score+1;}

	antalklik=antalklik+1;
$('#5').off('click');
	if(antalklik>3){
		alert(' Your Score: ' +score);
	}  });

// hvis css er blå +1 score

			 

var nummer6=setInterval(function(){
$('#6').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},1000);
$('#6').click(function(){
clearInterval(nummer6);
	if($('#6').css('background-color')=='rgb(255, 0, 0)'){
		score=score+1;}
	antalklik=antalklik+1;
$('#6').off('click');
	if(antalklik>3){
		alert(' Your Score: ' +score);
	}  });

document.getElementById('3pl').value=3;

document.getElementById('4pl').value=4;

document.getElementById('5pl').value=5;

document.getElementById('6pl').value=6;

document.getElementById('7pl').value=7;

document.getElementById('8pl').value=8;

/* stilet i css
$('#3pl, #4pl, #5pl, #6pl, #7pl, #8pl, ').click(function(){
    $("#players").css('display')=='none';
  });
  en funktion der gemmer eleenterne (i stedet for css)
$.click(function () {
  $("#game, #rateus").hide();
});



 //Bind the click event for the login button
   $("#signin").bind("click", function() { alert("test"); });
*/

$('#3pl,#4pl,#5pl,#6pl,#7pl,#8pl').click(function(){
    	
	$("#players").hide();
	/* var playernumber.this value. 
	efter loop playernumber -1 
	if playernumber < 1, #game.hide #leaderboard.show eller goto leaderboard.php 
	
	gammel 
	var playernumber er knappen der er trykket på (antal spillere.)
den skal vide hvilken knap vi trykker på. (har en value, burde virke) 

i loopet. 
når igennenm
PlAYERNUMBER -1
 if playernummer < 1 
.show leaderboard 

Antal gange det skal spilles. 

alert ved variabel playernumber. efter der er trykket på knappen. 

	*/
	
  });