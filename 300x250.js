(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [
		{name:"300x250_atlas_1", frames: [[364,299,465,106],[364,0,401,297],[0,0,362,401]]}
];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.CachedBmp_6 = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(0);
}).prototype = p = new cjs.Sprite();



(lib.CachedBmp_5 = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(1);
}).prototype = p = new cjs.Sprite();



(lib.fondo = function() {
	this.initialize(ss["300x250_atlas_1"]);
	this.gotoAndStop(2);
}).prototype = p = new cjs.Sprite();
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
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


(lib.titulo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F2D5").s().p("AICBxIAAitIAfAAIAAAWQASgaAbAAQAaAAARASQAUAUAAAfIAAAAQAAAggTAUQgSATgaAAQgbAAgSgZIAAA+gAIsgZQgMAMAAASIAAAAQAAAUAMAMQALAMAQAAQAQAAALgMQAMgMAAgUIAAAAQAAgSgMgMQgLgMgQAAQgQAAgLAMgAjtBxIAAitIAfAAIAAAWQASgaAbAAQAaAAARASQAUAUAAAfIAAAAQAAAggTAUQgSATgaAAQgbAAgSgZIAAA+gAjDgZQgMAMAAASIAAAAQAAAUAMAMQALAMAQAAQAQAAALgMQAMgMAAgUIAAAAQAAgSgMgMQgLgMgQAAQgQAAgLAMgAO2BBQgOgMAAgTIAAgBQAAgVAQgLQAOgKAZAAQATAAASAGIAAgDQAAgegiAAQgSAAgUAIIgIgXQAYgMAaAAQAeAAAPAPQAOAOAAAcIAABPIgeAAIAAgRQgQAUgbAAQgUgBgOgKgAPOAPQgIAHAAAKIAAAAQAAAKAIAGQAHAFALAAQAQAAAKgIQAKgIAAgNIAAgJQgOgGgQABQgPAAgJAFgAKsBBQgOgMAAgTIAAgBQAAgVAQgLQAOgKAZAAQATAAASAGIAAgDQAAgegiAAQgSAAgUAIIgIgXQAYgMAaAAQAeAAAPAPQAOAOAAAcIAABPIgeAAIAAgRQgQAUgbAAQgUgBgOgKgALEAPQgIAHAAAKIAAAAQAAAKAIAGQAHAFALAAQAQAAAKgIQAKgIAAgNIAAgJQgOgGgQABQgPAAgJAFgAEwA3QgUgUAAgdIAAgBQAAgcAVgTQAUgWAfAAQAeABAVAUQAUAUAAAcIAAAAQAAAegUAUQgVAVgfAAQgeAAgVgVgAFGgYQgLAMAAARIAAAAQAAASALANQAMANASAAQASAAALgNQALgMAAgSIAAgBQAAgQgLgMQgMgOgSAAQgSAAgLANgAhAA3QgUgUAAgdIAAgBQAAgcAUgTQAVgWAeAAQAeABAUAUQAVAUAAAcIAAAAQAAAegVAUQgVAVgdAAQgfAAgUgVgAgrgYQgLAMAAARIAAAAQAAASAMANQAMANARAAQARAAAMgNQALgMAAgSIAAgBQAAgQgMgMQgLgOgRAAQgSAAgMANgApWA5QgUgVAAgeIAAgBQAAgbASgVQATgUAcgBQAfABARAVQARAUAAAeIgBAIIhjAAQADARALAIQAKAKAPgBQAUABAQgRIASAQQgVAagiAAQgdgBgTgSgAoHgDQgCgQgIgJQgJgKgPAAQgOAAgJAJQgKAKgCAQIBFAAIAAAAgAwMA5QgUgVAAgeIAAgBQAAgbASgVQATgUAcgBQAfABARAVQARAUAAAeIgBAIIhjAAQADARALAIQAKAKAPgBQAUABAQgRIASAQQgVAagiAAQgdgBgTgSgAu9gDQgCgQgIgJQgJgKgPAAQgOAAgJAJQgKAKgCAQIBFAAIAAAAgAMsA3IAOgVQAWAQAWAAQAVAAAAgOIAAgBQAAgGgJgFIgVgHQgUgGgJgGQgNgKAAgRIAAAAQAAgSAOgMQANgLAVAAQAaAAAXAPIgMAWQgVgNgRAAQgTABAAANIAAAAQAAAHAJAFQAFACAQAFQATAGAJAGQAOAKAAAQIAAABQAAAUgPAMQgNAKgWAAQgfAAgagUgAr5AjIAAhFIgRAAIAAgaIARAAIAAglIAfAAIAAAlIAkAAIAAAaIgkAAIAABBQAAAQAQABQAKAAAJgGIAAAaQgMAGgQABQgmgBAAgngADqBJIAAhMQAAgggdgBQgNABgIAIQgJAKAAAPIAABLIgeAAIAAiFIAeAAIAAAUQAQgXAagBQAXAAAMAPQANAOAAAXIAABVgAknBJIAAhMQAAgggbgBQgNAAgIAJQgIAJAAAQIAABLIgeAAIAAhMQAAgQgIgIQgHgJgMAAQgNABgIAIQgIAKAAAPIAABLIgfAAIAAiFIAfAAIAAAUQAQgXAZgBQAcAAAMAYQASgYAbAAQAWAAAMAOQANANAAAZIAABVgAqgBJIAAiFIAfAAIAACFgAuDBJIAAi5IAfAAIAAC5gAqhhRIAAgeIAhAAIAAAeg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titulo2, new cjs.Rectangle(-105.7,-11.3,211.5,22.6), null);


