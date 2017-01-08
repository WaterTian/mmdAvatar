var container, stats;

var loading;

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


	//log
	logBox = document.createElement('div');
	logBox.style.position = 'absolute';
	logBox.style.top = '90px';
	logBox.style.width = '100%';
	logBox.style.textAlign = 'left';
	logBox.innerHTML = '...';
	container.appendChild(logBox);
	TY.logBox=logBox;



	// controls, camera
	// controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls = new THREE.TyOrbitControls(camera, renderer.domElement);
	controls.target.set(0, 0, 0);
	controls.update();


	//Loading
	loading = document.createElement('div');
	loading.style.position = 'absolute';
	loading.style.top = '60px';
	loading.style.width = '100%';
	loading.style.textAlign = 'center';
	loading.innerHTML = 'Loading..';
	container.appendChild(loading);



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
			var pr = "loading " + Math.round(percentComplete, 2);
			console.log(pr);
			loading.innerHTML = pr;
		}
	};

	var onError = function(xhr) {};

	// var modelFile = 'models/1/1.pmx';
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
	var modelFile = 'models/low_miku/miku.pmd';

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
		// loadMotions();

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

			loading.style.display="none";
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