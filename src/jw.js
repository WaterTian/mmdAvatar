var head = document.getElementsByTagName("head")[0],
	script = document.createElement("script");
if (isMobileDevice())
	script.src = "./libs/7.7.4/provider.html5.js";
else script.src = "./libs/7.7.4/provider.caterpillar.js";
head.appendChild(script);


var playerDiv = document.createElement('div');
playerDiv.style.position = 'absolute';
playerDiv.style.top = '90px';
playerDiv.style.width = '100%';

document.body.appendChild(playerDiv);

var player = jwplayer(playerDiv);
player.setup({
	// file: 'assets/index.m3u8',
	file: 'http://101.201.107.35:9380/123.m3u8',
	hlshtml: true,
	autostart: true,
	height: 30,
	width: 300
});

player.on('ready', function() {
	console.log("JWready");
	player.play();
});


player.on('meta', function(event) {
	var data=event.metadata["PRIV"]["com.appMagics"];
	var _d="["+data+"]";
	var arr = eval(_d); 

	// TY.data[1]=arr;
	updateMorph();


	addLog(arr);
});

function addLog(data) {
	console.log(data);
	// TY.logBox.innerHTML += JSON.stringify(data) + "<br>";
}