// namespace:
this.TY = this.TY || {};

TY.VERSION = "0";
TY.Debug = 0;



TY.data = [
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.9, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.6, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.5, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .6, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.4, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .7, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.3, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .9, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.2, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .7, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, .4, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
	[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
];

TY.morphConifg = {
	length: 30,
	1: '真面目',
	2: '困る',
	3: 'にこり',
	4: '怒り',
	5: '上',
	6: '下',
	7: 'まばたき',
	8: '笑い',
	9: 'ウィンク',
	10: 'ウィンク２',
	11: 'ウィンク右',
	12: 'ｳｨﾝｸ２右',
	13: 'はぅ',
	14: 'なごみ',
	15: 'びっくり',
	16: 'じと目',
	17: 'なぬ！',
	18: '瞳小',
	19: 'あ',
	20: 'い',
	21: 'う',
	22: 'お',
	23: '▲',
	24: '∧',
	25: 'ω',
	26: 'ω□',
	27: 'はんっ！',
	28: 'ぺろっ',
	29: 'えー',
	30: 'にやり'
};






TY.inherit = function(ctor, superCtor) {
	ctor.superClass = superCtor;
	ctor.prototype = Object.create(superCtor.prototype);
	ctor.prototype.constructor = ctor;
};
TY.extend = function(origin, add) {
	// Don't do anything if add isn't an object
	if (!add || typeof add !== 'object')
		return origin;
	var keys = Object.keys(add);
	var i = keys.length;
	while (i--) {
		origin[keys[i]] = add[keys[i]];
	}
	return origin;
};

TY.dpr = window.devicePixelRatio || 1;

TY.isAndroid = /Android/i.test(navigator.userAgent);
TY.isIphone = /iphone/i.test(navigator.userAgent);
TY.isChrome = /chrome\//i.test(navigator.userAgent);
TY.isWeixin = /MicroMessenger\//i.test(navigator.userAgent);
TY.isWeibo = /Weibo/i.test(navigator.userAgent);

TY.isMobileDevice = isMobileDevice;

function isMobileDevice() {
	if (navigator === undefined || navigator.userAgent === undefined) {
		return true;
	}
	var s = navigator.userAgent;
	if (s.match(/iPhone/i) || s.match(/iPad/i) || s.match(/iPod/i) || s.match(/webOS/i) || s.match(/BlackBerry/i) || (s.match(/Windows/i) && s.match(/Phone/i)) || (s.match(/Android/i) && s.match(/Mobile/i))) {
		return true;
	}
	return false;
}



TY.toObject = function(arr) {
	var rv = {};
	for (var i = 0; i < arr.length; ++i)
		rv[i] = arr[i];
	return rv;
}
/**
 * @author waterTian
 */
TY.EventDispatcher = function() {}
TY.EventDispatcher.prototype = {
	constructor: TY.EventDispatcher,
	addEventListener: function(type, listener) {
		if (!this._listeners) {
			this._listeners = {};
		} else {
			this.removeEventListener(type, listener);
		}

		if (!this._listeners[type]) this._listeners[type] = []
		this._listeners[type].push(listener);

		return listener;
	},

	hasEventListener: function(type, listener) {
		var listeners = this._listeners;
		return !!(listeners && listeners[type]);
	},

	removeEventListener: function(type, listener) {
		if (!this._listeners) return;
		if (!this._listeners[type]) return;

		var arr = this._listeners[type];
		for (var i = 0, l = arr.length; i < l; i++) {
			if (arr[i] == listener) {
				if (l == 1) {
					delete(this._listeners[type]);
				}
				// allows for faster checks.
				else {
					arr.splice(i, 1);
				}
				break;
			}
		}
	},
	removeAllEventListeners: function(type) {
		if (!type)
			this._listeners = null;
		else if (this._listeners)
			delete(this._listeners[type]);
	},

	dispatchEvent: function(eventName, eventTarget) {
		var ret = false,
			listeners = this._listeners;

		if (eventName && listeners) {
			var arr = listeners[eventName];
			if (!arr) return ret;

			arr = arr.slice();
			// to avoid issues with items being removed or added during the dispatch

			var handler, i = arr.length;
			while (i--) {
				var handler = arr[i];
				ret = ret || handler(eventTarget);
			}

		}
		return !!ret;
	}
};
/**
 * @author waterTian
 */
TY.MMDAvatar = function(scene) {

	_MMDAvatar = this;
	this.scene = scene;
	this.mesh = null;
	this.meshes = [];

	this.doAnimation = true;
	this.doIk = true;
	this.doGrant = true;
	this.doPhysics = true;
	this.doCameraAnimation = true;

	this.sharedPhysics = false;
	this.masterPhysics = null;

	this.audioManager = null;
	this.camera = null;

	this.ikHelper;
	this.physicsHelper;

	this.currentAction = null;

};



TY.MMDAvatar.prototype = Object.assign(TY.EventDispatcher.prototype, {

	constructor: TY.MMDAvatar,

	add: function(mesh) {
		if (!(mesh instanceof THREE.SkinnedMesh)) {
			throw new Error('THREE.MMDHelper.add() accepts only THREE.SkinnedMesh instance.');
		}
		if (mesh.mixer === undefined) mesh.mixer = null;
		if (mesh.ikSolver === undefined) mesh.ikSolver = null;
		if (mesh.grantSolver === undefined) mesh.grantSolver = null;
		if (mesh.physics === undefined) mesh.physics = null;
		if (mesh.looped === undefined) mesh.looped = false;

		this.mesh = mesh;
		this.meshes.push(mesh);
		// workaround until I make IK and Physics Animation plugin
		this.initBackupBones(mesh);

		this.scene.add(this.mesh);
	},


	initIk: function() {
		/*
		 * Note: create CCDIKHelper after calling helper.setAnimation()
		 */
		this.ikHelper = new THREE.CCDIKHelper(this.mesh);
		this.ikHelper.visible = false;
		this.scene.add(this.ikHelper);
	},

	initPhysic: function() {
		/*
		 * Note: You're recommended to call helper.setPhysics()
		 *       after calling helper.setAnimation().
		 */
		this.setPhysics(this.mesh);
		this.physicsHelper = new THREE.MMDPhysicsHelper(this.mesh);
		this.physicsHelper.visible = false;
		this.scene.add(this.physicsHelper);

		if (TY.isMobileDevice) this.enablePhysics(false);
	},



	setAudio: function(audio, listener, params) {

		this.audioManager = new THREE.MMDAudioManager(audio, listener, params);

	},

	setCamera: function(camera) {

		camera.mixer = null;
		this.camera = camera;

	},

	setPhysicses: function(params) {

		for (var i = 0; i < this.meshes.length; i++) {

			this.setPhysics(this.meshes[i], params);

		}

	},

	setPhysics: function(mesh, params) {

		params = (params === undefined) ? {} : Object.assign({}, params);

		if (params.world === undefined && this.sharedPhysics) {

			var masterPhysics = this.getMasterPhysics();

			if (masterPhysics !== null) params.world = masterPhysics.world;

		}

		var warmup = params.warmup !== undefined ? params.warmup : 60;

		var physics = new THREE.MMDPhysics(mesh, params);

		if (mesh.mixer !== null && mesh.mixer !== undefined && params.preventAnimationWarmup !== true) {

			this.animateOneMesh(0, mesh);
			physics.reset();

		}

		physics.warmup(warmup);

		this.updateIKParametersDependingOnPhysicsEnabled(mesh, true);

		mesh.physics = physics;

	},

	getMasterPhysics: function() {

		if (this.masterPhysics !== null) return this.masterPhysics;

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var physics = this.meshes[i].physics;

			if (physics !== undefined && physics !== null) {

				this.masterPhysics = physics;
				return this.masterPhysics;

			}
		}

		return null;

	},

	enablePhysics: function(enabled) {

		if (enabled === true) {

			this.doPhysics = true;

		} else {

			this.doPhysics = false;

		}

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			this.updateIKParametersDependingOnPhysicsEnabled(this.meshes[i], enabled);

		}

	},

	updateIKParametersDependingOnPhysicsEnabled: function(mesh, physicsEnabled) {

		var iks = mesh.geometry.iks;
		var bones = mesh.geometry.bones;

		for (var j = 0, jl = iks.length; j < jl; j++) {

			var ik = iks[j];
			var links = ik.links;

			for (var k = 0, kl = links.length; k < kl; k++) {

				var link = links[k];

				if (physicsEnabled === true) {

					// disable IK of the bone the corresponding rigidBody type of which is 1 or 2
					// because its rotation will be overriden by physics
					link.enabled = bones[link.index].rigidBodyType > 0 ? false : true;

				} else {

					link.enabled = true;

				}

			}

		}

	},

	setAnimations: function() {

		for (var i = 0; i < this.meshes.length; i++) {

			this.setAnimation(this.meshes[i]);

		}

	},

	setAnimation: function(mesh) {

		if (mesh.geometry.animations !== undefined) {

			mesh.mixer = new THREE.AnimationMixer(mesh);

			// TODO: find a workaround not to access (seems like) private properties
			//       the name of them begins with "_".
			mesh.mixer.addEventListener('loop', function(e) {

				if (e.action._clip.tracks[0].name.indexOf('.bones') !== 0) return;

				var mesh = e.target._root;
				mesh.looped = true;

			});

			var foundAnimation = false;
			var foundMorphAnimation = false;
			for (var i = 0; i < mesh.geometry.animations.length; i++) {
				var clip = mesh.geometry.animations[i];
				var action = mesh.mixer.clipAction(clip);
				if (clip.tracks[0].name.indexOf('.morphTargetInfluences') === 0) {
					if (!foundMorphAnimation) {
						action.play();
						foundMorphAnimation = true;
					}
				} else {
					if (!foundAnimation) {
						action.play();
						foundAnimation = true;
					}
				}
			}

			if (foundAnimation) {
				mesh.ikSolver = new THREE.CCDIKSolver(mesh);
				if (mesh.geometry.grants !== undefined) {
					mesh.grantSolver = new THREE.MMDGrantSolver(mesh);
				}
			}
		}
	},

	//tyadd
	TYsetAnimation: function(mesh) {

		if (mesh.geometry.animations !== undefined) {
			mesh.mixer = new THREE.AnimationMixer(mesh);
			// TODO: find a workaround not to access (seems like) private properties
			//       the name of them begins with "_".
			mesh.mixer.addEventListener('loop', function(e) {
				if (e.action._clip.tracks[0].name.indexOf('.bones') !== 0) return;
				var mesh = e.target._root;
				mesh.looped = true;
			});
		}
	},

	//tyadd
	TYsetikSolver: function(mesh) {
		mesh.ikSolver = new THREE.CCDIKSolver(mesh);
		if (mesh.geometry.grants !== undefined) {
			mesh.grantSolver = new THREE.MMDGrantSolver(mesh);
		}
	},

	//tyadd
	TYplayAction: function(mesh, clip, weight) {
		var action = mesh.mixer.clipAction(clip);
		action.setEffectiveWeight(weight);
		action.play();
		return action;
	},

	//tyadd
	/*
	  percent 0~1  duration/alltimes percent 
	*/
	TYgotoAndPlayAction: function(mesh, clip, weight, percent) {
		var action = mesh.mixer.clipAction(clip);
		action.setEffectiveWeight(weight);
		action.time = clip.duration * 0.5 * percent;
		action.play();
		return action;
	},


	TYfadeToAction: function(mesh, toClip, duration, weight, percent) {

		if (this.currentAction == mesh.mixer.clipAction(toClip)) return;

		var toAction = this.TYgotoAndPlayAction(mesh, toClip, weight, percent);

		if (!this.currentAction) {
			this.currentAction = toAction;
			return;
		}

		this.currentAction.crossFadeTo(toAction, duration, false);
		setTimeout(function() {
			_MMDAvatar.currentAction.stop();
			_MMDAvatar.currentAction = toAction;
		}, duration * 1000);

	},


	setCameraAnimation: function(camera) {

		if (camera.animations !== undefined) {

			camera.mixer = new THREE.AnimationMixer(camera);
			camera.mixer.clipAction(camera.animations[0]).play();

		}

	},

	/*
	 * detect the longest duration among model, camera, and audio animations and then
	 * set it to them to sync.
	 * TODO: touching private properties ( ._actions and ._clip ) so consider better way
	 *       to access them for safe and modularity.
	 */
	unifyAnimationDuration: function(params) {

		params = params === undefined ? {} : params;

		var max = 0.0;

		var camera = this.camera;
		var audioManager = this.audioManager;

		// check the longest duration
		for (var i = 0; i < this.meshes.length; i++) {

			var mesh = this.meshes[i];
			var mixer = mesh.mixer;

			if (mixer === null) {

				continue;

			}

			for (var j = 0; j < mixer._actions.length; j++) {

				var action = mixer._actions[j];
				max = Math.max(max, action._clip.duration);

			}

		}

		if (camera !== null && camera.mixer !== null) {

			var mixer = camera.mixer;

			for (var i = 0; i < mixer._actions.length; i++) {

				var action = mixer._actions[i];
				max = Math.max(max, action._clip.duration);

			}

		}

		if (audioManager !== null) {

			max = Math.max(max, audioManager.duration);

		}

		if (params.afterglow !== undefined) {

			max += params.afterglow;

		}

		// set the duration
		for (var i = 0; i < this.meshes.length; i++) {

			var mesh = this.meshes[i];
			var mixer = mesh.mixer;

			if (mixer === null) {

				continue;

			}

			for (var j = 0; j < mixer._actions.length; j++) {

				var action = mixer._actions[j];
				action._clip.duration = max;

			}

		}

		if (camera !== null && camera.mixer !== null) {

			var mixer = camera.mixer;

			for (var i = 0; i < mixer._actions.length; i++) {

				var action = mixer._actions[i];
				action._clip.duration = max;

			}

		}

		if (audioManager !== null) {

			audioManager.duration = max;

		}

	},

	controlAudio: function(delta) {

		if (this.audioManager === null) {

			return;

		}

		this.audioManager.control(delta);

	},

	animate: function(delta) {

		this.controlAudio(delta);

		for (var i = 0; i < this.meshes.length; i++) {

			this.animateOneMesh(delta, this.meshes[i]);

		}

		if (this.sharedPhysics) this.updateSharedPhysics(delta);

		// this.animateCamera(delta);

		if (this.physicsHelper !== undefined && this.physicsHelper.visible) this.physicsHelper.update();
		if (this.ikHelper !== undefined && this.ikHelper.visible) this.ikHelper.update();
	},

	animateOneMesh: function(delta, mesh) {

		var mixer = mesh.mixer;
		var ikSolver = mesh.ikSolver;
		var grantSolver = mesh.grantSolver;
		var physics = mesh.physics;

		if (mixer !== null && this.doAnimation === true) {

			// restore/backupBones are workaround
			// until I make IK, Grant, and Physics Animation plugin
			this.restoreBones(mesh);

			mixer.update(delta);

			this.backupBones(mesh);

		}

		if (ikSolver !== null && this.doIk === true) {

			ikSolver.update();

		}

		if (grantSolver !== null && this.doGrant === true) {

			grantSolver.update();

		}

		if (mesh.looped === true) {

			if (physics !== null) physics.reset();

			mesh.looped = false;

		}

		if (physics !== null && this.doPhysics && !this.sharedPhysics) {

			physics.update(delta);

		}

	},

	updateSharedPhysics: function(delta) {

		if (this.meshes.length === 0 || !this.doPhysics || !this.sharedPhysics) return;

		var physics = this.getMasterPhysics();

		if (physics === null) return;

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var p = this.meshes[i].physics;

			if (p !== null && p !== undefined) {

				p.updateRigidBodies();

			}

		}

		physics.stepSimulation(delta);

		for (var i = 0, il = this.meshes.length; i < il; i++) {

			var p = this.meshes[i].physics;

			if (p !== null && p !== undefined) {

				p.updateBones();

			}

		}

	},

	animateCamera: function(delta) {

		if (this.camera === null) {
			return;
		}

		var mixer = this.camera.mixer;

		if (mixer !== null && this.camera.center !== undefined && this.doCameraAnimation === true) {

			mixer.update(delta);

			// TODO: Let PerspectiveCamera automatically update?
			this.camera.updateProjectionMatrix();

			this.camera.up.set(0, 1, 0);
			this.camera.up.applyQuaternion(this.camera.quaternion);
			this.camera.lookAt(this.camera.center);

		}

	},

	poseAsVpd: function(mesh, vpd, params) {

		if (params === undefined) params = {};

		if (params.preventResetPose !== true) mesh.pose();

		var bones = mesh.skeleton.bones;
		var bones2 = vpd.bones;

		var table = {};

		for (var i = 0; i < bones.length; i++) {

			table[bones[i].name] = i;

		}

		var thV = new THREE.Vector3();
		var thQ = new THREE.Quaternion();

		for (var i = 0; i < bones2.length; i++) {

			var b = bones2[i];
			var index = table[b.name];

			if (index === undefined) continue;

			var b2 = bones[index];
			var t = b.translation;
			var q = b.quaternion;

			thV.set(t[0], t[1], t[2]);
			thQ.set(q[0], q[1], q[2], q[3]);

			b2.position.add(thV);
			b2.quaternion.multiply(thQ);

		}

		mesh.updateMatrixWorld(true);

		if (params.preventIk !== true) {

			var solver = new THREE.CCDIKSolver(mesh);
			solver.update(params.saveOriginalBonesBeforeIK);

		}

		if (params.preventGrant !== true && mesh.geometry.grants !== undefined) {

			var solver = new THREE.MMDGrantSolver(mesh);
			solver.update();

		}

	},

	/*
	 * Note: These following three functions are workaround for r74dev.
	 *       THREE.PropertyMixer.apply() seems to save values into buffer cache
	 *       when mixer.update() is called.
	 *       ikSolver.update() and physics.update() change bone position/quaternion
	 *       without mixer.update() then buffer cache will be inconsistent.
	 *       So trying to avoid buffer cache inconsistency by doing
	 *       backup bones position/quaternion right after mixer.update() call
	 *       and then restore them after rendering.
	 */
	initBackupBones: function(mesh) {

		mesh.skeleton.backupBones = [];

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			mesh.skeleton.backupBones.push(mesh.skeleton.bones[i].clone());

		}

	},

	backupBones: function(mesh) {

		mesh.skeleton.backupBoneIsSaved = true;

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			var b = mesh.skeleton.backupBones[i];
			var b2 = mesh.skeleton.bones[i];
			b.position.copy(b2.position);
			b.quaternion.copy(b2.quaternion);

		}

	},

	restoreBones: function(mesh) {

		if (mesh.skeleton.backupBoneIsSaved !== true) {

			return;

		}

		mesh.skeleton.backupBoneIsSaved = false;

		for (var i = 0; i < mesh.skeleton.bones.length; i++) {

			var b = mesh.skeleton.bones[i];
			var b2 = mesh.skeleton.backupBones[i];
			b.position.copy(b2.position);
			b.quaternion.copy(b2.quaternion);

		}

	}

});
/**
 * @author waterTian
 */
