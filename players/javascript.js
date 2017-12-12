// JavaScript Document
//var playernumber=3;
//if (playernumber<=0) {
	//for (i = 0; i < 5; i++)
		
//}

var nummer3farve=0;
var farvearray=('red','green','yellow','blue')

var nummer3=setTimeout(function(){
	$('#3').css('background-color:'+farvearray[nummer3farve]);
	nummer3farve=nummer3farve+1;
	alert('hallo');
	
},1000)
