/**
 * @author waterTian
 */
TY.Jw = function(fileURL) {
	var scope = this;

	var head = document.getElementsByTagName("head")[0],
		script = document.createElement("script");
	if (TY.isMobileDevice()) {
		script.src = "./libs/7.7.4/provider.html5.js";
	} else {
		script.src = "./libs/7.7.4/provider.caterpillar.js";
	}
	head.appendChild(script);

	var playerDiv = document.createElement('div');
	document.body.appendChild(playerDiv);


	this.player = jwplayer(playerDiv);
	this.player.setup({
		file: fileURL,
		hlshtml: true,
		// autostart: true,
		height: 100,
		width: 300
	});

	this.player.on('ready', function() {
		TY.logBox.innerHTML += "ready<br>";
	});

	this.player.on('meta', function(event) {
		var _data = event.metadata['PRIV'];
		var _key = Object.keys(_data)[0];
		var _str = TY.base64decode(_key);

		var _Arr = TY.toUnicodeArr(_str);
		var _Obj = TY.toUnicodeObj(_str);

		TY.data = _Obj;
	});
};



TY.Jw.prototype = Object.assign(TY.EventDispatcher.prototype, {

	constructor: TY.Jw,

	play: function() {
		this.player.play();
	}


});