window.onload = function() {
	
		//var Pixelratio = window.screen.availWidth / 640;
	  var width = 640  ;﻿﻿﻿
	  var height = 960 ;
	  var firstRunLandscape = false;
	  
	console.log("pixel ratio "+  window.devicePixelRatio); 
	console.log("largo "  + width + " ancho " + height);
	  
	var game = new Phaser.Game(width,height, Phaser.CANVAS);
	

	function Boot() {
	
		Phaser.State.call(this);
	
		}

	var Boot_proto = Object.create(Phaser.State.prototype);
		Boot.prototype = Boot_proto;
		Boot.prototype.constructor = Boot;

		Boot.prototype.init = function () {
			
		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
		this.scale.pageAlignHorizontally = true;
		this.scale.pageAlignVertically = true;
			
		};

		Boot.prototype.preload = function () {
			
		this.load.pack('loader', 'assets/loaderSprites.json');

 		var loadSprite = game.add.sprite(0, 0, 'loadBar');

        loadSprite.x = game.world.centerX - loadSprite.width / 2;
        loadSprite.y = game.world.centerY - 16;

	
		};



		Boot.prototype.create = function () {
		
		game.time.events.add(Phaser.Timer.SECOND * 1, iniciarJuego, this);

		function iniciarJuego(){

			console.log('im here');
			game.state.start("LoaderTime");

		} 
		

		};

	function LoaderTime() {
	
		Phaser.State.call(this);
	
		}

		var LoaderTime_proto = Object.create(Phaser.State.prototype);
		LoaderTime.prototype = LoaderTime_proto;
		LoaderTime.prototype.constructor = LoaderTime;

		LoaderTime.prototype.init = function () {
		
			
		};

		LoaderTime.prototype.preload = function () {
		var loaderContainer = game.add.sprite(0, 0, 'loaderContainer');	
		
        loaderContainer.width = game.width;
   		loaderContainer.x = game.world.centerX - loaderContainer.width / 2;
        loaderContainer.y = game.world.centerY - 16;

		var loadSprite = game.add.sprite(0, 0, 'loadBar');

		  //loadSprite.width = 100;
        loadSprite.x = game.world.centerX - loadSprite.width / 2;
        loadSprite.y = game.world.centerY - 16;

		 game.load.onFileComplete.add(function (progress, key, success, loaded, total) {
 
            loadSprite.width = game.width * (progress / 100);
            loadSprite.x = game.world.centerX - loadSprite.width / 2;
 			

            console.log('progress: ' + progress);
            console.log('key: ' + key);
            console.log('success: ' + success);
            console.log('loaded: ' + loaded + '\/' + total);
            console.log('**********');
 
        }, this);	



		this.load.pack('graphics', 'assets/pack.json');
		this.load.pack('Fonts', 'assets/pack.json');
		this.game.load.audio('BgMusic', ['assets/audio/BgMusic.mp3','assets/audio/BgMusic.ogg']);
	this.game.load.audio('BgMusic2', ['assets/audio/BgMusic2.mp3','assets/audio/BgMusic2.ogg']);

	this.game.load.audio('tomar_objeto', ['assets/audio/click_menu.mp3','assets/audio/click_menu.ogg']);
	this.game.load.audio('soltar_objeto', ['assets/audio/soltar_objeto.mp3','assets/audio/soltar_objeto.ogg']);

	this.game.load.audio('fusion', ['assets/audio/fusion.mp3','assets/audio/fusion.ogg']);
	this.game.load.audio('llegada_nave', ['assets/audio/llegada_nave.mp3','assets/audio/llegada_nave.ogg']);
	this.game.load.audio('despegue', ['assets/audio/despegue.mp3','assets/audio/despegue.ogg']);
	this.game.load.audio('bien_hecho', ['assets/audio/bien_hecho.mp3','assets/audio/bien_hecho.ogg']);
	this.game.load.audio('perder_vida', ['assets/audio/perder_vida.mp3','assets/audio/perder_vida.ogg']);
	this.game.load.audio('TutorialMusic', ['assets/audio/tutorial.mp3','assets/audio/tutorial.ogg']);



				firstRunLandscape = game.scale.isGameLandscape;
				if(game.device.desktop){
					game.scale.forceOrientation(false, false);
				}else{
					game.scale.forceOrientation(false, true);
					
				}
				
				game.scale.enterIncorrectOrientation.add(handleIncorrect);
				game.scale.leaveIncorrectOrientation.add(handleCorrect);

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

		};

		LoaderTime.prototype.create = function () {

        game.state.start("Intro");
		};


	

	
	// Add the States your game has.
	// game.state.add("Boot", Boot);
	// game.state.add("Menu", Menu);
	// game.state.add("Preload", Preload);
		game.state.add("Boot", Boot);
		game.state.add("LoaderTime", LoaderTime);
	game.state.add("Level1", Level1);
	game.state.add("Intro", Intro);
	game.state.add("Instructions", Instructions);

	game.state.start("Boot",true,true);

};
