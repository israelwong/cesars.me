(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.webFontTxtInst = {}; 
var loadedTypekitCount = 0;
var loadedGoogleCount = 0;
var gFontsUpdateCacheList = [];
var tFontsUpdateCacheList = [];
lib.ssMetadata = [
		{name:"Desktop_atlas_", frames: [[0,0,806,496],[808,0,570,418],[0,498,503,439],[505,861,503,439],[0,939,503,439],[0,1380,503,439],[505,1302,503,439],[1010,882,503,439],[1515,882,503,439],[808,420,503,439],[1380,0,503,439],[1313,441,503,439],[1167,1666,155,341],[1324,1323,155,341],[1324,1666,155,341],[1481,1323,155,341],[1481,1666,155,341],[1638,1323,155,341],[1638,1666,155,341],[1795,1323,155,341],[1885,0,155,341],[1885,343,155,341],[505,498,155,341],[1010,1323,155,341],[1010,1666,155,341],[1167,1323,155,341]]}
];



lib.updateListCache = function (cacheList) {		
	for(var i = 0; i < cacheList.length; i++) {		
		if(cacheList[i].cacheCanvas)		
			cacheList[i].updateCache();		
	}		
};		

lib.addElementsToCache = function (textInst, cacheList) {		
	var cur = textInst;		
	while(cur != null && cur != exportRoot) {		
		if(cacheList.indexOf(cur) != -1)		
			break;		
		cur = cur.parent;		
	}		
	if(cur != exportRoot) {		
		var cur2 = textInst;		
		var index = cacheList.indexOf(cur);		
		while(cur2 != null && cur2 != cur) {		
			cacheList.splice(index, 0, cur2);		
			cur2 = cur2.parent;		
			index++;		
		}		
	}		
	else {		
		cur = textInst;		
		while(cur != null && cur != exportRoot) {		
			cacheList.push(cur);		
			cur = cur.parent;		
		}		
	}		
};		

lib.gfontAvailable = function(family, totalGoogleCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], gFontsUpdateCacheList);		

	loadedGoogleCount++;		
	if(loadedGoogleCount == totalGoogleCount) {		
		lib.updateListCache(gFontsUpdateCacheList);		
	}		
};		

lib.tfontAvailable = function(family, totalTypekitCount) {		
	lib.properties.webfonts[family] = true;		
	var txtInst = lib.webFontTxtInst && lib.webFontTxtInst[family] || [];		
	for(var f = 0; f < txtInst.length; ++f)		
		lib.addElementsToCache(txtInst[f], tFontsUpdateCacheList);		

	loadedTypekitCount++;		
	if(loadedTypekitCount == totalTypekitCount) {		
		lib.updateListCache(tFontsUpdateCacheList);		
	}		
};
// symbols:



(lib.equipo_bg = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.loog_bg = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.metal_amarillo = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();



(lib.metal_azul_alaska = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(3);
}).prototype = p = new cjs.Sprite();



(lib.metal_banco_reflect = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(4);
}).prototype = p = new cjs.Sprite();



(lib.metal_gris_domex = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(5);
}).prototype = p = new cjs.Sprite();



(lib.metal_naranja_mecanica = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(6);
}).prototype = p = new cjs.Sprite();



(lib.metal_negro_infinito = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(7);
}).prototype = p = new cjs.Sprite();



(lib.metal_rojo_puebla = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(8);
}).prototype = p = new cjs.Sprite();



(lib.metal_silver_vein = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(9);
}).prototype = p = new cjs.Sprite();



(lib.metal_verde_limon = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(10);
}).prototype = p = new cjs.Sprite();



(lib.metal_xtreme_chrome = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(11);
}).prototype = p = new cjs.Sprite();



(lib.vinil_amarillo_canario = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(12);
}).prototype = p = new cjs.Sprite();



(lib.vinil_azul_marzovi = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(13);
}).prototype = p = new cjs.Sprite();



(lib.vinil_azul_rey = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(14);
}).prototype = p = new cjs.Sprite();



(lib.vinil_cindirella = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(15);
}).prototype = p = new cjs.Sprite();



(lib.vinil_eucalipto = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(16);
}).prototype = p = new cjs.Sprite();



(lib.vinil_novillero_vino = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(17);
}).prototype = p = new cjs.Sprite();



(lib.vinil_novillo_gris = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(18);
}).prototype = p = new cjs.Sprite();



(lib.vinil_novillo_negro = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(19);
}).prototype = p = new cjs.Sprite();



(lib.vinil_novo_rey = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(20);
}).prototype = p = new cjs.Sprite();



(lib.vinil_panda_naranja = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(21);
}).prototype = p = new cjs.Sprite();



(lib.vinil_panda_rojo = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(22);
}).prototype = p = new cjs.Sprite();



(lib.vinil_rojo_fuego = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(23);
}).prototype = p = new cjs.Sprite();



(lib.vinil_rojo_novillo = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(24);
}).prototype = p = new cjs.Sprite();



