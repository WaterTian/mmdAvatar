var container, stats;

var loading;

var mesh, camera, scene, renderer;
var sky;
var avatar;

var player;

var clock = new THREE.Clock();

init();
animate();


function loadComplete_initBtns() {
	loading.style.display = "none";

	//log
	logBox = document.createElement('div');
	logBox.style.position = 'absolute';
	logBox.style.top = '80px';
	logBox.style.left = '5px';
	logBox.style.width = '100%';
	logBox.style.textAlign = 'left';
	logBox.style.fontSize = '10px';
	logBox.style.color = "#fafccb";
	logBox.innerHTML = '一指旋转<br>二指缩进<br>三指移动<br>';
	container.appendChild(logBox);
	TY.logBox = logBox;


	// STATS
	stats = new Stats();
	container.appendChild(stats.dom);



	//Btns
	var options = document.createElement('div');
	options.style.position = 'absolute';
	options.style.top = '20px';
	options.style.width = '98%';
	options.style.textAlign = 'right';
	options.innerHTML = '<input type="button" onclick="toPlay();" value="Play" />\
	                     <input type="button" onclick="addOutlineEffect();" value="OutlineEffect" />\
	                     <input type="button" onclick="addPhysics();" value="Physics" />';
	container.appendChild(options);

	// initPlayer();
}

