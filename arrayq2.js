$(document).ready(function(){
	
document.body.onmousedown = function() { return false; } //so page is unselectable

	//Canvas stuff
	var canvas = $("#canvas")[0];
	var ctx = canvas.getContext("2d");
	var w = $("#canvas").width();
	var h = $("#canvas").height();
	var mx, my;
	
	var myArray = [];
	
	

	var num = Math.floor(Math.random()*2);

	
	
	

	/////////////////////////////////
	////////////////////////////////
	////////	GAME INIT
	///////	Runs this code right away, as soon as the page loads.
	//////	Use this code to get everything in order before your game starts 
	//////////////////////////////
	/////////////////////////////
	function init()
	{

	//////////
	///STATE VARIABLES
	
	myArray[0] = prompt ("Enter a Past-Tense Verb", "");
	myArray[1] = prompt ("Enter a Past-Tense Verb", "");
	myArray[2] = prompt ("Enter a Past-Tense Verb", "");
	myArray[3] = prompt ("Enter a Name/thing", "");
	myArray[4] = prompt ("Enter a Place", "");
	myArray[5] = prompt ("Enter a Name/thing", "");
	myArray[6] = prompt ("Enter a Name/thing", "");
	myArray[7] = prompt ("Enter a Adjective", "");
	myArray[8] = prompt ("Enter a Adjective", "");
	myArray[9] = prompt ("Enter a Adjective", "");
	myArray[10] = prompt ("Enter a Adjective", "");
	
	
	//////////////////////
	///GAME ENGINE START
	//	This starts your game/program
	//	"paint is the piece of code that runs over and over again, so put all the stuff you want to draw in here
	//	"60" sets how fast things should go
	//	Once you choose a good speed for your program, you will never need to update this file ever again.

	if(typeof game_loop != "undefined") clearInterval(game_loop);
		game_loop = setInterval(paint, 60);
	}

	init();	
	


	
	///////////////////////////////////////////////////////
	//////////////////////////////////////////////////////
	////////	Main Game Engine
	////////////////////////////////////////////////////
	///////////////////////////////////////////////////
	function paint()
	{
		
		ctx.fillStyle = 'white';
		ctx.fillRect(0,0, 640,480);	
		
		ctx.font = "11pt New Times Roman";	
		ctx.fillStyle = 'black';
		
		
		
		if (num == 0) {
		ctx.fillText("Once upon a time " + myArray[3] + " lived in the humble village of, " + myArray[4], 0, 20);
		ctx.fillText("But one day the evil yet strikingly " + myArray[7] + " " + myArray[5] + " " + myArray[0] + " the town", 0, 40); 
		ctx.fillText("'Sweet baby " + myArray[6] + " ', called out the townsfolk in terror.", 0, 60);
		ctx.fillText("Being the " + myArray[8] + " hero that they are, " + myArray[3] + " " + myArray[1] + " " + myArray[5], 0, 80);
		ctx.fillText("' Why are you so " + myArray[9] + "?' cried " + myArray[5] + " as they wallowed in a puddle of their own tears", 0, 100);
		ctx.fillText("'Because I am " + myArray[9] + " " + myArray[3] + "', bellowed " + myArray[3] + " as they " + myArray[2] + " in triumph", 0, 120);
		ctx.fillText("And the village lived happily ever after the great and " + myArray[10] + " " +  myArray[5] + " was defeated", 0, 140);
		
		
	
		}else if (num == 0) {
		
		ctx.fillText(myArray[3] + " was a " + myArray[7] + " plebeian " + "who only cared about " + myArray[5], 0, 20);
		ctx.fillText("However, their world was turned upside down when the " + myArray[8] + " Prince arrive to their village of " + myArray[4], 0, 40); 
		ctx.fillText("'Hello " + myArray[9] + " peasants, I  have " + myArray[0] + "'" + " blared the Prince", 0, 60);
		ctx.fillText("'Wow, they remind me of " + myArray[5] + "! I must marry him', thought " + myArray[3], 0, 80);
		ctx.fillText(myArray[3] + " retrieved their most precious belonging, a " + myArray[6] + ", and offered it to the Prince", 0, 100);
		ctx.fillText("'Why this is so " + myArray[10] + " that I have " + myArray[1] + "' said the Prince as he " + myArray[2] , 0, 120);
		ctx.fillText("'Wonderful! Let us get married this Sunday since it's like tradition or something' said " + myArray[3], 0, 140);
		ctx.fillText("Then they got married, the End", 0, 160);
		
		
		
		}
		
		
		
	
		

		
	}////////////////////////////////////////////////////////////////////////////////END PAINT/ GAME ENGINE
	
	
	
	
	////////////////////////////////////////////////////////
	///////////////////////////////////////////////////////
	/////	MOUSE LISTENER 
	//////////////////////////////////////////////////////
	/////////////////////////////////////////////////////
	





	/////////////////
	// Mouse Click
	///////////////
	canvas.addEventListener('click', function (evt){
		
		if(mx < w / 2) {clicker = true;}
		else {clicker = false;}
	      
	}, false);

	
	

	canvas.addEventListener ('mouseout', function(){pause = true;}, false);
	canvas.addEventListener ('mouseover', function(){pause = false;}, false);

      	canvas.addEventListener('mousemove', function(evt) {
        	var mousePos = getMousePos(canvas, evt);

		mx = mousePos.x;
		my = mousePos.y;

      	}, false);


	function getMousePos(canvas, evt) 
	{
	        var rect = canvas.getBoundingClientRect();
        	return {
          		x: evt.clientX - rect.left,
          		y: evt.clientY - rect.top
        		};
      	}
      

	///////////////////////////////////
	//////////////////////////////////
	////////	KEY BOARD INPUT
	////////////////////////////////


	

	window.addEventListener('keydown', function(evt){
		var key = evt.keyCode;
		
	//p 80
	//r 82
	//1 49
	//2 50
	//3 51
		
	}, false);




})