TY.Gui = function(avatar) {

	var mesh = avatar.mesh;
	var gui = new dat.GUI();
	var dictionary = mesh.morphTargetDictionary;
	var controls = {};
	var keys = [];
	var morphs = gui.addFolder('Morphs');


	var phongMaterials;
	var originalMaterials;

	function makePhongMaterials(materials) {
		var array = [];
		for (var i = 0, il = materials.length; i < il; i++) {
			var m = new THREE.MeshPhongMaterial();
			m.copy(materials[i]);
			m.needsUpdate = true;
			array.push(m);
		}
		phongMaterials = new THREE.MultiMaterial(array);

	}

	function initControls() {
		for (var key in dictionary) {
			controls[key] = 0.0;
		}
	};

	function initKeys() {
		for (var key in dictionary) {
			keys.push(key);
		}
	};

	function initMorphs() {
		for (var key in dictionary) {
			morphs.add(controls, key, 0.0, 1.0, 0.01).onChange(onChangeMorph);
		}
	};

	function onChangeMorph() {
		for (var i = 0; i < keys.length; i++) {
			var key = keys[i];
			var value = controls[key];
			mesh.morphTargetInfluences[i] = value;
		}
	};

	function initOther() {
		var api = {
			'animation': true,
			'gradient mapping': true,
			'ik': true,
			'outline': true,
			'physics': true,
			'show IK bones': false,
			'show rigid bodies': false
		};
		gui.add(api, 'animation').onChange(function() {
			avatar.doAnimation = api['animation'];
		});
		gui.add(api, 'gradient mapping').onChange(function() {
			if (originalMaterials === undefined) originalMaterials = mesh.material;
			if (phongMaterials === undefined) makePhongMaterials(mesh.material.materials);
			if (api['gradient mapping']) {
				mesh.material = originalMaterials;
			} else {
				mesh.material = phongMaterials;
			}
		});

		gui.add(api, 'ik').onChange(function() {
			avatar.doIk = api['ik'];
		});

		gui.add(api, 'outline').onChange(function() {
			TY.effect.enabled = api['outline'];
		});

		gui.add(api, 'physics').onChange(function() {
			avatar.enablePhysics(api['physics']);
		});

		gui.add(api, 'show IK bones').onChange(function() {
			avatar.ikHelper.visible = api['show IK bones'];
		});

		gui.add(api, 'show rigid bodies').onChange(function() {
			if (avatar.physicsHelper !== undefined) avatar.physicsHelper.visible = api['show rigid bodies'];
		});
	}


	initControls();
	initKeys();
	initMorphs();
	initOther();

	onChangeMorph();

	morphs.close();
	gui.close();
};


