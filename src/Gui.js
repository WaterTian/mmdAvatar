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