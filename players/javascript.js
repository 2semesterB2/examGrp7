// JavaScript Document
//var playernumber=3;
//if (playernumber<=0) {
	//for (i = 0; i < 5; i++)
		
//}

var nummer3farve=0;
var farvearray=['red','green','yellow','blue'];
var nummer4farve=0;
var farvearray2=['green','yellow','blue','red'];
var nummer5farve=0;
var farvearray3=['yellow','blue','red','green'];
var nummer6farve=0;
var farvearray4=['blue','red','green','yellow'];

var nummer3=setInterval(function(){
	$('#3').css('background-color', farvearray[nummer3farve]);
	nummer3farve=nummer3farve+1;
	if(nummer3farve>3){
		nummer3farve=0;
	}
},200);


var nummer4=setInterval(function(){
	$('#4').css('background-color', farvearray2[nummer4farve]);
	nummer4farve=nummer4farve+1;
	if(nummer4farve>3){
		nummer4farve=0;
	}
},200);

var nummer5=setInterval(function(){
	$('#5').css('background-color', farvearray3[nummer5farve]);
	nummer5farve=nummer5farve+1;
	if(nummer5farve>3){
		nummer5farve=0;
	}
},200);

var nummer6=setInterval(function(){
	$('#6').css('background-color', farvearray4[nummer6farve]);
	nummer6farve=nummer6farve+1;
	if(nummer6farve>3){
		nummer6farve=0;
	}
},200);

