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
		//  vi havde ikke llagt mærke til at der var spaces efter kommaerne da vi kiggede på outputtet fra nummer 5
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

document.getElementById('3').value=3;
console.log(document.getElementById('3').value);

document.getElementById('4').value=4;
console.log(document.getElementById('4').value);

document.getElementById('5').value=5;
console.log(document.getElementById('5').value);

document.getElementById('6').value=6;
console.log(document.getElementById('6').value);

document.getElementById('7').value=7;
console.log(document.getElementById('7').value);

document.getElementById('8').value=8;
console.log(document.getElementById('8').value);