TY.Gui.prototype = Object.assign(TY.EventDispatcher.prototype, {
	constructor: TY.Gui
});
var container, stats;

var mesh, camera, scene, renderer;
var avatar;

var clock = new THREE.Clock();

init();
animate();


function init() {
	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);
	camera.position.z = 25;

	// scene
	scene = new THREE.Scene();

	// ground Grid
	var gridHelper = new THREE.PolarGridHelper(30, 10);
	gridHelper.position.y = -10;
	scene.add(gridHelper);


	// Lights
	var ambient = new THREE.AmbientLight(0x333333);
	scene.add(ambient);
	var directionalLight = new THREE.DirectionalLight(0x888888);
	directionalLight.position.set(-1, 1, 1).normalize();
	scene.add(directionalLight);

	//
	renderer = new THREE.WebGLRenderer({
		antialias: true
	});
	renderer.setPixelRatio(window.devicePixelRatio);
	renderer.setSize(window.innerWidth, window.innerHeight);
	renderer.setClearColor(new THREE.Color(0xffffff));
	container.appendChild(renderer.domElement);

	// effect
	TY.effect = new THREE.OutlineEffect(renderer);

	// controls, camera
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target.set(0, 0, 0);
	camera.position.set(2, 18, 28);
	controls.update();

	// STATS
	stats = new Stats();
	container.appendChild(stats.dom);


	//Btns
	var options = document.createElement('div');
	options.style.position = 'absolute';
	options.style.top = '30px';
	options.style.width = '100%';
	options.style.textAlign = 'center';
	options.innerHTML = 'Action:<input type="button" onclick="action1();" value="action1" />\
	    <input type="button" onclick="action2();" value="action2" />\
		<input type="button" onclick="action3();" value="action3" />';
	container.appendChild(options);


	// model
	var onProgress = function(xhr) {
		if (xhr.lengthComputable) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log(Math.round(percentComplete, 2) + '% downloaded');
		}
	};

	var onError = function(xhr) {};

	var modelFile = 'models/1/1.pmx';
	// var modelFile = 'models/pmd/p9.pmd';
	// var modelFile = 'models/mmd/miku/miku_v2.pmd';
	// var modelFile = 'models/default/miku_m.pmd';
	// var modelFile = 'models/default/miku.pmd';
	// var modelFile = 'models/default/neru.pmd';
	// var modelFile = 'models/default/rin.pmd';
	// var modelFile = 'models/default/rin_act2.pmd';
	// var modelFile = 'models/default/ren.pmd';
	// var modelFile = 'models/default/meiko_sakine.pmd';
	// var modelFile = 'models/default/MEIKO.pmd';
	// var modelFile = 'models/default/haku.pmd';
	// var modelFile = 'models/low_miku/miku.pmd';

	// var motionFile = 'motion/nof_motion/nof_haku.vmd';
	var motionFile = 'motion/wavefile_v2.vmd';
	// var motionFile = 'motion/smile.vmd';
	// var motionFile = 'motion/kishimen.vmd';
	// var motionFile = 'motion/wavefile_full_miku_v2.vmd';

	var vmdFiles = ['motion/nof_motion/nof_haku.vmd', 'motion/kishimen.vmd', 'motion/wavefile_full_miku_v2.vmd'];



	avatar = new TY.MMDAvatar(scene);
	var loader = new THREE.MMDLoader();

	loader.loadModel(modelFile, function(object) {

		avatar.add(object);
		mesh = avatar.mesh;
		mesh.position.y = -10;

		avatar.initIk();
		avatar.initPhysic();

		TY.Gui(avatar);
		loadMotions();

	}, onProgress, onError);

	function loadMotions() {
		loader.loadVmds(vmdFiles, function(arr) {
			var vmds = arr;
			for (var i = 0; i < vmds.length; i++) {
				loader.pourVmdIntoModel(mesh, vmds[i]);
			}

			//TYadd
			avatar.TYsetAnimation(mesh);
			avatar.TYsetikSolver(mesh);

			initMorphControl();


			console.log(mesh);
			console.log(avatar);
		}, onProgress, onError);
	}


	function initMorphControl() {
		configMorphDate();
		updateMorph();
	}

	var newKeys = [];

	function configMorphDate() {
		for (var key in mesh.morphTargetDictionary) {
			for (var i = 0; i <= TY.morphConifg.length; i++) {
				if (key == TY.morphConifg[i]) {
					newKeys.push(i);
				}
			}
		}
		console.log(newKeys);
	}

	function configControlDate(arr) {
		if (arr.length == newKeys.length) {
			console.log("configControlDate Return")
			return arr;
		}
		var newControlArr = [];
		for (var i = 0; i < arr.length; i++) {
			for (var j = 0; j < newKeys.length; j++) {
				if (i == newKeys[j]) {
					newControlArr.push(arr[i]);
				}
			}
		}
		return newControlArr;
	}


	var _morphNum = 0;

	function updateMorph() {
		if (_morphNum >= TY.data.length) _morphNum = 0;

		setTimeout(updateMorph, 1000);
		setMorph(TY.data[_morphNum]);
		_morphNum++;
	}


	var cunData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
	var cunObj = TY.toObject(cunData);

	function setMorph(arr) {
		var _arr = configControlDate(arr);
		var toObj = TY.toObject(_arr);
		var tween = new TWEEN.Tween(cunObj)
			.to(toObj, 200)
			.start()
			.onUpdate(function() {
				for (var i = 0; i < _arr.length; i++) {
					mesh.morphTargetInfluences[i] = this[i];
				}
			});
	}


	function logMorphString() {
		var logString = "";
		var logNum = 0;
		for (var key in mesh.morphTargetDictionary) {
			logString += logNum + ":" + key + "  ";
			logNum++;
		}
		console.log(logString);
	}
	//
	window.addEventListener('resize', onWindowResize, false);
}


function action1() {
	avatar.TYfadeToAction(mesh,mesh.geometry.animations[0], 0.5, 1, 0.5);
}

function action2() {
	avatar.TYfadeToAction(mesh,mesh.geometry.animations[1], 0.5, 1, 0.15);
}

function action3() {
	avatar.TYfadeToAction(mesh,mesh.geometry.animations[2], 1, 1, 0.4);
}



function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	TY.effect.setSize(window.innerWidth, window.innerHeight);
}

//

function animate(time) {
	requestAnimationFrame(animate);
	render();
	TWEEN.update(time);
	if (stats) stats.update();
}

function render() {
	if (avatar !== undefined) avatar.animate(clock.getDelta());
	TY.effect.render(scene, camera);
}