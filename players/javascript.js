// JavaScript Document
//var playernumber=3;
//if (playernumber<=0) {
	//for (i = 0; i < 5; i++)
		
//}

var farvearray=['red','green','yellow','blue'];
var antalklik=0;
var score=0;
	
var nummer3=setInterval(function(){
	$('#3').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	}
,200);
$('#3').click(function(){
clearInterval(nummer3)

			  });

var nummer4=setInterval(function(){
	$('#4').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);//https://stackoverflow.com/questions/4550505/getting-a-random-value-from-a-javascript-array
	
},200);
$('#4').click(function(){
clearInterval(nummer4)
			  });

var nummer5=setInterval(function(){
	$('#5').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},200);
$('#5').click(function(){
clearInterval(nummer5)
// hvis css er blå +1 score




			  });

var nummer6=setInterval(function(){
$('#6').css('background-color',farvearray[Math.floor(Math.random() * farvearray.length)]);
	
},200);
$('#6').click(function(){
clearInterval(nummer6)
			  });