(lib.vinil_verde = function() {
	this.spriteSheet = ss["Desktop_atlas_"];
	this.gotoAndStop(25);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.mc_vinil_verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_verde();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_verde, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_rojo_novillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_rojo_novillo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_rojo_novillo, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_rojo_fuego = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_rojo_fuego();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_rojo_fuego, new cjs.Rectangle(0,0,155,341), null);


(lib.vinil_novillo_rey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_novo_rey();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.vinil_novillo_rey, new cjs.Rectangle(0,0,155,341), null);


(lib.Símbolo24 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFnIgBhDIgBqKAlelmILDAAIAALNIrDAA");
	this.shape.setTransform(35.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D8D8D8").s().p("AFkFpIAArMIrDAAILDAAIAALMIrDAAIgDAAIgBhCIgBqKIAAgGILJAAIAALSgAlkFpIABhCIABBCg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.3,73.8);


(lib.Símbolo23 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFnIgBhDIgBqKAlelmILDAAIAALNIrDAA");
	this.shape.setTransform(35.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#D64125").s().p("AleFpIgEAAIgBhCIgBqKIAAgGILIAAIAAAGIrCAAILCAAIAALMgAlkFpIABhCIABBCgAFkljg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.3,73.8);


(lib.Símbolo22 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFqIgBhEIgBqJAleljILDAAIAALNIrDAAAlilpILDAA");
	this.shape.setTransform(35.7,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AleFpIgEAAIgBhCIgBqKIAAgGIACAAILDAAIADAAIAAAGIrCAAILCAAIAALMgAlkFpIABhCIABBCg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.3,74.3);


(lib.Símbolo21 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AFlljIAAK2IgBAXIrCAAAljEmIgBqJAlilpILCAA");
	this.shape.setTransform(35.7,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#4A4340").s().p("AFkFpIABgVIAAAVgAleFpIgGAAIABhCIgBqKIAAgGIACAAILCAAIAFAAIAAAGIAAK3IgBAVgAFlFUg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.4,74.3);


(lib.Símbolo20 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AFlljIAAK2IgBAXIrCAAAlilpILCAAAljEmIgBqJ");
	this.shape.setTransform(35.7,36.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CAC4C0").s().p("AFkFpIABgVIgBAVIrCAAIgGAAIABhCIgBqKIAAgGIACAAILCAAIAFAAIAAAGIAAK3IAAAVg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.4,74.3);


(lib.Símbolo19 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFnIgBhDIgBqKAlelmILDAAIAALNIrDAA");
	this.shape.setTransform(35.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#229536").s().p("AFkFpIAArMIrDAAILDAAIAALMIrDAAIgDAAIgBhCIgBqKIAAgGILJAAIAALSgAlkFpIABhCIABBCg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.3,73.8);


(lib.Símbolo18 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFnIgBhDIgBqKAlelmILDAAIAALNIrDAA");
	this.shape.setTransform(35.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FCBF27").s().p("AleFpIgEAAIgBhCIgBqKIAAgGILIAAIAAAGIrCAAILCAAIAALMgAlkFpIABhCIABBCgAFkljg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.3,73.8);


(lib.Símbolo17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AliFnIgBhDIgBqKAlelmILDAAIAALNIrDAA");
	this.shape.setTransform(35.7,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#C6362E").s().p("AleFpIgEAAIgBhCIgBqKIAAgGILIAAIAAAGIrCAAILCAAIAALMgAlkFpIABhCIABBCgAFkljg");
	this.shape_1.setTransform(35.7,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.3,73.8);


(lib.Símbolo16 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AlflmIAFAAIK+AAIAALNIq+AAIgFAAAljFnIAArN");
	this.shape.setTransform(35.6,36.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#193098").s().p("AFaFpIAArMIq+AAIK+AAIAALMIq+AAIAArMIAAgGILJAAIAALSg");
	this.shape_1.setTransform(36.5,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-0.4,73.2,73.8);


(lib.Símbolo15 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AFklmIAALNIrDAAIgEAAIAArNIAEAAg");
	this.shape.setTransform(35.6,35.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AlhFnIAArNILDAAIAALNg");
	this.shape_1.setTransform(35.8,35.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#D8D8D8").s().p("AlkFpIAAgFILDAAIAArNIAGAAIAALSg");
	this.shape_2.setTransform(36.1,36.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,73.2,73.8);


(lib.Símbolo14 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#1C8DAC").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,47.8);


(lib.Símbolo13 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#345476").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,47.8);


(lib.Símbolo12 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4E5773").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,47.8,47.8);


(lib.Símbolo11 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#4D4F39").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo11, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo10 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E5CD71").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo10, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo9 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#722B33").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo9, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo8 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo8, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo7 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#862F38").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo7, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BE2B3D").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo6, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#B4B4B4").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo5, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#3B3A56").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo4, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CB3F38").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo3, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#92323E").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo2, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.Símbolo1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#008139").s().p("AjuDvIAAndIHdAAIAAHdg");
	this.shape.setTransform(23.9,23.9);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

}).prototype = getMCSymbolPrototype(lib.Símbolo1, new cjs.Rectangle(0,0,47.8,47.8), null);


(lib.mc_metal_xtreme_chrome = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_xtreme_chrome();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_xtreme_chrome, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_verde_limon = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_verde_limon();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_verde_limon, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_silver_vein = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_silver_vein();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_silver_vein, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_rojo_puebla = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_rojo_puebla();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_rojo_puebla, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_negro_infinito = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_negro_infinito();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_negro_infinito, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_naranja_mecanica = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_naranja_mecanica();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_naranja_mecanica, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_gris_domex = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_gris_domex();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_gris_domex, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_banco_reflect = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_banco_reflect();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_banco_reflect, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_azul_alaska = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_azul_alaska();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_azul_alaska, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_metal_amarillo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.metal_amarillo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_metal_amarillo, new cjs.Rectangle(0,0,503,439), null);


(lib.mc_vinil_panda_verde = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_panda_naranja();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_panda_verde, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_panda_rojo = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_panda_rojo();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_panda_rojo, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_novillo_negro = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_novillo_negro();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_novillo_negro, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_novillo_gris = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_novillo_gris();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_novillo_gris, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_eucalipto = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_eucalipto();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_eucalipto, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_cindirella = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_cindirella();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_cindirella, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_azul_rey = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_azul_rey();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_azul_rey, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_azul_marzovi = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_azul_marzovi();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_azul_marzovi, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_vinil_amarillo_canario = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_amarillo_canario();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_vinil_amarillo_canario, new cjs.Rectangle(0,0,155,341), null);


(lib.mc_novillero_vino = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Capa 1
	this.instance = new lib.vinil_novillero_vino();
	this.instance.parent = this;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

}).prototype = getMCSymbolPrototype(lib.mc_novillero_vino, new cjs.Rectangle(0,0,155,341), null);


// stage content:
(lib.ColoresApp = function(mode,startPosition,loop) {
if (loop == null) { loop = false; }	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var root = this;
		
		//DEFINIR ARREGLOS
		var metales = new Array(
			this.mc_metal_amarillo,
			this.mc_metal_azul_alaska,
			this.mc_metal_banco_reflect,
			this.mc_metal_gris_domex,
			this.mc_metal_naranja_mecanica,
			this.mc_metal_negro_infinito,
			this.mc_metal_rojo_puebla,
			this.mc_metal_silver_vein,
			this.mc_metal_verde_limon,
			this.mc_metal_xtreme_chrome
		);
		
		//HANDLER BOTONES METAL
		this.btn_amarillo.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_amarillo.visible=true; root.txt_metal.text="Amarillo" });
		this.btn_metal_gris_domex.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_gris_domex.visible=true; root.txt_metal.text="Gris domex" });
		this.btn_metal_verde_limon.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_verde_limon.visible=true; root.txt_metal.text="Verde limón"  });
		this.btn_metal_azul_alaska.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_azul_alaska.visible=true; root.txt_metal.text="Azul alaska" });
		this.btn_metal_banco_reflect.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_banco_reflect.visible=true; root.txt_metal.text="Blanco reflex" });
		this.btn_metal_naranja_mecanica.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_naranja_mecanica.visible=true; root.txt_metal.text="Naranja Mecánica" });
		this.btn_metal_negro_infinito.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_negro_infinito.visible=true; root.txt_metal.text="Negro infinito" });
		this.btn_metal_rojo_puebla.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_rojo_puebla.visible=true; root.txt_metal.text="Rojo puebla" });
		this.btn_metal_silver_vein.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_silver_vein.visible=true; root.txt_metal.text="Silver vein" });
		this.btn_metal_xtreme_chrome.addEventListener("click", function(){ ocultarMetales(); root.mc_metal_xtreme_chrome.visible=true; root.txt_metal.text="Metal Xtreme Chrome" });
		
		//OCULTAR METALES
		function ocultarMetales(){
			for (var i = 0; i < metales.length; i++) {
				metales[i].x = 347;
				metales[i].y = 306;
				metales[i].visible = false;
			}
		}
		
		/********************************************/
		/********************************************/
		/********************************************/
		
		var viniles=new Array(
			this.mc_vinil_amarillo_canario,
			this.mc_vinil_azul_marzovi,
			this.mc_vinil_azul_rey,
			this.mc_vinil_cindirella,
			this.mc_vinil_eucalipto,
			this.mc_vinil_novillero_vino,
			this.mc_vinil_novillo_gris,
			this.mc_vinil_novillo_negro,
			this.mc_vinil_novo_rey,
			this.mc_vinil_panda_naranja,
			this.mc_vinil_panda_rojo,
			this.mc_vinil_rojo_fuego,
			this.mc_vinil_rojo_novillo,
			this.mc_vinil_verde
		);
		
		this.btn_vinil_amarillo_canario.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_amarillo_canario.visible=true; root.txt_vinil.text="Amarillo canario" });
		this.btn_vinil_azul_marzovi.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_azul_marzovi.visible=true; root.txt_vinil.text="Azul marzovi" });
		this.btn_vinil_azul_rey.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_azul_rey.visible=true;  root.txt_vinil.text="Azul rey" });
		this.btn_vinil_cindirella.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_cindirella.visible=true;  root.txt_vinil.text="Cindirella" });
		this.btn_vinil_eucalipto.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_eucalipto.visible=true;  root.txt_vinil.text="Eucalipto" });
		this.btn_vinil_novillero_vino.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_novillero_vino.visible=true;  root.txt_vinil.text="Novillero vino" });
		this.btn_vinil_novillo_gris.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_novillo_gris.visible=true;  root.txt_vinil.text="Novillo gris" });
		this.btn_vinil_novillo_negro.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_novillo_negro.visible=true;  root.txt_vinil.text="Novillo negro" });
		this.btn_vinil_novo_rey.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_novo_rey.visible=true;  root.txt_vinil.text="Novo rey" });
		this.btn_vinil_panda_naranja.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_panda_naranja.visible=true;  root.txt_vinil.text="Panda naranja" });
		this.btn_vinil_panda_rojo.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_panda_rojo.visible=true;  root.txt_vinil.text="Panda rojo" });
		this.btn_vinil_rojo_fuego.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_rojo_fuego.visible=true;  root.txt_vinil.text="Rojo fuego" });
		this.btn_vinil_rojo_novillo.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_rojo_novillo.visible=true;  root.txt_vinil.text="Rojo novillo" });
		this.btn_vinil_verde.addEventListener("click", function(){  ocultarViniles(); root.mc_vinil_verde.visible=true;  root.txt_vinil.text="Verde" });
		
		
		//OCULTAR METALES
		ocultarViniles();
		function ocultarViniles(){
			
			for (var i = 0; i < viniles.length; i++) {
				viniles[i].x = 361;
				viniles[i].y = 265;
				viniles[i].visible = false;
			}
				
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// botones
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgKAtQgFgBAAgHIAAgRQAAgGABgBQACgBAGAAIARAAQAFAAAAAIIAAARQAAAFgBABQgCABgGABgAgKgLQgFAAAAgIIAAgRQAAgFABgBQACgBAGAAIARAAQAFgBAAAIIAAARQAAAFgBACQgCABgGAAg");
	this.shape.setTransform(435.3,561.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag0A2IAAhrIAZAAIAABXIBQAAIAAAUg");
	this.shape_1.setTransform(425.6,560.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAuA2IgNgXIhEAAIgNAXIgZAAIA+hrIAXAAIA+BrgAAWALIgWgrIgYArIAuAAg");
	this.shape_2.setTransform(409.4,560.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgLA2IAAhYIgzAAIAAgTIB8AAIAAATIgxAAIAABYg");
	this.shape_3.setTransform(394.8,560.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("Ag3A2IAAhrIBuAAIAAASIhUAAIAAAZIAwAAIAAARIgwAAIAAAbIBVAAIAAAUg");
	this.shape_4.setTransform(380.8,560.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAvA2IAAhCIABgLIgGALIgpA1IgEAAIgpg1IgGgLIABALIAABCIgVAAIAAhrIAVAAIAyBAIAyhAIAUAAIAABrg");
	this.shape_5.setTransform(362.8,560.7);

	this.txt_metal = new cjs.Text("Negro", "18px 'Bank Gothic'", "#999999");
	this.txt_metal.name = "txt_metal";
	this.txt_metal.lineHeight = 21;
	this.txt_metal.lineWidth = 198;
	this.txt_metal.parent = this;
	this.txt_metal.setTransform(450,553.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgKAtQgFgBAAgHIAAgRQAAgGABgBQACgBAGAAIARAAQAFAAAAAIIAAARQAAAFgBABQgCABgGABgAgKgLQgFAAAAgIIAAgRQAAgFABgBQACgBAGAAIARAAQAFgBAAAIIAAARQAAAFgBACQgCABgGAAg");
	this.shape_6.setTransform(101.4,561.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtAtIAAhYIAWAAIAABHIBFAAIAAARg");
	this.shape_7.setTransform(93,561.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgKAtIAAhYIAVAAIAABYg");
	this.shape_8.setTransform(83.4,561.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAoAtIhKg7IAAA7IgUAAIAAhYIAPAAIBKA5IAAg5IAUAAIAABYg");
	this.shape_9.setTransform(72.8,561.7);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgKAtIAAhYIAVAAIAABYg");
	this.shape_10.setTransform(62.3,561.7);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAtIg2hYIAZAAIAkA/IAkg/IAWAAIgzBYg");
	this.shape_11.setTransform(52.8,561.7);

	this.txt_vinil = new cjs.Text("Negro", "18px 'Bank Gothic'", "#999999");
	this.txt_vinil.name = "txt_vinil";
	this.txt_vinil.lineHeight = 21;
	this.txt_vinil.lineWidth = 194;
	this.txt_vinil.parent = this;
	this.txt_vinil.setTransform(118,553.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#666666").s().p("ABSBaIgXgsIh5AAIgXAsIgeAAIBjizIAfAAIBlCzgAAvAXIgwhcIgwBcIBgAAg");
	this.shape_12.setTransform(1066.6,71.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#666666").s().p("AhaBaIAAgMICEiPIh5AAIAAgYICqAAIAAAKIiHCQICHAAIAAAZg");
	this.shape_13.setTransform(1041.6,71.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgOBaIAAizIAdAAIAACzg");
	this.shape_14.setTransform(1024,71.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#666666").s().p("AhSBaIAAizIAdAAIAACaICIAAIAAAZg");
	this.shape_15.setTransform(1008,71.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#666666").s().p("ABSBaIgXgsIh5AAIgXAsIgeAAIBjizIAfAAIBlCzgAAvAXIgwhcIgwBcIBgAAg");
	this.shape_16.setTransform(982.2,71.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#666666").s().p("ABTBaIiKh8IgJgIIgJgNQACAQAAAYIAABpIgcAAIAAizIATAAICGB3QAKAJALAOQgDgRAAgbIAAhiIAcAAIAACzg");
	this.shape_17.setTransform(954.9,71.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#666666").s().p("Ag9BaQgZAAgJgJQgEgEgDgJQgCgIAAgMIAAhfQAAgYAJgKQAJgIAZAAIB7AAQAZAAAJAIQAEAFACAIQADAJAAAMIAABfQAAAMgDAIQgCAJgEAEQgJAJgZAAgAhKBBICVAAIAAiCIiVAAg");
	this.shape_18.setTransform(925.3,71.4);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#666666").s().p("Ag0BaQgYAAgJgJQgEgEgCgJQgDgIAAgMIAAgFIAcgHIAAAdICGAAIAAg2IhxAAQgYAAgJgJQgFgEgBgIQgDgIAAgNIAAgQQAAgZAJgJQAFgEAIgCQAIgCAMAAIBgAAQALAAAIACQAIACAFAEQAKAJAAAWIAAAEIgaAHIAAgaIh/AAIAAAzIBxAAQAYAAAJAJQAEAEADAIQACAIAAAMIAAAVQAAAMgCAIQgDAJgEAEQgJAJgYAAg");
	this.shape_19.setTransform(896.5,71.4);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#666666").s().p("AA4BaIhJhGIg1AAIAABGIgeAAIAAizICRAAQAKAAAHACQAHACAFAEQAJAIAAATIAAAoQAAARgJAJQgFAEgHACQgHACgKAAIgbAAIBTBGgAhGgDIBnAAQALAAAEgDQAEgEAAgLIAAgaQAAgLgEgEQgEgEgLAAIhnAAg");
	this.shape_20.setTransform(871.2,71.4);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#666666").s().p("AhXBaIAAizICuAAIAAAYIiPAAIAAAyIBWAAIAAAXIhWAAIAAA5ICQAAIAAAZg");
	this.shape_21.setTransform(845.2,71.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#666666").s().p("AhbBaIAAizICRAAQAKAAAHACQAHACAFAEQAJAIAAATIAAAoQAAARgJAJQgFAEgHACQgHACgKAAIhzAAIAABGgAg9gDIBnAAQALAAAEgEQAEgEAAgLIAAgZQAAgLgEgEQgFgEgKAAIhnAAg");
	this.shape_22.setTransform(819.8,71.4);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#666666").s().p("AgvBGQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAhJQAAgTAHgHQAHgHATAAIBfAAQATAAAHAHQADAEACAGQACAHAAAJIAABJQAAAJgCAHQgCAGgDAEQgHAHgTAAgAg5AyIBzAAIAAhkIhzAAg");
	this.shape_23.setTransform(1119.6,105.4);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#666666").s().p("AgLBGIAAiLIAXAAIAACLg");
	this.shape_24.setTransform(1103.3,105.4);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#666666").s().p("AgnBGQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAgEIAWgFIAAAWIBmAAIAAgqIhWAAQgTAAgHgGQgDgDgCgGQgCgHAAgKIAAgMQAAgTAHgHQAEgDAGgCQAGgCAKAAIBJAAQAJAAAGACQAHACADADQAIAGAAASIAAADIgUAGIAAgVIhiAAIAAAnIBXAAQATAAAHAHQADAEACAFQABAHAAAJIAAAQQAAAJgBAHQgCAGgDAEQgHAHgTAAg");
	this.shape_25.setTransform(1087.8,105.4);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#666666").s().p("ABABGIgSgjIheAAIgRAjIgXAAIBMiLIAYAAIBNCLgAAkASIgkhHIgmBHIBKAAg");
	this.shape_26.setTransform(1067.7,105.4);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#666666").s().p("ABABGIhqhgIgHgGIgHgKQACANAAASIAABRIgWAAIAAiLIAPAAIBnBdQAIAGAIALQgCgNAAgVIAAhMIAVAAIAACLg");
	this.shape_27.setTransform(1046.6,105.4);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#666666").s().p("ABABGIAAhdIABgVIgIAPIg1BNIgFAAIg4hKIgJgSIABAVIAABdIgUAAIAAiLIATAAIBDBaIA/haIAWAAIAACLg");
	this.shape_28.setTransform(1023.1,105.4);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#666666").s().p("AgLBGIAAiLIAXAAIAACLg");
	this.shape_29.setTransform(1006.1,105.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#666666").s().p("AgsBGQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAhJQAAgTAHgHQAHgHATAAIBZAAQASAAAHAHQAEADACAGQACAHAAAJIAAADIgYAFIAAgVIhsAAIAABkIBsAAIAAgoIg3AAIAAgRIBPAAIAAAsQAAAJgCAHQgCAGgDAEQgEADgGACQgHACgJAAg");
	this.shape_30.setTransform(990.5,105.4);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#666666").s().p("AhDBGIAAiLICGAAIAAATIhuAAIAAAnIBCAAIAAARIhCAAIAAAtIBvAAIAAATg");
	this.shape_31.setTransform(960.6,105.4);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#666666").s().p("AhOBGIAAiLIBMAAQARAAAOADQANADAJAFIAMAKIAJAOQAHAQAAASQABAogdATQgRALgkAAgAg3AyIAyAAQAgAAAOgKQAPgMAAgcQAAgbgPgMQgIgFgLgDQgMgDgPAAIgyAAg");
	this.shape_32.setTransform(940,105.4);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#666666").s().p("AgvBGQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAhJQAAgTAHgHQAHgHATAAIBfAAQATAAAHAHQADAEACAGQACAHAAAJIAABJQAAAJgCAHQgCAGgDAEQgHAHgTAAgAg5AyIBzAAIAAhkIhzAAg");
	this.shape_33.setTransform(906.9,105.4);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#666666").s().p("AhGBGIAAiLIBwAAQAHAAAGACQAFACAEADQAHAGAAAOIAAAgQAAANgHAGQgEADgFACQgGABgHAAIhYAAIAAA3gAgugCIBPAAQAHAAAEgDQADgDAAgJIAAgTQAAgIgDgDQgEgEgHAAIhPAAg");
	this.shape_34.setTransform(886.2,105.4);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#666666").s().p("AgLBGIAAiLIAXAAIAACLg");
	this.shape_35.setTransform(870.7,105.4);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#666666").s().p("AgoBGQgTAAgHgHQgDgEgCgGQgCgHAAgJIAAhqIAXAAIAAB3IBlAAIAAh3IAXAAIAABqQAAAJgCAHQgCAGgDAEQgHAHgSAAg");
	this.shape_36.setTransform(855,105.4);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#666666").s().p("AAaBXIgOgiIg7AAQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAhJQAAgSAHgIQAHgGATgBIBfAAQATABAHAGQADAEACAGQACAHAAAJIAABJQAAAJgCAHQgCAGgDAEQgHAHgTAAIgQAAIARAigAAXAiIAjAAIAAhlIhzAAIAABlIA8AAIgOghIAPgFg");
	this.shape_37.setTransform(832.5,107.1);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#666666").s().p("AhDBGIAAiLICGAAIAAATIhuAAIAAAnIBCAAIAAARIhCAAIAAAtIBvAAIAAATg");
	this.shape_38.setTransform(812.3,105.4);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#666666").s().p("AgoBGQgTAAgHgHQgEgEgBgGQgCgHAAgJIAAhqIAXAAIAAB3IBlAAIAAh3IAXAAIAABqQAAAJgCAHQgBAGgEAEQgGAHgUAAg");
	this.shape_39.setTransform(780.9,105.4);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#666666").s().p("AgLBGIAAh4Ig/AAIAAgTICVAAIAAATIhAAAIAAB4g");
	this.shape_40.setTransform(762,105.4);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#666666").s().p("AhDBGIAAiLIAgAAIAABxIBoAAIAAAag");
	this.shape_41.setTransform(985.3,359.3);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#666666").s().p("AA7BGIgRgfIhYAAIgQAfIggAAIBPiLIAeAAIBQCLgAAcAOIgdg4IgeA4IA7AAg");
	this.shape_42.setTransform(964.5,359.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#666666").s().p("AgPBGIAAhyIhAAAIAAgZICfAAIAAAZIhAAAIAAByg");
	this.shape_43.setTransform(945.7,359.3);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#666666").s().p("AhHBGIAAiLICOAAIAAAYIhuAAIAAAfIBAAAIAAAXIhAAAIAAAjIBvAAIAAAag");
	this.shape_44.setTransform(927.7,359.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#666666").s().p("AA9BGIAAhVIABgPIgIAOIg1BFIgFAAIg0hFQgGgIgCgGIAAAPIAABVIgaAAIAAiLIAaAAIBABUIBBhUIAaAAIAACLg");
	this.shape_45.setTransform(904.6,359.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#666666").s().p("AhDBGIAAiLIAgAAIAABxIBnAAIAAAag");
	this.shape_46.setTransform(975.1,168.2);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#666666").s().p("AgZBkIAAiLIAgAAIAACLgAgbg1IAbguIAcAAIgmAug");
	this.shape_47.setTransform(960.5,165.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#666666").s().p("AA8BGIhlhVIgMgMIABAWIAABLIgdAAIAAiLIAWAAIBhBSIAQAPIgBgYIAAhJIAdAAIAACLg");
	this.shape_48.setTransform(942.6,168.2);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#666666").s().p("AgPBGIAAiLIAfAAIAACLg");
	this.shape_49.setTransform(925.7,168.2);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#666666").s().p("AgIBGIhRiLIAlAAIA4BkIA2hkIAgAAIhNCLg");
	this.shape_50.setTransform(911.3,168.2);

	this.btn_metal_gris_domex = new lib.Símbolo24();
	this.btn_metal_gris_domex.parent = this;
	this.btn_metal_gris_domex.setTransform(1099.9,512.5,1,1,0,0,0,35.6,36.4);
	new cjs.ButtonHelper(this.btn_metal_gris_domex, 0, 1, 1);

	this.btn_metal_naranja_mecanica = new lib.Símbolo23();
	this.btn_metal_naranja_mecanica.parent = this;
	this.btn_metal_naranja_mecanica.setTransform(1021.1,512.5,1,1,0,0,0,35.6,36.4);
	new cjs.ButtonHelper(this.btn_metal_naranja_mecanica, 0, 1, 1);

	this.btn_metal_negro_infinito = new lib.Símbolo22();
	this.btn_metal_negro_infinito.parent = this;
	this.btn_metal_negro_infinito.setTransform(942.3,512.2,1,1,0,0,0,35.6,36.1);
	new cjs.ButtonHelper(this.btn_metal_negro_infinito, 0, 1, 1);

	this.btn_metal_silver_vein = new lib.Símbolo21();
	this.btn_metal_silver_vein.parent = this;
	this.btn_metal_silver_vein.setTransform(863.5,512.2,1,1,0,0,0,35.6,36.1);
	new cjs.ButtonHelper(this.btn_metal_silver_vein, 0, 1, 1);

	this.btn_metal_xtreme_chrome = new lib.Símbolo20();
	this.btn_metal_xtreme_chrome.parent = this;
	this.btn_metal_xtreme_chrome.setTransform(784.7,512.2,1,1,0,0,0,35.6,36.1);
	new cjs.ButtonHelper(this.btn_metal_xtreme_chrome, 0, 1, 1);

	this.btn_metal_verde_limon = new lib.Símbolo19();
	this.btn_metal_verde_limon.parent = this;
	this.btn_metal_verde_limon.setTransform(1099.9,428.2,1,1,0,0,0,35.6,36.4);
	new cjs.ButtonHelper(this.btn_metal_verde_limon, 0, 1, 1);

	this.btn_amarillo = new lib.Símbolo18();
	this.btn_amarillo.parent = this;
	this.btn_amarillo.setTransform(1021.1,428.2,1,1,0,0,0,35.6,36.4);
	new cjs.ButtonHelper(this.btn_amarillo, 0, 1, 1);

	this.btn_metal_rojo_puebla = new lib.Símbolo17();
	this.btn_metal_rojo_puebla.parent = this;
	this.btn_metal_rojo_puebla.setTransform(942.3,428.2,1,1,0,0,0,35.6,36.4);
	new cjs.ButtonHelper(this.btn_metal_rojo_puebla, 0, 1, 1);

	this.btn_metal_azul_alaska = new lib.Símbolo16();
	this.btn_metal_azul_alaska.parent = this;
	this.btn_metal_azul_alaska.setTransform(862.9,428.2,1,1,0,0,0,35.9,36.4);
	new cjs.ButtonHelper(this.btn_metal_azul_alaska, 0, 1, 1);

	this.btn_metal_banco_reflect = new lib.Símbolo15();
	this.btn_metal_banco_reflect.parent = this;
	this.btn_metal_banco_reflect.setTransform(784.3,427.7,1,1,0,0,0,35.6,35.9);
	new cjs.ButtonHelper(this.btn_metal_banco_reflect, 0, 1, 1);

	this.btn_vinil_azul_marzovi = new lib.Símbolo14();
	this.btn_vinil_azul_marzovi.parent = this;
	this.btn_vinil_azul_marzovi.setTransform(1111.9,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_azul_marzovi, 0, 1, 1);

	this.btn_vinil_azul_rey = new lib.Símbolo13();
	this.btn_vinil_azul_rey.parent = this;
	this.btn_vinil_azul_rey.setTransform(1055.1,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_azul_rey, 0, 1, 1);

	this.btn_vinil_cindirella = new lib.Símbolo12();
	this.btn_vinil_cindirella.parent = this;
	this.btn_vinil_cindirella.setTransform(998.4,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_cindirella, 0, 1, 1);

	this.btn_vinil_eucalipto = new lib.Símbolo11();
	this.btn_vinil_eucalipto.parent = this;
	this.btn_vinil_eucalipto.setTransform(941.8,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_eucalipto, 0, 1, 1);

	this.btn_vinil_amarillo_canario = new lib.Símbolo10();
	this.btn_vinil_amarillo_canario.parent = this;
	this.btn_vinil_amarillo_canario.setTransform(885.1,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_amarillo_canario, 0, 1, 1);

	this.btn_vinil_novillero_vino = new lib.Símbolo9();
	this.btn_vinil_novillero_vino.parent = this;
	this.btn_vinil_novillero_vino.setTransform(828.5,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_novillero_vino, 0, 1, 1);

	this.btn_vinil_novillo_negro = new lib.Símbolo8();
	this.btn_vinil_novillo_negro.parent = this;
	this.btn_vinil_novillo_negro.setTransform(771.8,282.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_novillo_negro, 0, 1, 1);

	this.btn_vinil_panda_rojo = new lib.Símbolo7();
	this.btn_vinil_panda_rojo.parent = this;
	this.btn_vinil_panda_rojo.setTransform(1111.9,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_panda_rojo, 0, 1, 1);

	this.btn_vinil_rojo_fuego = new lib.Símbolo6();
	this.btn_vinil_rojo_fuego.parent = this;
	this.btn_vinil_rojo_fuego.setTransform(1055.1,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_rojo_fuego, 0, 1, 1);

	this.btn_vinil_novillo_gris = new lib.Símbolo5();
	this.btn_vinil_novillo_gris.parent = this;
	this.btn_vinil_novillo_gris.setTransform(998.4,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_novillo_gris, 0, 1, 1);

	this.btn_vinil_novo_rey = new lib.Símbolo4();
	this.btn_vinil_novo_rey.parent = this;
	this.btn_vinil_novo_rey.setTransform(941.8,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_novo_rey, 0, 1, 1);

	this.btn_vinil_panda_naranja = new lib.Símbolo3();
	this.btn_vinil_panda_naranja.parent = this;
	this.btn_vinil_panda_naranja.setTransform(885.1,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_panda_naranja, 0, 1, 1);

	this.btn_vinil_rojo_novillo = new lib.Símbolo2();
	this.btn_vinil_rojo_novillo.parent = this;
	this.btn_vinil_rojo_novillo.setTransform(828.5,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_rojo_novillo, 0, 1, 1);

	this.btn_vinil_verde = new lib.Símbolo1();
	this.btn_vinil_verde.parent = this;
	this.btn_vinil_verde.setTransform(771.8,223.2,1,1,0,0,0,23.9,23.9);
	new cjs.ButtonHelper(this.btn_vinil_verde, 0, 1, 1);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f().s("#999999").ss(2,1,1).p("EAAAgosMAAABRZ");
	this.shape_51.setTransform(684.4,318.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_51},{t:this.btn_vinil_verde},{t:this.btn_vinil_rojo_novillo},{t:this.btn_vinil_panda_naranja},{t:this.btn_vinil_novo_rey},{t:this.btn_vinil_novillo_gris},{t:this.btn_vinil_rojo_fuego},{t:this.btn_vinil_panda_rojo},{t:this.btn_vinil_novillo_negro},{t:this.btn_vinil_novillero_vino},{t:this.btn_vinil_amarillo_canario},{t:this.btn_vinil_eucalipto},{t:this.btn_vinil_cindirella},{t:this.btn_vinil_azul_rey},{t:this.btn_vinil_azul_marzovi},{t:this.btn_metal_banco_reflect},{t:this.btn_metal_azul_alaska},{t:this.btn_metal_rojo_puebla},{t:this.btn_amarillo},{t:this.btn_metal_verde_limon},{t:this.btn_metal_xtreme_chrome},{t:this.btn_metal_silver_vein},{t:this.btn_metal_negro_infinito},{t:this.btn_metal_naranja_mecanica},{t:this.btn_metal_gris_domex},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.txt_vinil},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.txt_metal},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// metales
	this.mc_vinil_amarillo_canario = new lib.mc_vinil_amarillo_canario();
	this.mc_vinil_amarillo_canario.parent = this;
	this.mc_vinil_amarillo_canario.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_azul_marzovi = new lib.mc_vinil_azul_marzovi();
	this.mc_vinil_azul_marzovi.parent = this;
	this.mc_vinil_azul_marzovi.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_azul_rey = new lib.mc_vinil_azul_rey();
	this.mc_vinil_azul_rey.parent = this;
	this.mc_vinil_azul_rey.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_cindirella = new lib.mc_vinil_cindirella();
	this.mc_vinil_cindirella.parent = this;
	this.mc_vinil_cindirella.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_eucalipto = new lib.mc_vinil_eucalipto();
	this.mc_vinil_eucalipto.parent = this;
	this.mc_vinil_eucalipto.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_novillero_vino = new lib.mc_novillero_vino();
	this.mc_vinil_novillero_vino.parent = this;
	this.mc_vinil_novillero_vino.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_novillo_gris = new lib.mc_vinil_novillo_gris();
	this.mc_vinil_novillo_gris.parent = this;
	this.mc_vinil_novillo_gris.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_novillo_negro = new lib.mc_vinil_novillo_negro();
	this.mc_vinil_novillo_negro.parent = this;
	this.mc_vinil_novillo_negro.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_novo_rey = new lib.vinil_novillo_rey();
	this.mc_vinil_novo_rey.parent = this;
	this.mc_vinil_novo_rey.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_panda_naranja = new lib.mc_vinil_panda_verde();
	this.mc_vinil_panda_naranja.parent = this;
	this.mc_vinil_panda_naranja.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_panda_rojo = new lib.mc_vinil_panda_rojo();
	this.mc_vinil_panda_rojo.parent = this;
	this.mc_vinil_panda_rojo.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_rojo_fuego = new lib.mc_vinil_rojo_fuego();
	this.mc_vinil_rojo_fuego.parent = this;
	this.mc_vinil_rojo_fuego.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_rojo_novillo = new lib.mc_vinil_rojo_novillo();
	this.mc_vinil_rojo_novillo.parent = this;
	this.mc_vinil_rojo_novillo.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_vinil_verde = new lib.mc_vinil_verde();
	this.mc_vinil_verde.parent = this;
	this.mc_vinil_verde.setTransform(1435.5,198.9,1,1,0,0,0,77.5,170.5);

	this.mc_metal_xtreme_chrome = new lib.mc_metal_xtreme_chrome();
	this.mc_metal_xtreme_chrome.parent = this;
	this.mc_metal_xtreme_chrome.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_verde_limon = new lib.mc_metal_verde_limon();
	this.mc_metal_verde_limon.parent = this;
	this.mc_metal_verde_limon.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_silver_vein = new lib.mc_metal_silver_vein();
	this.mc_metal_silver_vein.parent = this;
	this.mc_metal_silver_vein.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_rojo_puebla = new lib.mc_metal_rojo_puebla();
	this.mc_metal_rojo_puebla.parent = this;
	this.mc_metal_rojo_puebla.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_negro_infinito = new lib.mc_metal_negro_infinito();
	this.mc_metal_negro_infinito.parent = this;
	this.mc_metal_negro_infinito.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_naranja_mecanica = new lib.mc_metal_naranja_mecanica();
	this.mc_metal_naranja_mecanica.parent = this;
	this.mc_metal_naranja_mecanica.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_gris_domex = new lib.mc_metal_gris_domex();
	this.mc_metal_gris_domex.parent = this;
	this.mc_metal_gris_domex.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_banco_reflect = new lib.mc_metal_banco_reflect();
	this.mc_metal_banco_reflect.parent = this;
	this.mc_metal_banco_reflect.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_azul_alaska = new lib.mc_metal_azul_alaska();
	this.mc_metal_azul_alaska.parent = this;
	this.mc_metal_azul_alaska.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.mc_metal_amarillo = new lib.mc_metal_amarillo();
	this.mc_metal_amarillo.parent = this;
	this.mc_metal_amarillo.setTransform(1488.6,662.3,1,1,0,0,0,251.5,219.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.mc_metal_amarillo},{t:this.mc_metal_azul_alaska},{t:this.mc_metal_banco_reflect},{t:this.mc_metal_gris_domex},{t:this.mc_metal_naranja_mecanica},{t:this.mc_metal_negro_infinito},{t:this.mc_metal_rojo_puebla},{t:this.mc_metal_silver_vein},{t:this.mc_metal_verde_limon},{t:this.mc_metal_xtreme_chrome},{t:this.mc_vinil_verde},{t:this.mc_vinil_rojo_novillo},{t:this.mc_vinil_rojo_fuego},{t:this.mc_vinil_panda_rojo},{t:this.mc_vinil_panda_naranja},{t:this.mc_vinil_novo_rey},{t:this.mc_vinil_novillo_negro},{t:this.mc_vinil_novillo_gris},{t:this.mc_vinil_novillero_vino},{t:this.mc_vinil_eucalipto},{t:this.mc_vinil_cindirella},{t:this.mc_vinil_azul_rey},{t:this.mc_vinil_azul_marzovi},{t:this.mc_vinil_amarillo_canario}]}).wait(1));

	// eq_bg
	this.instance = new lib.equipo_bg();
	this.instance.parent = this;
	this.instance.setTransform(-57,86);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// logo_bg
	this.instance_1 = new lib.loog_bg();
	this.instance_1.parent = this;
	this.instance_1.setTransform(54,40);

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(543,337.4,1797.1,853.4);
// library properties:
lib.properties = {
	id: '37C0B07398264C16AC518AD03997D0C2',
	width: 1200,
	height: 618,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	webfonts: {},
	manifest: [
		{src:"images/Desktop_atlas_.png", id:"Desktop_atlas_"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['37C0B07398264C16AC518AD03997D0C2'] = {
	getStage: function() { return exportRoot.getStage(); },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}



})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;