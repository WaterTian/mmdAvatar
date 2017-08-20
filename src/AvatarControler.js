/**
 * @author waterTian
 */
TY.AvatarControler = function(avatar) {
	var scope = this;

	this.avatar = avatar;
	this.mesh = avatar.mesh;


	this.Keys = [];
	configMorphDate();

	function configMorphDate() {
		for (var key in scope.mesh.morphTargetDictionary) {
			for (var i = 0; i <= TY.morphConifg.length; i++) {
				if (key == TY.morphConifg[i]) {
					scope.Keys.push(i);
				}
			}
		}
		console.log(scope.Keys);
	}


	this.testMorphNum = 0;


	this.cunMorphsObj = {};
	for (var i = 0; i < TY.morphConifg.length; ++i)
		this.cunMorphsObj[i] = 0;

	this.cunMorphsOtherData = [100, 100, 100];
	this.cunMorphsOtherObj = TY.toObject(this.cunMorphsOtherData);


};



TY.AvatarControler.prototype = Object.assign(TY.EventDispatcher.prototype, {

	constructor: TY.AvatarControler,

	updateMorph_: function() {
		if (this.testMorphNum >= TY.datas.length) this.testMorphNum = 0;
		this.setMorph(TY.datas[this.testMorphNum]);
		this.setMorphOther(TY.datas[this.testMorphNum]);

		if (TY.logBox) TY.logBox.innerHTML = JSON.stringify(TY.datas[this.testMorphNum]) + "<br>";
		this.testMorphNum++;
	},

	updateMorph: function() {
		this.setMorph(TY.data);
		this.setMorphOther(TY.data);
		if (TY.logBox) TY.logBox.innerHTML = JSON.stringify(TY.data) + "<br>";
	},


	logMorphString: function() {
		var logString = "";
		var logNum = 0;
		for (var key in this.mesh.morphTargetDictionary) {
			logString += logNum + ":" + key + "  ";
			logNum++;
		}
		console.log(logString);
	},

	setMorph: function(obj) {
		var scope = this;
		// console.log(obj);
		var toObj = {};
		for (var i = 0; i < TY.morphConifg.length; i++) {
			if (obj[i] != undefined) {
				toObj[i] = obj[i]
			} else {
				toObj[i] = 0;
			}
		}
		var tween = new TWEEN.Tween(scope.cunMorphsObj)
			.to(toObj, 200)
			.start()
			.onUpdate(function() {
				for (var i = 0; i < TY.morphConifg.length; i++) {
					if (this[i] != 0) scope.mesh.morphTargetInfluences[i - 1] = this[i] * 0.01;
				}
			});
	},

	setMorphOther: function(obj) {
		var scope = this;
		var toObj = {};
		for (var i = 0; i < scope.cunMorphsOtherData.length; i++) {
			var _i = TY.morphConifg.length + i + 1;
			if (obj[_i] != undefined) {
				toObj[i] = obj[_i]
			} else {
				toObj[i] = 100;
			}
		}
		// console.log(toObj)
		var tween = new TWEEN.Tween(scope.cunMorphsOtherObj)
			.to(toObj, 300)
			.start()
			.onUpdate(function() {
				for (var i = 0; i < scope.cunMorphsOtherData.length; i++) {
					if (i < scope.mesh.geometry.animations.length) {
						if (this[i] < 100) {
							scope.avatar.TYgotoAndStopAction(scope.mesh, scope.mesh.geometry.animations[i], 1, 100 - this[i]);
						} else {
							scope.avatar.TYgotoAndStopAction(scope.mesh, scope.mesh.geometry.animations[scope.cunMorphsOtherData.length + i], 1, this[i] - 100);
						}

					}
				}
			});
	}



});