window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width = 540  ;﻿﻿﻿
	  var height = 960 ;
	  var firstRunLandscape = false;
	  
	console.log("pixel ratio "+  window.devicePixelRatio); 
	console.log("largo "  + width + " ancho " + height);
	  
	var game = new Phaser.Game(width,height, Phaser.CANVAS);
	
	var play = function(){};
	
	play.prototype = {
			
			preload:function(){
			
				firstRunLandscape = game.scale.isGameLandscape;
				if(game.device.desktop){
					game.scale.forceOrientation(false, false);
				}else{
					game.scale.forceOrientation(false, true);
					
				}
				
				game.scale.enterIncorrectOrientation.add(handleIncorrect);
				game.scale.leaveIncorrectOrientation.add(handleCorrect);
				
			},
			create:function(){
				game.state.start("Intro",true,true);
					
			}
			
	};
	

	function handleIncorrect(){
     	if(!game.device.desktop){
     		document.getElementById("turn").style.display="block";
     	}
	}
	
	function handleCorrect(){
		if(!game.device.desktop){
			if(firstRunLandscape){
				
				gameRatio = window.innerWidth/window.innerHeight;		
				game.width = Math.ceil(640*gameRatio);
				game.height = 560;
				game.renderer.resize(game.width,game.height);
				game.state.start("Play");		
			}
			document.getElementById("turn").style.display="none";
		}
	}
	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
	game.state.add("Level1", Level1);
	game.state.add("Intro", Intro);
	game.state.add("Instructions", Instructions);
	game.state.add("Play",play);
	game.state.start("Play",true,true);

};
