var container, stats;

var mesh, camera, scene, renderer, effect;
var helper, ikHelper, physicsHelper;

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
	effect = new THREE.OutlineEffect(renderer);

	// controls, camera
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target.set(0, 0, 0);
	camera.position.set(2, 18, 28);
	controls.update();

	// STATS
	stats = new Stats();
	container.appendChild(stats.dom);

	// model
	var onProgress = function(xhr) {
		if (xhr.lengthComputable) {
			var percentComplete = xhr.loaded / xhr.total * 100;
			console.log(Math.round(percentComplete, 2) + '% downloaded');
		}
	};

	var onError = function(xhr) {};

	var modelFile = 'models/pmd/p9.pmd';
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

	var vmdFiles = ['motion/nof_motion/nof_haku.vmd'];

	helper = new THREE.MMDHelper();
	var loader = new THREE.MMDLoader();

	loader.loadModel( modelFile, function ( object ) {
		mesh = object;
		mesh.position.y = -10;
		scene.add(mesh);

		helper.add( mesh );

		initGui();
		loadMotion();
	}, onProgress, onError);

	function loadMotion()
	{
		loader.loadVmd( motionFile, function ( object ) {
			var vmd = object;
			loader.pourVmdIntoModel(mesh,vmd);

			//TYadd
			helper.TYsetAnimation(mesh);
			helper.TYsetikSolver(mesh);

			helper.TYplayAction(mesh,mesh.geometry.animations[0],1);

			console.log(mesh);
			console.log(helper);

			/*
			 * Note: create CCDIKHelper after calling helper.setAnimation()
			 */
			ikHelper = new THREE.CCDIKHelper(mesh);
			ikHelper.visible = false;
			scene.add(ikHelper);
			/*
			 * Note: You're recommended to call helper.setPhysics()
			 *       after calling helper.setAnimation().
			 */
			helper.setPhysics(mesh);
			physicsHelper = new THREE.MMDPhysicsHelper(mesh);
			physicsHelper.visible = false;
			scene.add(physicsHelper);

			initMorphControl();

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

		setTimeout(updateMorph, 500);
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

	function initGui() {
		var gui = new dat.GUI();
		var dictionary = mesh.morphTargetDictionary;
		var controls = {};
		var keys = [];
		var morphs = gui.addFolder('Morphs');

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
				helper.doAnimation = api['animation'];
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
				helper.doIk = api['ik'];
			});

			gui.add(api, 'outline').onChange(function() {
				effect.enabled = api['outline'];
			});

			gui.add(api, 'physics').onChange(function() {
				helper.enablePhysics(api['physics']);
			});

			gui.add(api, 'show IK bones').onChange(function() {
				ikHelper.visible = api['show IK bones'];
			});

			gui.add(api, 'show rigid bodies').onChange(function() {
				if (physicsHelper !== undefined) physicsHelper.visible = api['show rigid bodies'];
			});
		}


		initControls();
		initKeys();
		initMorphs();
		initOther();

		onChangeMorph();

		morphs.close();
	}
}

function onWindowResize() {
	windowHalfX = window.innerWidth / 2;
	windowHalfY = window.innerHeight / 2;

	camera.aspect = window.innerWidth / window.innerHeight;
	camera.updateProjectionMatrix();

	effect.setSize(window.innerWidth, window.innerHeight);
}

//

function animate(time) {
	requestAnimationFrame(animate);
	render();
	TWEEN.update(time);
	if (stats) stats.update();
}

function render() {
	helper.animate(clock.getDelta());
	if (physicsHelper !== undefined && physicsHelper.visible) physicsHelper.update();
	if (ikHelper !== undefined && ikHelper.visible) ikHelper.update();
	effect.render(scene, camera);
}