(lib.titulo1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F8F2D5").s().p("ACQBxIAAiyIA6AAIAAARQAJgKAHgEQALgGAOAAQAZAAARATQARAUAAAfIAAABQAAAggRAVQgRAUgZAAQgYAAgRgTIAAA4gADPgOQgHAIAAAJIAAABQAAAKAHAHQAHAIAJAAQAKAAAHgIQAGgHAAgKIAAgBQAAgJgGgIQgHgHgKAAQgJAAgHAHgAL/A4QgVgTAAghIAAAAQAAgfAUgVQAUgUAfAAQAjgBATAXQASAUAAAhIAAAJIhZAAQAGATAUAAQAOAAAOgOIAfAZQgXAegoAAQgiAAgVgUgANFgHQgBgKgGgGQgFgFgIgBQgPAAgDAWIAmAAIAAAAgAHiA4QgRgUAAggIAAAAQAAgfARgWQARgTAZAAQAZgBARAUIAAg/IA5AAIAAC5Ig5AAIAAgRQgJAJgIAEQgKAHgPAAQgZAAgRgUgAIPgOQgGAIAAAJIAAABQAAAKAGAHQAHAIAKAAQAKAAAGgIQAHgHAAgKIAAgBQAAgJgHgHQgGgIgKAAQgKAAgHAHgAFDBBQgNgMAAgUIAAgBQAAgUAOgLQAOgLAZAAQAUABANAFIAAgCQAAgVgaAAQgSAAgUAIIgKgmQAagLAgABQAoAAATASQAOAOAAAeIAABOIg6AAIAAgPQgQASgYAAQgUAAgMgLgAFyARQgFAFAAAHIAAAAQAAAGAEAEQAEAEAFgBQAIABAFgGQAFgGAAgKIAAgGQgGgCgHAAQgIAAgFAEgAjrA+QgNgNAAgYIAAhaIA6AAIAABIQAAAIAFAGQAEAEAHAAQAHAAAEgEQAFgGAAgIIAAhIIA6AAIAACKIg6AAIAAgTQgRAWgZAAQgWAAgNgOgAnJBBQgNgMAAgUIAAgBQAAgUAOgLQAOgLAZAAQAUABANAFIAAgCQAAgVgaAAQgSAAgUAIIgKgmQAagLAgABQAoAAATASQAOAOAAAeIAABOIg6AAIAAgPQgQASgYAAQgUAAgMgLgAmaARQgFAFAAAHIAAAAQAAAGAEAEQAEAEAFgBQAIABAFgGQAFgGAAgKIAAgGQgGgCgHAAQgIAAgFAEgArLBBQgNgMAAgUIAAgBQAAgUAOgLQAOgLAZAAQAUABANAFIAAgCQAAgVgaAAQgSAAgUAIIgKgmQAagLAgABQAoAAATASQAOAOAAAeIAABOIg6AAIAAgPQgQASgYAAQgUAAgMgLgAqcARQgFAFAAAHIAAAAQAAAGAEAEQAEAEAFgBQAIABAFgGQAFgGAAgKIAAgGQgGgCgHAAQgIAAgFAEgAKABJIAAiKIA6AAIAAAbQANgeAfABIAAA9IgHAAQglAAAAArIAAAkgAAGBJIAAhJQAAgIgFgFQgDgFgHAAQgHAAgEAFQgFAFAAAIIAABJIg6AAIAAiKIA6AAIAAATQARgXAYABQAWAAANANQANANAAAYIAABbgAo5BJIAAiKIA6AAIAAAbQANgeAeABIAAA9IgGAAQglAAAAArIAAAkgAt4BJIAAixIBQAAQAkgBAVARQAWAQAAAfIAAABQAAAfgWAQQgVASglgBIgUAAIAAAxgAs9gRIAQAAQAaAAAAgUIAAgBQAAgTgZAAIgRAAg");
	this.shape.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.titulo1, new cjs.Rectangle(-88.9,-11.3,177.9,22.6), null);


