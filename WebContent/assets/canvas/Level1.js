// -- user code here --		var musicEnabled = true;	var fxEnabled = true;/* --- start generated code --- */// Generated by  1.5.4 (Phaser v2.6.2)/** * Level1. */function Level1() {		Phaser.State.call(this);	}/** @type Phaser.State */var Level1_proto = Object.create(Phaser.State.prototype);Level1.prototype = Level1_proto;Level1.prototype.constructor = Level1;Level1.prototype.init = function () {		this.myInit();		this.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;	this.scale.pageAlignHorizontally = true;	this.scale.pageAlignVertically = true;	};Level1.prototype.preload = function () {		this.myPreload();			};Level1.prototype.create = function () {	this.add.sprite(0.0, 0.0, 'bg');		this.add.sprite(0.0, 0.0, 'hangar');		this.add.sprite(202.0, 55.0, 'pista');		this.add.sprite(34.0, 0.0, 'bandas');		var _piezasLeft = this.add.group();		var _menuBtn = this.add.sprite(18.0, 24.0, 'menuBtn');		var _floor = this.add.sprite(0.0, 678.0, 'floor');	_floor.alpha = 0.0;		this.add.sprite(0.0, 0.0, 'portal');		var _naves = this.add.group();		var _casillas = this.add.group();		var _casilla1 = this.add.sprite(131.0, 845.0, 'casilla', null, _casillas);	_casilla1.name = 'casilla1';	_casilla1.scale.set(0.2, 0.2);	_casilla1.alpha = 0.0;	_casilla1.data = this.data={activada:false};		var _casilla2 = this.add.sprite(241.0, 846.0, 'casilla', null, _casillas);	_casilla2.name = 'casilla2';	_casilla2.scale.set(0.2, 0.2);	_casilla2.alpha = 0.0;		var _casilla3 = this.add.sprite(354.0, 849.0, 'casilla', null, _casillas);	_casilla3.name = 'casilla3';	_casilla3.scale.set(0.2, 0.2);	_casilla3.alpha = 0.0;		var _casilla4 = this.add.sprite(466.0, 845.0, 'casilla', null, _casillas);	_casilla4.name = 'casilla4';	_casilla4.scale.set(0.2, 0.2);	_casilla4.alpha = 0.0;		var _fusionApagado = this.add.sprite(0.0, 0.0, 'fusionApagado');		var _fusion = this.add.sprite(0.0, 0.0, 'fusion');		var _generarBtn = this.add.sprite(289.0, 667.0, 'casilla');	_generarBtn.name = 'casilla4';	_generarBtn.alpha = 0.0;		var _draggedPieza = this.add.group();		this.add.sprite(467.0, 0.0, 'cuadroVidas');		var _vidas = this.add.group();		this.add.sprite(564.0, 47.0, 'vida', null, _vidas);		var _navesSalvadas = this.add.bitmapText(522.0, 58.0, 'PixelFont', '000', 32, _vidas);		var _groupCheer = this.add.group();		var _prizeBanner = this.add.sprite(0.0, -128.0, 'prizeBanner', null, _groupCheer);		var _cheerUpText = this.add.bitmapText(241.0, -89.0, 'PixelFont', 'Excelent', 64, _groupCheer);	_cheerUpText.align = 'center';				// fields		this.fPiezasLeft = _piezasLeft;	this.fMenuBtn = _menuBtn;	this.fFloor = _floor;	this.fNaves = _naves;	this.fCasillas = _casillas;	this.fCasilla1 = _casilla1;	this.fCasilla2 = _casilla2;	this.fCasilla3 = _casilla3;	this.fCasilla4 = _casilla4;	this.fFusionApagado = _fusionApagado;	this.fFusion = _fusion;	this.fGenerarBtn = _generarBtn;	this.fDraggedPieza = _draggedPieza;	this.fNavesSalvadas = _navesSalvadas;	this.fGroupCheer = _groupCheer;	this.fPrizeBanner = _prizeBanner;	this.fCheerUpText = _cheerUpText;			this.myCreate();	};/* --- end generated code --- */// -- user code here --Level1.prototype.myInit = function () {	};Level1.prototype.myPreload = function () {	};Level1.prototype.switchMusic = function () {		if(musicEnabled){		BgMusic.pause();		BgMusic2.pause();		musicEnabled = false;		////console.log('musica disabled');			}else{			if(this.BgMusic = 1){			BgMusic.play();		}else{			BgMusic2.stop();		}				musicEnabled = true;			////console.log('musica musicEnabled');	}	};Level1.prototype.switchFX = function () {		if(fxEnabled){	this.fxSounds.forEach(function(soundFx) { 			soundFx.mute = true;	},this);		fxEnabled = false;		////console.log('fx disabled');			}else{		this.fxSounds.forEach(function(soundFx) { 		soundFx.mute = false;	},this);					fxEnabled = true;		////console.log('fx enabled');	}	};Level1.prototype.manejarPausa = function () {  this.game.paused = true;       	var pauseBg = this.game.add.graphics(0, 0);				pauseBg.beginFill(0x2E610B, 0.6); 	    pauseBg.moveTo(0,0);	    pauseBg.lineTo(640, 0);	    pauseBg.lineTo(640, 960);	    pauseBg.lineTo(0, 960);	    pauseBg.lineTo(0, 0);	    pauseBg.endFill();	    this.Bg = this.game.add.sprite(0, 0, pauseBg.generateTexture());	    pauseBg.destroy();	    var pauseBgMenu = this.game.add.graphics(0, 0);	    pauseBgMenu.beginFill(0x2E610B); 	    pauseBgMenu.moveTo(0,0);	    pauseBgMenu.lineTo(524, 0);	    pauseBgMenu.lineTo(524, 470);	    pauseBgMenu.lineTo(0, 470);	    pauseBgMenu.lineTo(0, 0);	    pauseBgMenu.endFill();	    this.pauseBgMenu = this.game.add.sprite(this.game.width/2, this.game.height/2, pauseBgMenu.generateTexture());	    this.pauseBgMenu.anchor.setTo(0.5);	    pauseBgMenu.destroy();	    this.pauseIcons = this.game.add.sprite(0, 180, 'pauseIcons');	    this.OnBtn = this.game.add.sprite(220, 360, 'OnBtn');		this.OffMusic = this.game.add.sprite(220, 360, 'OffBtn');		this.OnFx = this.game.add.sprite(220, 430, 'OnBtn');		this.OffFx = this.game.add.sprite(220, 430, 'OffBtn');		this.HowToPlayBtn = this.game.add.sprite(220, 500, 'HowToPlayBtn');		this.QuitBtn = this.game.add.sprite(220, 640, 'QuitBtn');		this.MakingOfBtn = this.game.add.sprite(220, 570, 'makingOf');		if(musicEnabled){							  		this.OnBtn.visible = true;							   		this.OffMusic.visible = false;							   }else{								   	this.OnBtn.visible = false;								   	this.OffMusic.visible = true;							   }		if(fxEnabled){							  		this.OnFx.visible = true;							   		this.OffFx.visible = false;							   }else{								   	this.OnFx.visible = false;								   	this.OffFx.visible = true;							   }}Level1.prototype.unpause = function (event) {  if(this.game.paused){ 							  	var x1 = this.state.getCurrentState﻿().pauseBgMenu.x - this.state.getCurrentState﻿().pauseBgMenu.width/2;			  		x2 = this.state.getCurrentState﻿().pauseBgMenu.x + this.state.getCurrentState﻿().pauseBgMenu.width/2;			  		y1 = this.state.getCurrentState﻿().pauseBgMenu.y - this.state.getCurrentState﻿().pauseBgMenu.height/2;			  		y2 = this.state.getCurrentState﻿().pauseBgMenu.y + this.state.getCurrentState﻿().pauseBgMenu.height/2;			    if(event.x > x1 && event.x < x2 && event.y > y1 && event.y < y2 ){			    						var mx1 = this.state.getCurrentState﻿().OffMusic.x;							mx2 = this.state.getCurrentState﻿().OffMusic.x + this.state.getCurrentState﻿().OffMusic.width;							my1 = this.state.getCurrentState﻿().OffMusic.y;							my2 = this.state.getCurrentState﻿().OffMusic.y + this.state.getCurrentState﻿().OffMusic.height;						var fx1 = this.state.getCurrentState﻿().OnFx.x;							fx2 = this.state.getCurrentState﻿().OnFx.x + this.state.getCurrentState﻿().OnFx.width;							fy1 = this.state.getCurrentState﻿().OnFx.y;							fy2 = this.state.getCurrentState﻿().OnFx.y + this.state.getCurrentState﻿().OnFx.height;						var hx1 = this.state.getCurrentState﻿().HowToPlayBtn.x;							hx2 = this.state.getCurrentState﻿().HowToPlayBtn.x + this.state.getCurrentState﻿().HowToPlayBtn.width;							hy1 = this.state.getCurrentState﻿().HowToPlayBtn.y;							hy2 = this.state.getCurrentState﻿().HowToPlayBtn.y + this.state.getCurrentState﻿().HowToPlayBtn.height;											var qx1 = this.state.getCurrentState﻿().QuitBtn.x;							qx2 = this.state.getCurrentState﻿().QuitBtn.x + this.state.getCurrentState﻿().QuitBtn.width;							qy1 = this.state.getCurrentState﻿().QuitBtn.y;							qy2 = this.state.getCurrentState﻿().QuitBtn.y + this.state.getCurrentState﻿().QuitBtn.height;							var Mox1 = this.state.getCurrentState﻿().MakingOfBtn.x;							Mox2 = this.state.getCurrentState﻿().MakingOfBtn.x + this.state.getCurrentState﻿().MakingOfBtn.width;							Moy1 = this.state.getCurrentState﻿().MakingOfBtn.y;							Moy2 = this.state.getCurrentState﻿().MakingOfBtn.y + this.state.getCurrentState﻿().MakingOfBtn.height;						if(event.x > mx1 && event.x < mx2 && event.y > my1 && event.y < my2 ){ //boton de musica																  if(musicEnabled){									this.OnBtn.visible = false;							   		this.OffMusic.visible = true;							   								   }else{								   	this.OnBtn.visible = true;								   	this.OffMusic.visible = false;							   }	    										this.state.getCurrentState﻿().switchMusic(); 													}					if(event.x > fx1 && event.x < fx2 && event.y > fy1 && event.y < fy2 ){ //boton de fx																  if(fxEnabled){									this.OnFx.visible = false;							   		this.OffFx.visible = true;							   								   }else{								   	this.OnFx.visible = true;								   	this.OffFx.visible = false;							   }	    														this.state.getCurrentState﻿().switchFX(); 													}					if(event.x > hx1 && event.x < hx2 && event.y > hy1 && event.y < hy2 ){ //boton de how to play															this.game.cache.removeSound('BgMusic');						this.game.cache.removeSound('BgMusic2');						this.game.state.start('Instructions');						this.game.paused = false;									}					if(event.x > qx1 && event.x < qx2 && event.y > qy1 && event.y < qy2 ){ //boton de salir									////console.log('quiting');						location.reload();									}				if(event.x > Mox1 && event.x < Mox2 && event.y > Moy1 && event.y < Moy2 ){ //boton de salir									////console.log('quiting');						window.open('http://weveana.com/proyectos/gameJam/Design/documents/ddkrs.pdf', '_blank');									}			    	  }else{   				   				this.game.paused = false;			  	this.state.getCurrentState﻿().Bg.destroy();			  	this.state.getCurrentState﻿().pauseBgMenu.destroy();			  	this.state.getCurrentState﻿().pauseIcons.destroy();			  	this.state.getCurrentState﻿().OnBtn.destroy();			  	this.state.getCurrentState﻿().OffMusic.destroy();			  	this.state.getCurrentState﻿().OnFx.destroy();			  	this.state.getCurrentState﻿().OffFx.destroy();			  	this.state.getCurrentState﻿().HowToPlayBtn.destroy();			  	this.state.getCurrentState﻿().QuitBtn.destroy();			  		this.state.getCurrentState﻿().MakingOfBtn.destroy();			  }			  }}Level1.prototype.swipeDownAction = function (pointer) {}Level1.prototype.swipeUpAction = function (pointer) {			this.swipeCoordX2 = pointer.x;  			this.swipeCoordY2 = pointer.y; }Level1.prototype.getShipDamage = function (danosDisponibles) {	return (Math.floor(Math.random()*danosDisponibles.length));}Level1.prototype.getDamage = function (cualDamage) {////console.log('cualDamage ' + cualDamage);	switch (cualDamage){		case 'motor':		var hagaEsto = ['tuerca', 'metal' , 'bobina' , 'piston'];		return hagaEsto;		////console.log('haga motor');		break;		case 'casco':		var hagaEsto = ['metal'];		return hagaEsto;			////console.log('haga casco');		break;				case 'alas':		var hagaEsto = ['metal', 'bisagra' ];		return hagaEsto;			////console.log('haga alas');				break;		case 'comunicacion':		var hagaEsto = ['ci', 'bobina'];		return hagaEsto;		////console.log('haga comunicacion');				break;		case 'panel':		var hagaEsto = ['ci', 'metal' , 'fotoconductor'];		return hagaEsto;		////console.log('haga panelSolar');				break;	}}Level1.prototype.crearParte = function () {		var motorPartes = ["tuerca", "metal" , "bobina" , "piston"];	motorPartes.sort();	var cascoPartes = ["metal"];	var panelPartes = ["cable", "ci" , "metal" , "bobina"];	panelPartes.sort();	var alasPartes = ["metal", "bisagra" ];	alasPartes.sort();	var comunicacionPartes = ["ci", "bobina"];	comunicacionPartes.sort();	var panelSolarPartes = ["ci", "metal" , "fotoconductor"];	panelSolarPartes.sort();		partesActivadasString.sort();		////console.log(partesActivadasString);	////console.log('Se hace casco> ' + cascoPartes);	////console.log('antes de crear ' + JSON.stringify(partesActivadasString) + ' ' + JSON.stringify(comunicacionPartes));function arrastrarParte(sprite, pointer){}function soltarParte(sprite, pointer){this.game.physics.arcade.collide(sprite, this.fNaves, verificarNave);	function verificarNave(sprite, nave){		////console.log('numero nave ' + nave.name);		////console.log('parte ' + sprite.name);		switch (nave.name ){			case 'ship1':				if(sprite.name == 'motor'){					////console.log('arreglar nave');					var shipNueva = sprite.game.add.sprite(nave.x,nave.y,'shipReparada');					shipNueva.anchor.setTo(0.5,0.5);					sprite.game.physics.enable(shipNueva, Phaser.Physics.ARCADE);					shipNueva.body.collideWorldBounds = false;						shipNueva.body.checkCollision.up = false;							shipNueva.body.velocity.y = -20;											navesNuevas.push(shipNueva);					sprite.destroy();					nave.destroy();				}			break;			case 'ship2':								if(sprite.name == 'casco'){					////console.log('arreglar nave');					var shipNueva = sprite.game.add.sprite(nave.x,nave.y,'shipReparada');					shipNueva.anchor.setTo(0.5,0.5);					sprite.game.physics.enable(shipNueva, Phaser.Physics.ARCADE);					shipNueva.body.collideWorldBounds = false;						shipNueva.body.checkCollision.up = false;							shipNueva.body.velocity.y = -20;											navesNuevas.push(shipNueva);					sprite.destroy();					nave.destroy();				}			break;			case 'ship3':								if(sprite.name == 'panel'){					////console.log('arreglar nave');					var shipNueva = sprite.game.add.sprite(nave.x,nave.y,'shipReparada');					shipNueva.anchor.setTo(0.5,0.5);					sprite.game.physics.enable(shipNueva, Phaser.Physics.ARCADE);					shipNueva.body.collideWorldBounds = false;						shipNueva.body.checkCollision.up = false;							shipNueva.body.velocity.y = -20;											navesNuevas.push(shipNueva);					sprite.destroy();					nave.destroy();				}			break;			case 'ship4':								if(sprite.name == 'alas'){					////console.log('arreglar nave');					var shipNueva = sprite.game.add.sprite(nave.x,nave.y,'shipReparada');					shipNueva.anchor.setTo(0.5,0.5);					sprite.game.physics.enable(shipNueva, Phaser.Physics.ARCADE);					shipNueva.body.collideWorldBounds = false;						shipNueva.body.checkCollision.up = false;							shipNueva.body.velocity.y = -20;											navesNuevas.push(shipNueva);					sprite.destroy();					nave.destroy();				}			break;			case 'ship5':								if(sprite.name == 'comunicacion'){					////console.log('arreglar nave');					var shipNueva = sprite.game.add.sprite(nave.x,nave.y,'shipReparada');					shipNueva.anchor.setTo(0.5,0.5);					sprite.game.physics.enable(shipNueva, Phaser.Physics.ARCADE);					shipNueva.body.collideWorldBounds = false;						shipNueva.body.checkCollision.up = false;							shipNueva.body.velocity.y = -20;											navesNuevas.push(shipNueva);					sprite.destroy();					nave.destroy();				}			break;		}	}}	if (JSON.stringify(partesActivadasString) == JSON.stringify(cascoPartes))	{				////console.log('crea casco con> ' + cascoPartes); 		var parte = this.game.add.sprite(this.fGenerarBtn.x,this.fGenerarBtn.y,'casco');		parte.name = 'casco';		this.game.physics.enable(parte, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				parte.body.collideWorldBounds = false;			parte.body.checkCollision.up = false;		parte.scale.x=1.2;		parte.scale.y=1.2;		parte.inputEnabled = true;		parte.input.enableDrag(true);    	parte.events.onDragStart.add(arrastrarParte, this);   		parte.events.onDragStop.add(soltarParte, this);	fusion.play('fusion');	}    if (JSON.stringify(partesActivadasString) == JSON.stringify(comunicacionPartes))	{		////console.log('crea comunicacion con> ' + comunicacionPartes);		var parte = this.game.add.sprite(this.fGenerarBtn.x,this.fGenerarBtn.y,'comunicacion');		parte.name = 'comunicacion';		this.game.physics.enable(parte, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				parte.body.collideWorldBounds = false;			parte.body.checkCollision.up = false;		parte.scale.x=1.2;		parte.scale.y=1.2;		parte.inputEnabled = true;		parte.input.enableDrag(true);    	parte.events.onDragStart.add(arrastrarParte, this);   		parte.events.onDragStop.add(soltarParte, this);		fusion.play('fusion');	}    if (JSON.stringify(partesActivadasString) == JSON.stringify(motorPartes))	{		////console.log('crea motor con> ' + motorPartes);		var parte = this.game.add.sprite(this.fGenerarBtn.x,this.fGenerarBtn.y,'motor');		parte.name = 'motor';		this.game.physics.enable(parte, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				parte.body.collideWorldBounds = false;			parte.body.checkCollision.up = false;		parte.scale.x=1.2;		parte.scale.y=1.2;		parte.inputEnabled = true;		parte.input.enableDrag(true);    	parte.events.onDragStart.add(arrastrarParte, this);   		parte.events.onDragStop.add(soltarParte, this);	fusion.play('fusion');	} 	if (JSON.stringify(partesActivadasString) == JSON.stringify(alasPartes))	{		//console.log('crea alas con> ' + alasPartes);		var parte = this.game.add.sprite(this.fGenerarBtn.x,this.fGenerarBtn.y,'alas');		parte.name = 'alas';		this.game.physics.enable(parte, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				parte.body.collideWorldBounds = false;			parte.body.checkCollision.up = false;		parte.scale.x=1.2;		parte.scale.y=1.2;		parte.inputEnabled = true;		parte.input.enableDrag(true);    	parte.events.onDragStart.add(arrastrarParte, this);   		parte.events.onDragStop.add(soltarParte, this);   		fusion.play('fusion');	}    if (JSON.stringify(partesActivadasString) == JSON.stringify(panelSolarPartes))	{		//console.log('crea panelSolar con> ' + panelSolarPartes);		var parte = this.game.add.sprite(this.fGenerarBtn.x,this.fGenerarBtn.y,'panel');		parte.name = 'panel';		this.game.physics.enable(parte, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				parte.body.collideWorldBounds = false;			parte.body.checkCollision.up = false;		parte.scale.x=1.2;		parte.scale.y=1.2;		parte.inputEnabled = true;		parte.input.enableDrag(true);    	parte.events.onDragStart.add(arrastrarParte, this);   		parte.events.onDragStop.add(soltarParte, this);	fusion.play('fusion');	}	borrarCosas(this.game);	function borrarCosas(game){	game.state.getCurrentState﻿().fFusion.visible=false;		partesActivadas.forEach(borrarSprites);					function borrarSprites(item){												item.destroy();						partesActivadas = [];						partesActivadasString = [];					}	game.state.getCurrentState﻿().fCasillas.forEach(activarCasillas);				function activarCasillas(item){					item.data.activada = false;				}}}Level1.prototype.borrarSprites = function (item) {					item.destroy();					partesActivadas = [];					partesActivadasString = [];}Level1.prototype.weightedRand = function (spec) {   					var i, j, table=[];  					for (i in spec) {    // The constant 10 below should be computed based on the    // weights in the spec for a correct and optimal table size.    // E.g. the spec {0:0.999, 1:0.001} will break this impl.    					for (j=0; j<spec[i]*10; j++) {      					table.push(i);    						}  						}  				//return function() {    			return (table[Math.floor(Math.random() * table.length)]);  				//}			}Level1.prototype.nivelShow = function (nivel) {					this.fCheerUpText.text = 'Level ' + nivel;					showLevel = this.game.add.tween(this.fGroupCheer);				    showLevel.to({y:this.game.height/2}, 500, Phaser.Easing.Linear.None);				    showLevel.onComplete.add(remove, this);				    showLevel.start();				    function remove(){   						e = this.game.add.tween(this.fGroupCheer);					    e.to({y:this.game.height/2}, 800, Phaser.Easing.Linear.None);					    e.to({y:-200}, 500, Phaser.Easing.Linear.None);					  //  e.onComplete.add(vayase, this);					    e.start();				    }}Level1.prototype.myCreate = function () {	this.nivel = 1;	this.nivelShow(this.nivel);	navesNuevas = [];	this.fFusion.visible = false;	this.fGenerarBtn.inputEnabled = true;	this.fGenerarBtn.events.onInputDown.add(this.crearParte, this);	tomar_objeto = this.game.add.audio('tomar_objeto');	tomar_objeto.allowMultiple = false;	tomar_objeto.addMarker('tomar_objeto', 0, 0.4 );	soltar_objeto = this.game.add.audio('soltar_objeto');	soltar_objeto.allowMultiple = false;	soltar_objeto.addMarker('soltar_objeto', 0, 0.28 );	fusion = this.game.add.audio('fusion');	fusion.allowMultiple = false;	fusion.addMarker('fusion', 0, 0.3 );	despegue = this.game.add.audio('despegue');	despegue.allowMultiple = false;	despegue.addMarker('despegue', 0, 3.5 );	llegada_nave = this.game.add.audio('llegada_nave');	llegada_nave.allowMultiple = false;	llegada_nave.addMarker('llegada_nave', 0, 3 );	bien_hecho = this.game.add.audio('bien_hecho');	bien_hecho.allowMultiple = false;	bien_hecho.addMarker('bien_hecho', 0, 2 );	perder_vida = this.game.add.audio('perder_vida');	perder_vida.allowMultiple = false;	perder_vida.addMarker('perder_vida', 0, 1 );BgMusic = this.game.add.audio('BgMusic', 0.3); //agregar musica y volumen	BgMusic.allowMultiple = false;	BgMusic.loop = true;	BgMusic2 = this.game.add.audio('BgMusic2', 0.3); //agregar musica y volumen	BgMusic2.allowMultiple = false;	BgMusic2.loop = true;		var BgMusicSelector = Math.round(Math.random()) //agreagar musica de bg randomicamente	if(BgMusicSelector >= 0.5 && musicEnabled){		this.BgMusic = 1;		BgMusic.play();			}	if(BgMusicSelector <= 0.5 && musicEnabled){		this.BgMusic = 2;		BgMusic2.play();			}			this.fxSounds = [tomar_objeto, soltar_objeto, fusion, llegada_nave, bien_hecho, despegue, perder_vida]; //agreagar aqui todos los sound fx que se necesita adminstrar	if(!fxEnabled){		this.fxSounds.forEach(function(soundFx) { 	 //en caso de que se deshabilite los sonidos fxs		soundFx.mute = true;	},this);	}	partesActivadas = [];	partesActivadasString = [];	var piezas = [];	var danosDisponibles = ['motor', 'casco' , 'panel' , 'alas' , 'comunicacion' , 'panelSolar'];	var initialDamage = this.getShipDamage(danosDisponibles);	//console.log('initialDamage ' + initialDamage);	var cualDamage = danosDisponibles[initialDamage];	var getDamageParts = this.getDamage(cualDamage);		//console.log('getDamageParts ' + getDamageParts);	this.createNave();	this.timerNaves = this.game.time.create(false);    this.timerNaves.loop(11000, this.createNave, this);    this.timerNaves.start();	    				   	timer = this.game.time.create(false);    timer.loop(2000, createPart, this);    timer.start();    function createPart(){    	var materiales = ['','cable', 'tuerca','ci','metal','bobina','bisagra','fotoconductor','piston'];    	    	//var numPieza1 = Math.floor(Math.random()*( 9 - 1 )+1);    	//var numPieza2 = Math.floor(Math.random()*( 9 - 1 )+1);		if(this.nivel == 1){			var numPieza1 = this.weightedRand({2:0.1 , 3:0.2 , 4:0.4 ,5:0.1 , 6:0.1 , 7:0.05 , 8:0.05 });	   		var numPieza2 = this.weightedRand({2:0.1 , 3:0.2 , 4:0.4 ,5:0.1 , 6:0.1 , 7:0.05 , 8:0.05  });		}		if(this.nivel == 2){			var numPieza1 = this.weightedRand({2:0.2 , 3:0.25 , 4:0.2 ,5:0.15 , 6:0.05 , 7:0.1 , 8:0.05 });	   		var numPieza2 = this.weightedRand({2:0.2 , 3:0.25 , 4:0.2 ,5:0.15 , 6:0.05 , 7:0.1 , 8:0.05 });		}				if(this.nivel == 3){			var numPieza1 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13 });	   		var numPieza2 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13 });		}				if(this.nivel == 4){			var numPieza1 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13});	   		var numPieza2 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13 });		}				if(this.nivel == 5){			var numPieza1 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13});	   		var numPieza2 = this.weightedRand({2:0.15 , 3:0.13 , 4:0.15 ,5:0.15 , 6:0.15 , 7:0.13 , 8:0.13 });		}				   	   		       	var pieza = this.add.sprite(100, 0, 'pieza' + numPieza1);		var pieza2 = this.add.sprite(560, 0, 'pieza' + numPieza2);		pieza.scale.setTo(1.2, 1.2);		pieza2.scale.setTo(1.2, 1.2);		pieza.nombre = materiales[numPieza1];		pieza2.nombre = materiales[numPieza2];		this.game.physics.enable(pieza, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				pieza.body.collideWorldBounds = false;			pieza.body.checkCollision.up = false;		pieza.anchor.setTo(0.5, 0.5);		pieza.body.velocity.y = 80;		pieza.body.angularVelocity = Math.random()*30;		pieza.inputEnabled = true;		this.game.physics.enable(pieza2, Phaser.Physics.ARCADE);		//this.fMegaBall.body.setCircle(30);				pieza2.body.collideWorldBounds = false;			pieza2.body.checkCollision.up = false;		pieza2.anchor.setTo(0.5, 0.5);		pieza2.body.velocity.y = 80;		pieza2.body.angularVelocity = Math.random()*30;		pieza2.inputEnabled = true;    //  Allow dragging - the 'true' parameter will make the sprite snap to the center    	pieza.input.enableDrag(true);    	pieza.events.onDragStart.add(onDragStart, this);   		pieza.events.onDragStop.add(onDragStop, this);		pieza2.events.onDragStart.add(onDragStart, this);   		pieza2.events.onDragStop.add(onDragStop, this);		this.fPiezasLeft.add(pieza);		piezas.push(pieza);		pieza2.input.enableDrag(true);		this.fPiezasLeft.add(pieza2);		piezas.push(pieza2);		function onDragStart(sprite, pointer){			tomar_objeto.play('tomar_objeto');			//this.fDraggedPieza.add(sprite);			this.game.world.bringToTop(sprite);			this.fDraggedPieza.add(sprite);						}		function wichCasilla(sprite,casilla){	 	//console.log('sprite ' + sprite.nombre);	 	//console.log('casilla ' + casilla.name);	 	//console.log('estado casilla ' + casilla.data.activada);				if(casilla.data.activada){		//console.log('no te dejo meterme');			if(partesActivadas.length>3){				//console.log('estoy entrando aui chicha');				//partesActivadas.forEach(borrarSprites);				partesActivadas.forEach(borrarSprites);				function borrarSprites(item){										item.destroy();					partesActivadas = [];					partesActivadasString = [];				}				sprite.game.state.getCurrentState﻿().fCasillas.forEach(activarCasillas);				function activarCasillas(item){					item.data.activada = false;				}				//console.log('grupo casillas ' + sprite.game.state.getCurrentState﻿().fCasillas);				//console.log('partesActivadas'+partesActivadas.length);			}		}else{						sprite.game.state.getCurrentState﻿().fFusion.visible=true;			//console.log('partesActivadas ' +  partesActivadas);			casilla.data.activada = true;			 							switch(sprite.nombre){							case 'metal':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'metalActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('metal');														break;							case 'ci':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'ciActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('ci');							break;							case 'cable':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'cableActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('cable');							break;							case 'tuerca':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'tuercaActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('tuerca');							break;							case 'bobina':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'bobinaActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('bobina');							break;							case 'bisagra':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'bisagraActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('bisagra');							break;							case 'fotoconductor':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'fotoconductorActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('fotoconductor');							break;							case 'piston':							var piezaCasilla = sprite.game.add.sprite(casilla.x,casilla.y,'pistonActivado');							partesActivadas.push(piezaCasilla);							partesActivadasString.push('piston');							break;						}					    }					}				function onDragStop(sprite, pointer){			soltar_objeto.play('soltar_objeto');						if(this.game.physics.arcade.collide(sprite, this.fCasillas, wichCasilla)){					this.fDraggedPieza.add(sprite);					sprite.input.draggable = false;					sprite.body.velocity.y = 0;					sprite.body.angularVelocity = 0;					trashAnim = this.game.add.tween(sprite.scale);				    trashAnim.to({x: 1.02, y:1.02}, 50, Phaser.Easing.Linear.None);				    trashAnim.onComplete.add(firstTween, this);				    trashAnim.start();				   				   				    function firstTween() {					   					    e = this.game.add.tween(sprite.scale);					    e.to({x: 0.1, y:0.1}, 300, Phaser.Easing.Linear.None);					    e.onComplete.add(spriteDestroy, this);					    e.start();					}					function spriteDestroy(){						sprite.destroy();					}			}				}    }			this.game.sound.mute = false;	this.fMenuBtn.inputEnabled = true;	this.fMenuBtn.events.onInputUp.add(this.manejarPausa,this);  //pausar juego  	this.game.input.onDown.add(this.unpause, this); //quitar pausa					this.jumping = false;	this.doubleJumping = false;	this.deathPhase = new Phaser.Signal();this.game.physics.enable(this.fCasilla1, Phaser.Physics.ARCADE);this.game.physics.enable(this.fCasilla2, Phaser.Physics.ARCADE);this.game.physics.enable(this.fCasilla3, Phaser.Physics.ARCADE);this.game.physics.enable(this.fCasilla4, Phaser.Physics.ARCADE);			this.game.physics.enable(this.fFloor, Phaser.Physics.ARCADE); //habilito el piso como un physic	this.fFloor.body.immovable = true;		this.swipeCoordX = 0;	this.swipeCoordX2 = 0;	this.swipeCoordY = 0;	this.swipeCoordY2 = 0;	this.VectorX = 0;	this.VectorY = 0;	this.PowerX = 0	this.DirX = 0;	this.PowerY = 0	this.DirY = 0;	this.ExtraPowerY = 3;	this.ExtraPowerX = 3;	this.wannaJump = false;	this.minJumpIntention = 65;	this.maxPowerX = 90;	this.cascaritas = 0;		this.game.input.onDown.add(function(pointer) { //manejo de swipe control de pantalla			this.swipeCoordX = pointer.x;  			this.swipeCoordY = pointer.y;   						}, this);   	this.game.input.onUp.add(this.swipeUpAction, this);  //manejo de swipe UP control de pantalla};Level1.prototype.createNave = function () {		llegada_nave.play('llegada_nave'); 		if(this.fNavesSalvadas.text>=0 && this.fNavesSalvadas.text<=5 ){ 			var shipNumber = this.weightedRand({1:0.125, 2:0.5 , 3:0.125 , 4:0.125 ,5:0.125 }); 			var veloShip = -30;		 		}				if(this.fNavesSalvadas.text>5 && this.fNavesSalvadas.text<=10 ){ 			var shipNumber = this.weightedRand({1:0.166, 2:0.166 , 3:0.166 , 4:0.25 ,5:0.25 }); 			var veloShip = -30; 		} 		if(this.fNavesSalvadas.text>10 && this.fNavesSalvadas.text<=15 ){ 			var shipNumber = this.weightedRand({1:0.15, 2:0.15 , 3:0.4 , 4:0.15 ,5:0.15 }); 			var veloShip = -20; 		} 		if(this.fNavesSalvadas.text>15){ 			var shipNumber = this.weightedRand({1:0.4, 2:0.15 , 3:0.15 , 4:0.15 ,5:0.15 }); 			var veloShip = -15; 		}				var nave = this.add.sprite(this.game.width/2, 900, 'ship' + shipNumber );		this.game.physics.enable(nave, Phaser.Physics.ARCADE);		nave.body.collideWorldBounds = false;			nave.body.checkCollision.up = false;		nave.anchor.setTo(0.5, 0.5);		nave.body.velocity.y = veloShip;			nave.name = 'ship' + shipNumber;		this.fNaves.add(nave);		arrive = this.game.add.tween(nave);		arrive.to({y:this.game.height/2+80}, 2000, Phaser.Easing.Bounce.Out);		arrive.start();}//var rand012 = weightedRand({0:0.45, 1:0.45, 2:0.1});Level1.prototype.update = function () {		this.fNaves.forEach(function(nave) { 			if(nave.y<=130){											perder_vida.play('perder_vida');						leave2 = this.game.add.tween(nave.scale);						leave2.to({x: 0.1, y:0.1}, 1000, Phaser.Easing.Linear.None);						leave2.onComplete.add(deleteShip, this);						leave2.start();						function deleteShip(){														this.fNaves.remove(nave);						}					}				},this);		navesNuevas.forEach(function(nave) { 			if(nave.y<=this.game.height){							//this.createNave();						navesNuevas.pop(nave);			this.fNavesSalvadas.text++;			if(this.fNavesSalvadas.text==5){				this.nivel = 2;				this.nivelShow(this.nivel);			}			if(this.fNavesSalvadas.text==10){				this.nivel = 3;				this.nivelShow(this.nivel);			}			if(this.fNavesSalvadas.text==15){				this.nivel = 4;				this.nivelShow(this.nivel);			}			if(this.fNavesSalvadas.text==20){				this.nivel = 5;				this.nivelShow(this.nivel);			}			despegue.play('despegue');			leave = this.game.add.tween(nave);			leave.to({y:-200}, 3000,  "Quart.easeOut");			leave.start();		}	},this);};Level1.prototype.deathAnimation = function () {	BgMusic.stop();	BgMusic2.stop();	death.play('death');	////console.log('deathanim');	//this.game.state.restart(this.CurrentState);	emitter = this.game.add.emitter(this.fMegaBall.x, this.game.height, 4);    emitter.makeParticles('explodeBar');	emitter.blendMode = PIXI.blendModes.SCREEN;     emitter.setRotation(0, 0);    emitter.setAlpha(0.3, 0.8);    emitter.setScale(0.1, 0.7);    emitter.gravity = -16000;    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms    //	The 5000 value is the lifespan of each particle before it's killed    emitter.start(false, 50000, 100);emitter2 = this.game.add.emitter(this.fMegaBall.x, this.game.height, 5);    emitter2.makeParticles('ring');    emitter2.setRotation(0, 180);    emitter2.setAlpha(0.3, 0.8);    emitter2.setScale(0.3, 1);    emitter2.gravity = 50;    //	false means don't explode all the sprites at once, but instead release at a rate of one particle per 100ms    //	The 5000 value is the lifespan of each particle before it's killed    emitter2.start(false, 3000, 100);this.game.time.events.add(Phaser.Timer.SECOND * 2, pantallaLose, this);function pantallaLose(){	this.GameOverScreen = this.game.add.sprite(0, 0, 'GameOverScreen');	this.GameOverScreen.alpha = 0.1;	this.game.add.tween(this.GameOverScreen).to( { alpha: 1 }, 500, Phaser.Easing.Linear.None, true);	this.againBtn = this.game.add.sprite(this.game.width/2, this.game.height/2+130, 'againBtn');	this.againBtn.anchor.setTo(0.5, 0.5);	this.score = this.game.add.bitmapText(this.game.width/2, this.game.height/2-5, 'PixelFont', this.fTime.text, 64);	this.score.anchor.setTo(0.5, 0.5);	this.againBtn.inputEnabled = true;	this.againBtn.events.onInputUp.add(function(pointer) {		this.game.state.restart(this.CurrentState);		this.game.time.reset();	   	}, this);  	} // this.game.time.events.add(Phaser.Timer.SECOND * 2, reiniciarNivel, this);function reiniciarNivel(){this.game.state.restart(this.CurrentState);this.game.time.reset();}};Level1.prototype.render = function () {// this.game.debug.geom(this.line1);	//this.game.debug.body(this.fMegaBall);	};