function init() {
	container = document.createElement('div');
	document.body.appendChild(container);

	camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 1, 2000);

	// scene
	scene = new THREE.Scene();


	//light
	var ambient = new THREE.AmbientLight(0x666666);
	scene.add(ambient);
	var directionalLight = new THREE.DirectionalLight(0x887766);
	directionalLight.position.set(-1, 1, 1).normalize();
	scene.add(directionalLight);

	//sky
	var skyM = new THREE.MeshPhongMaterial({
		color: 0xcbb7ff,
		emissive: 0x73092f,
		side: THREE.BackSide
	});
	sky = new THREE.Mesh(new THREE.SphereGeometry(100, 3, 3), skyM);
	scene.add(sky);

	// ground Grid
	var gridHelper = new THREE.PolarGridHelper(20, 5, 14, 5, 0xfafccb, 0xfccc00);
	gridHelper.position.y = -10;
	scene.add(gridHelper);


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
	TY.effect.enabled = false;



	// controls, camera
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	// controls = new THREE.TyOrbitControls(camera, renderer.domElement);
	controls.target.set(0, 3, 0);
	camera.position.set(0, 10, 30);
	controls.update();


	//Loading
	loading = document.createElement('div');
	loading.style.position = 'absolute';
	loading.style.top = '200px';
	loading.style.width = '100%';
	loading.style.textAlign = 'center';
	loading.style.fontSize = '20px';
	loading.style.color = "#fafccb";
	loading.innerHTML = 'Loading..';
	container.appendChild(loading);

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

	var modelFile = 'models/H5shuchu/nande.pmx';
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

	// var vmdFiles = ['models/H5shuchu/QingguangA.vmd', 'motion/kishimen.vmd', 'motion/wavefile_full_miku_v2.vmd'];
	// var vmdFiles = ['models/H5shuchu/01.vmd', 'models/H5shuchu/02.vmd', 'models/H5shuchu/03.vmd', 'models/H5shuchu/04.vmd', 'models/H5shuchu/05.vmd', 'models/H5shuchu/06.vmd', 'models/H5shuchu/07.vmd', 'models/H5shuchu/08.vmd', 'models/H5shuchu/09.vmd', 'models/H5shuchu/10.vmd', 'models/H5shuchu/11.vmd'];
	var vmdFiles = ['models/H5shuchu/01.vmd', 'models/H5shuchu/02.vmd', 'models/H5shuchu/03.vmd', 'models/H5shuchu/04.vmd', 'models/H5shuchu/05.vmd', 'models/H5shuchu/06.vmd', 'models/H5shuchu/07.vmd'];
	// var vmdFiles = ['models/H5shuchu/01.vmd'];



	avatar = new TY.MMDAvatar(scene);
	var loader = new THREE.MMDLoader();

	loader.loadModel(modelFile, function(object) {

		avatar.add(object);
		mesh = avatar.mesh;
		mesh.position.y = -10;


		avatar.initIk();
		avatar.initPhysic();
		avatar.enablePhysics(false);

		// TY.Gui(avatar);

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

			loadComplete_initBtns();

		}, onProgress, onError);
	}


	function initMorphControl() {
		configMorphDate();
		updateMorph();

		logMorphString();
	}


	/////////////////////////////////////////
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
		if (_morphNum >= TY.datas.length) _morphNum = 0;
		setTimeout(updateMorph, 1000);
		setMorph(TY.datas[_morphNum]);
		setMorphOther(TY.datas[_morphNum]);
		_morphNum++;
	}

	// function updateMorph() {
	// 	setTimeout(updateMorph, 100);
	// 	setMorph(TY.data);
	//  setMorphOther(TY.datas[TY.data]);
	// }



	var cunObj = {};
	for (var i = 0; i < TY.morphConifg.length; ++i)
		cunObj[i] = 0;

	function setMorph(obj) {
		// console.log(obj);
		var toObj = {};
		for (var i = 0; i < TY.morphConifg.length; i++) {
			if (obj[i]) {
				toObj[i] = obj[i]
			} else {
				toObj[i] = 0;
			}
		}
		var tween = new TWEEN.Tween(cunObj)
			.to(toObj, 300)
			.start()
			.onUpdate(function() {
				for (var i = 0; i < TY.morphConifg.length; i++) {
					if (this[i] != 0) mesh.morphTargetInfluences[i] = this[i] * 0.01;
				}
			});
	}

	var cunOtherData = [100, 100, 100];
	var cunOtherObj = TY.toObject(cunOtherData);

	function setMorphOther(obj) {
		var toObj = {};
		for (var i = 0; i < cunOtherData.length; i++) {
			var _i = TY.morphConifg.length + i;
			if (obj[_i]) {
				toObj[i] = obj[_i]
			} else {
				toObj[i] = 100;
			}
		}
		var tween = new TWEEN.Tween(cunOtherObj)
			.to(toObj, 300)
			.start()
			.onUpdate(function() {
				for (var i = 0; i < cunOtherData.length; i++) {
					if (i < mesh.geometry.animations.length) {
						avatar.TYgotoAndStopAction(mesh, mesh.geometry.animations[i], 1, this[i]);
					}
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



function initPlayer() {

	var head = document.getElementsByTagName("head")[0],
		script = document.createElement("script");
	if (isMobileDevice())
		script.src = "./libs/7.7.4/provider.html5.js";
	else script.src = "./libs/7.7.4/provider.caterpillar.js";
	head.appendChild(script);


	var playerDiv = document.createElement('div');
	document.body.appendChild(playerDiv);


	player = jwplayer(playerDiv);
	player.setup({
		// file: 'assets/index.m3u8',
		file: 'http://101.201.107.35:9380/913.m3u8',
		hlshtml: true,
		// autostart: true,
		height: 100,
		width: 300
	});

	player.on('ready', function() {
		TY.logBox.innerHTML += "ready<br>";
	});

	player.on('meta', function(event) {
		var _data = event.metadata['PRIV'];
		var _key = Object.keys(_data)[0];
		var _str = TY.base64decode(_key);

		var _Arr = TY.toUnicodeArr(_str);
		var _Obj = TY.toUnicodeObj(_str);

		TY.data = _Obj;
		TY.logBox.innerHTML = TY.data + "<br>";
	});

	console.log("initPlayer");
}

function toPlay() {
	player.play();

	TY.logBox.innerHTML += "play<br>";
}


function addOutlineEffect() {
	TY.effect.enabled = !TY.effect.enabled;
	TY.logBox.innerHTML += "Outline-" + TY.effect.enabled + "<br>";
}

function addPhysics() {
	if (avatar.doPhysics) avatar.enablePhysics(false);
	else avatar.enablePhysics(true);
	TY.logBox.innerHTML += "Physics-" + avatar.doPhysics + "<br>";
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

	// if (avatar.currentAction) console.log(avatar.currentAction.time);
}

function render() {
	if (avatar !== undefined) avatar.animate(clock.getDelta());
	TY.effect.render(scene, camera);
}