(lib.texto2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F2D5").s().p("AnRAgIACgFQAIAFAKAAQAHAAAEgEQAFgEAAgHIAAgFQgIAJgKAAQgIAAgHgGQgFgGgBgJIAAAAQABgIAFgGQAHgGAIAAQAKAAAIAJIAAgIIAGAAIAAAkQAAAKgFAFQgHAGgKAAQgMAAgIgGgAnIgKQgFAEAAAGQAAAHAFAEQAEAEAHAAQAGAAAEgEQAFgEABgHIAAAAQgBgGgFgEQgEgEgGAAQgHAAgEAEgAIDAWQgFgEAAgHQAAgHAGgDQAEgDAJAAQAHAAAHACIAAgCQgBgMgNAAQgGAAgHAEIgCgGQAIgEAIAAQAKAAAFAFQAEAFAAAIIAAAaIgGAAIAAgGQgHAHgJAAQgHAAgFgDgAIIAEQgDADAAAEQAAAEADADQADACAFAAQAGAAAEgDQAEgEABgFIAAgEQgHgCgHAAQgFAAgEACgAGWASQgHgGAAgKQAAgIAHgHQAGgHAKAAQAKAAAGAHQAHAHAAAIQAAAKgHAGQgGAHgKAAQgKAAgGgHgAGagJQgEAFAAAGQAAAHAEAFQAFAFAHAAQAHAAAFgFQAFgFgBgHQAAgGgEgFQgFgFgHAAQgHAAgFAFgAFzANIAAgaIgGAAIAAgGIAGAAIAAgNIAGAAIAAANIAPAAIAAAGIgPAAIAAAZQAAAHAIAAQAEAAADgCIAAAGQgEACgFAAQgMAAAAgMgAFDATIAEgFQAIAGAIAAQAEAAACgCQADgCAAgDIAAgBQAAgDgEgCIgIgCIgKgEQgEgDAAgFIAAAAQAAgGAEgDQAEgEAHAAQAJAAAHAFIgDAFQgHgEgHAAQgDAAgCACQgDABAAADQAAADAEACIAIADIAJADQAFADgBAGQABAGgFAEQgEADgHAAQgLAAgIgGgAB7ASQgGgGAAgKQAAgIAGgHQAIgHAJAAQAKAAAHAHQAGAHAAAIQAAAKgGAGQgHAHgKAAQgKAAgHgHgACBgJQgFAFAAAGQAAAHAFAFQAEAFAHAAQAIAAAEgFQAEgFABgHQAAgGgGgFQgEgFgHAAQgHAAgEAFgABMASQgGgGgBgKQABgIAGgHQAHgHAKAAQAKAAAHAIIgFAFQgGgHgHAAQgHAAgEAFQgEAFAAAGQAAAHAEAFQAEAFAIAAQAHAAAGgGIAFAEQgIAIgKAAQgKAAgHgHgAgEASQgGgGAAgKQAAgIAGgHQAHgHAJAAQAKAAAHAHQAGAHAAAIQAAAKgGAGQgHAHgKAAQgKAAgGgHgAABgJQgEAFAAAGQAAAHAEAFQAEAFAHAAQAHAAAFgFQAFgFAAgHQgBgGgFgFQgEgFgHAAQgHAAgEAFgAkCAUQgFgFAAgHIAAgbIAHAAIAAAZQAAAGADAEQADADAGAAQAFAAAEgEQAEgDAAgHIAAgYIAGAAIAAArIgGAAIAAgHQgFAIgKAAQgIAAgEgFgAlQAWQgEgEAAgHQgBgHAGgDQAFgDAJAAQAGAAAHACIAAgCQAAgMgNAAQgGAAgIAEIgCgGQAJgEAIAAQAJAAAFAFQAEAFABAIIAAAaIgHAAIAAgGQgGAHgKAAQgHAAgFgDgAlKAEQgEADAAAEQAAAEAEADQACACAGAAQAFAAAFgDQAEgEAAgFIAAgEQgGgCgHAAQgGAAgDACgAmXAWQgFgEAAgHQAAgHAFgDQAGgDAIAAQAHAAAGACIAAgCQABgMgNAAQgHAAgHAEIgCgGQAIgEAIAAQAKAAAEAFQAFAFAAAIIAAAaIgHAAIAAgGQgFAHgLAAQgGAAgFgDgAmSAEQgEADAAAEQAAAEAEADQADACAFAAQAGAAAEgDQAFgEgBgFIAAgEQgGgCgGAAQgHAAgDACgAoAATQgGgHAAgKQAAgJAFgGQAHgHAJAAQAJAAAGAHQAGAGgBAJIAAADIgiAAQAAAHAEAEQAEAEAHAAQAIAAAGgHIAEAEQgIAIgLAAQgIAAgHgGgAnjAAQgBgGgEgEQgDgEgHAAQgFAAgEAEQgEAEAAAGIAcAAIAAAAgAh1AZIgTgsIAHAAIAPAkIAPgkIAHAAIgTAsgAHsAYIAAgrIAHAAIAAArgAHJAYIAAgrIAHAAIAAAMQACgGAFgDQAFgEAGAAIAAAHIgBAAQgHAAgFAGQgGAFABAJIAAARgAEyAYIAAgrIAGAAIAAArgAEdAYIAAgZQAAgGgDgDQgDgEgGAAQgGAAgEAEQgEAEAAAGIAAAYIgGAAIAAg9IAGAAIAAAaQAGgJAKAAQAIAAAEAFQAEAFABAIIAAAagADPAYIAAgZQAAgGgEgDQgCgEgHAAQgFAAgEAEQgEAEABAGIAAAYIgHAAIAAgrIAHAAIAAAIQAFgJAJAAQAJAAAEAFQAFAFgBAIIAAAagAgcAYIAAgZQABgGgEgDQgDgEgGAAQgGAAgDAEQgEAEAAAGIAAAYIgGAAIAAgrIAGAAIAAAIQAFgJAKAAQAIAAAFAFQAEAFAAAIIAAAagAhRAYIAAgrIAGAAIAAArgAixAYIAAgZQAAgGgEgDQgDgEgGAAQgFAAgFAEQgDAEAAAGIAAAYIgHAAIAAgrIAHAAIAAAIQAFgJAKAAQAIAAAFAFQAEAFAAAIIAAAagAlmAYIAAg9IAGAAIAAA9gAokAYIAAgrIAGAAIAAAMQADgGAEgDQAFgEAGAAIAAAHIAAAAQgIAAgEAGQgGAFAAAJIAAARgAHrgdIAAgHIAIAAIAAAHgAExgdIAAgHIAIAAIAAAHgAhSgdIAAgHIAIAAIAAAHg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto2, new cjs.Rectangle(-54.9,-3.8,109.8,7.699999999999999), null);


