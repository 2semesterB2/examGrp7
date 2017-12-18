// JavaScript Document
//var playernumber=3;
//if (playernumber<=0) {
	//for (i = 0; i < 5; i++)
		
//}
var farvearray=['rgb(255,0,0)','rgb(0, 128, 0)','yellow','blue'];
var playernumber=0;
var spillerscore=[0,0,0,0,0,0,0,0,0,0,0,0,0];
var huskPlayernumber=0;
$('#nextTurn').click(function(){
	$('#buttonNext').hide();
	$('#game').show();
});
/*
efter loop, skal playernumber minusses med 1. 

*/
	
document.getElementById('pl3').value=3;
document.getElementById('pl4').value=4;
document.getElementById('pl5').value=5;
document.getElementById('pl6').value=6;
document.getElementById('pl7').value=7;
document.getElementById('pl8').value=8;

$('#pl3,#pl4,#pl5,#pl6,#pl7,#pl8').click(function(){
    	
	$("#players").hide();
	$("#game").show();
	playernumber=this.value;
	huskPlayernumber=Number(playernumber)+1;
	enspiller();
  });
/*
onclick sætte det i gang
funktion næste spiller sæt spillet i gang igen
*/
function næstespiller(sc){
	console.log(playernumber+"næstespill"+huskPlayernumber+'******');
	spillerscore[playernumber]=sc;
	playernumber=playernumber-1;
	if (playernumber==0){
		$('#game').hide();
		$('#leader').show();
		console.log('pnpnpn'+huskPlayernumber+'wwwwwwwwww');
		for(i=1; i<(huskPlayernumber); i++){
			$('#leader').append('<p>Player '+(i)+': '+spillerscore[i]+' points</p>');
			
		}
		
		
	} else {
		$('#visScore').html(sc);	
		$('#game').hide();
		$('#buttonNext').show();
		
//setTimeout(function() { $("#game").hide(); }, 5000);
		enspiller();
	}
}


function enspiller(aktueltnr){
	console.log(playernumber);
var antalklik=0;
var score=0;
var nummer3=setInterval(function(){
	$('#3').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	}
,350);
$('#3').click(function(){
clearInterval(nummer3);
	if($('#3').css('background-color')=='rgb(0, 128, 0)'){
		score=score+1;}
antalklik=antalklik+1;
	$('#3').off('click');
	if(antalklik>3){
		console.log(' Your Score: ' +score);
		næstespiller(score);
	}
		
			  });

var nummer4=setInterval(function(){
	$('#4').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
	
},350);
$('#4').click(function(){
clearInterval(nummer4);
	if($('#4').css('background-color')=='rgb(0, 128, 0)'){
//	if($('#4').css('background-color')=='rgb(255,0,0)'){      GAMMEL LINIE
		//  vi havde ikke lagt mærke til at der var spaces efter kommaerne da vi kiggede på outputtet fra nummer 5
		score=score+1;
	};
	antalklik=antalklik+1;
	$('#4').off('click');
	if(antalklik>3){
		console.log(' Your Score: ' +score);
		næstespiller(score);
	}  });

var nummer5=setInterval(function(){
	$('#5').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},350);
$('#5').click(function(){
clearInterval(nummer5);
	if($('#5').css('background-color')=='rgb(0, 128, 0)'){
		score=score+1;}

	antalklik=antalklik+1;
$('#5').off('click');
	if(antalklik>3){
		console.log(' Your Score: ' +score);
		næstespiller(score);
		
	}  });



			 

var nummer6=setInterval(function(){
$('#6').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},350);
$('#6').click(function(){
clearInterval(nummer6);
	if($('#6').css('background-color')=='rgb(0, 128, 0)'){
		score=score+1;}
	antalklik=antalklik+1;
$('#6').off('click');
	if(antalklik>3){
		console.log(' Your Score: ' +score);
		næstespiller(score);
	}  });
return;
	
}

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