(lib.texto1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#F9F2D5").s().p("AAqAZQgHgGAAgKQAAgJAGgHQAGgGAKAAQAJAAAGAGQAFAHAAAJIAAACIgjAAQABAHAEAEQAEAEAHAAQAIAAAGgGIAEADQgIAJgLAAQgJAAgGgHgAAvgEQgEAEgBAGIAcAAQAAgGgEgDQgDgFgHAAQgFAAgEAEgABZAfIAAg+IAHAAIAAA+gAgHAfIAAgaQAAgFgDgEQgDgDgGAAQgGAAgEADQgDAEAAAFIAAAaIgHAAIAAgrIAHAAIAAAHQAFgIAKAAQAIAAAEAFQAFAEAAAHIAAAcgAhfAfIAAg7IArAAIAAAGIgkAAIAAAUIAhAAIAAAGIghAAIAAAVIAlAAIAAAGg");
	this.shape.setTransform(-28.675,-0.475);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AD5AiQAJgBAAgHIgHAAIAAgRIARAAIAAAOQAAAQgSABgADRAVQgHgHAAgLIABgGQgLACAAANIAAAOIgfAAIAAgGQgFAHgJAAQgIAAgGgGQgGgHAAgLQAAgKAGgHQAGgGAIgBQAJAAAFAIIAAgXIARAAIAAAQIAOAAIAAAKQAFgKAKAAIAAAJIACgCQAGgHALgBQALAAAGAIQAGAHAAAKIAAADIgfAAQACAIAIAAQAFAAAFgEIAJAGQgHAKgNAAQgLAAgHgGgACSgEQgDADAAAEIAAAAQAAAEADAEQACADAEAAQAEAAADgDQADgEAAgEIAAAAQAAgEgDgDQgDgDgEAAQgEAAgCADgADaAAIAQAAQgBgEgCgCQgCgDgDAAQgHAAgBAJgABTAXQgEgDAAgHIAAAAQAAgIAFgDQAFgDAIAAQAGAAAFABIAAAAQAAgIgJABQgGAAgHACIgDgLQAIgEAKAAQAMAAAGAGQAFAFAAAJIAAAaIgQAAIAAgFQgFAGgJAAQgGAAgFgEgABeAMIAAAAQAAAAAAABQABAAAAABQAAAAAAABQABAAAAAAQABABAAAAQAAAAABABQAAAAABAAQABAAAAAAQAEAAACgCQACgDAAgCIAAgDIgGgBQgIAAAAAGgAg7AVIgEgFIAAAKIgQAAIAAgGQgGAHgIAAQgJAAgFgGQgHgHAAgLQAAgKAHgHQAFgGAJgBQAIAAAGAIIAAgXIAQAAIAAAbIADgEQAHgHAKgBQALAAAHAIQAFAHAAAKIAAADIgfAAQACAIAIAAQAGAAAFgEIAJAGQgIAKgMAAQgLAAgHgGgAhfgEQgDADAAAEIAAAAQAAAEADAEQADADAEAAQAEAAADgDQACgEAAgEIAAAAQAAgEgCgDQgDgDgEAAQgEAAgDADgAgzAAIAQAAQAAgEgCgCQgDgDgDAAQgHAAgBAJgAi1AXQgEgDAAgHIAAAAQAAgIAFgDQAFgDAIAAQAGAAAFABIAAAAQAAgIgJABQgGAAgHACIgDgLQAIgEAKAAQAMAAAGAGQAFAFAAAJIAAAaIgQAAIAAgFQgFAGgJAAQgGAAgFgEgAiqAMIAAAAQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQABABAAAAQABAAAAABQABAAAAAAQABAAAAAAQAEAAACgCQACgDAAgCIAAgDIgGgBQgIAAAAAGgAAZAaIAAg7IAaAAQALAAAHAFQAHAHAAAJIAAAAQAAAKgIAGQgHAFgLAAIgIAAIAAARgAAqgDIAIAAQAEAAADgCQACgCAAgEQAAgIgJAAIgIAAgAgQAaIAAg+IAQAAIAAA+gAjOAaIAAguIAQAAIAAAugAkLAaIAAg7IAXAAQAQAAAJAJQAJAHAAANIAAABQAAAMgJAIQgJAJgQAAgAj6AMIAGAAQAIAAAEgFQAFgEAAgGQAAgHgFgEQgEgEgIAAIgGAAgAjMgXIAJgQIAPAFIgNALg");
	this.shape_1.setTransform(11.525,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.texto1, new cjs.Rectangle(-38.2,-4,76.5,8), null);


(lib.logo2 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1_copia
	this.instance = new lib.CachedBmp_6();
	this.instance.setTransform(-119.3,-29.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD1627").s().p("A1hF6IAArzMArDAAAIAALzg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo2, new cjs.Rectangle(-137.7,-37.7,275.5,75.5), null);


(lib.logo = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1_copia
	this.instance = new lib.CachedBmp_5();
	this.instance.setTransform(-104.15,-75.85,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.logo, new cjs.Rectangle(-104.1,-75.8,200.5,148.5), null);


(lib.fondo_1 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.instance = new lib.fondo();
	this.instance.setTransform(-181,-201);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.fondo_1, new cjs.Rectangle(-181,-201,362,401), null);


(lib.Color = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Capa_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#BD1627").s().p("A3bTiMAAAgnDMAu3AAAMAAAAnDg");

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Color, new cjs.Rectangle(-150,-125,300,250), null);


(lib.btn = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// texto
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AIABOIAAgnQgMAOgPAAQgRAAgMgMQgMgNAAgWQAAgUAMgOQAMgMAQAAQARAAALANIAAgLIAgAAIAAB0gAHhgIQgGAGAAAIIAAAAQAAAJAGAGQAFAGAIAAQAIAAAFgGQAGgGAAgJIAAAAQAAgIgGgGQgFgGgIAAQgIAAgFAGgAIuAsQgIgJAAgPIAAg6IAfAAIAAAwQAAAPANAAQAGAAAEgEQAEgEAAgHIAAgwIAfAAIAABZIgfAAIAAgMQgMAOgPAAQgPAAgIgJgAFdAuQgJgIAAgNIAAAAQAAgOAKgHQAKgGAQAAQAMAAAKACIAAAAQAAgPgTAAQgLAAgOAFIgGgWQARgHAUAAQAXAAALALQAKAJAAATIAAAzIggAAIAAgJQgKALgQAAQgOAAgIgHgAFzAXIAAABQAAAEADADQADACAFAAQAHAAAEgEQAFgEAAgGIAAgFQgGgCgHAAQgOAAAAALgADFAoQgOgOAAgUQAAgSAOgOQAPgOAVAAQAWAAAOAOQAOANAAATIAAAAQAAAUgOANQgPAOgVAAQgVAAgPgNgADbgHQgFAFAAAIIAAAAQAAAJAFAFQAGAHAIAAQAJAAAFgGQAFgGAAgJQAAgHgFgGQgGgGgIAAQgJAAgFAGgAArAuQgJgIAAgNIAAAAQAAgOAKgHQAJgGAQAAQANAAAJACIAAAAQAAgPgSAAQgLAAgOAFIgHgWQASgHATAAQAXAAALALQAKAJAAATIAAAzIgfAAIAAgJQgLALgQAAQgNAAgIgHgABAAXIAAABQAAAEAEADQADACAFAAQAHAAAEgEQAEgEAAgGIAAgFQgFgCgHAAQgPAAAAALgAhMAXIAAgkIgKAAIAAgZIAKAAIAAgXIAgAAIAAAXIAyAAIAAASQAIgVAUABIAAAiIgDAAQgZAAAAAdIAAAcIgfAAIAAgCQgJAEgLAAQgfAAAAgegAgsARQAAAJAJAAQAEAAAGgCIAAglIgTAAgAkUAoQgOgNAAgVQAAgTANgNQANgOAUAAQAWAAAMAPQALANAAAUIAAAHIg8AAQADAPAQAAQALAAAJgKIASAPQgPASgYAAQgWAAgNgNgAjkAAQgBgIgEgEQgFgFgGAAQgNAAgDARIAgAAIAAAAgAl9AsQgIgJAAgPIAAg6IAfAAIAAAwQAAAPANAAQAGAAAEgEQAEgEAAgHIAAgwIAfAAIAABZIgfAAIAAgMQgMAOgPAAQgPAAgIgJgAnYAoQgNgOAAgUQAAgSANgOQAOgOAVAAQAaAAANAUIgWAQQgHgJgKAAQgHAAgFAGQgGAFAAAIIAAAAQAAAJAGAGQAFAGAIAAQAJAAAIgKIAVAQQgOAUgaAAQgUAAgOgNgAKOAzIAAhZIAfAAIAABZgACOAzIAAh5IAfAAIAAB5gAh+AzIAAgxQAAgOgNAAQgGAAgDAEQgEAEAAAGIAAAxIggAAIAAhZIAgAAIAAANQALgPAQAAQAOAAAJAJQAIAJAAAPIAAA6gAoOAzIAAgxQAAgOgNAAQgGAAgEAEQgDAEAAAGIAAAxIggAAIAAhZIAgAAIAAANQALgPAQAAQAOAAAIAJQAIAJAAAPIAAA6gAq/AzIAAh0IBeAAIAAAcIg+AAIAAASIA4AAIAAAYIg4AAIAAATIA+AAIAAAbgAKRguIASgfIAdAKIgZAVgAkAgvIARgeIAeAJIgZAVg");
	this.shape.setTransform(0.975,-0.575);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	// borde
	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#FEF3D0").ss(1,1,1).p("Ax6iWMAj1AAAIAAEtMgj1AAAg");
	this.shape_1.setTransform(0.025,0);

	this.timeline.addTween(cjs.Tween.get(this.shape_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.btn, new cjs.Rectangle(-115.6,-16,231.3,32.1), null);


// stage content:
(lib._300x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// logo2
	this.instance = new lib.logo2();
	this.instance.setTransform(150.05,-33.75,0.504,0.504,0,0,0,0.1,0.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(55).to({_off:false},0).to({y:19.05},5).wait(117).to({y:-22.5},5).to({_off:true},1).wait(7));

	// btn
	this.instance_1 = new lib.btn();
	this.instance_1.setTransform(150,304.2);
	this.instance_1._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(109).to({_off:false},0).to({y:223.2},5).wait(63).to({alpha:0},5).to({_off:true},1).wait(7));

	// texto2
	this.instance_2 = new lib.texto2();
	this.instance_2.setTransform(456.1,188.6,2.5091,2.5091);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(106).to({_off:false},0).to({x:150},5).wait(64).to({alpha:0},5).to({_off:true},1).wait(9));

	// texto1
	this.instance_3 = new lib.texto1();
	this.instance_3.setTransform(-107.75,165.5,2.5091,2.5091);
	this.instance_3._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(106).to({_off:false},0).to({x:150},5).wait(63).to({alpha:0},5).to({_off:true},1).wait(10));

	// titulo2
	this.instance_4 = new lib.titulo2();
	this.instance_4.setTransform(455.4,210.8,1.1868,1.1868);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(55).to({_off:false},0).to({x:100.5},5).to({x:150},2).wait(39).to({y:320.45},5).to({_off:true},1).wait(83));

	// titulo1
	this.instance_5 = new lib.titulo1();
	this.instance_5.setTransform(-123.55,184,1.1868,1.1868);
	this.instance_5._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(55).to({_off:false},0).to({x:177.1},5).to({x:150},2).wait(39).to({y:293.65},5).to({_off:true},1).wait(83));

	// logo
	this.instance_6 = new lib.logo();
	this.instance_6.setTransform(150,124.95,0.9426,0.9426);
	this.instance_6.alpha = 0;
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(3).to({_off:false},0).to({alpha:1},5).wait(32).to({alpha:0},5).to({_off:true},1).wait(144));

	// Color
	this.instance_7 = new lib.Color();
	this.instance_7.setTransform(149.95,125);

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(45).to({alpha:0},10).to({_off:true},1).wait(126).to({_off:false},0).to({alpha:1},7).wait(1));

	// fondo
	this.instance_8 = new lib.fondo_1();
	this.instance_8.setTransform(150.1,166.55,0.8287,0.8287,0,0,0,0.1,0);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(40).to({_off:false},0).wait(150));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-79.1,72.2,673,261.7);
// library properties:
lib.properties = {
	id: 'B5D12B59FFB843B091E4D02D41930A6A',
	width: 300,
	height: 250,
	fps: 30,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [
		{src:"images/300x250_atlas_1.png?1778343081618", id:"300x250_atlas_1"}
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
an.compositions['B5D12B59FFB843B091E4D02D41930A6A'] = {
	getStage: function() { return exportRoot.stage; },
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


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;