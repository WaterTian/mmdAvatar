var head = document.getElementsByTagName("head")[0],
	script = document.createElement("script");
if (isMobileDevice())
	script.src = "./libs/7.7.4/provider.html5.js";
else script.src = "./libs/7.7.4/provider.caterpillar.js";
head.appendChild(script);


var playerDiv = document.createElement('div');
document.body.appendChild(playerDiv);

//playerBtn
var options = document.createElement('div');
options.style.position = 'absolute';
options.style.top = '100px';
options.style.width = '100%';
options.style.textAlign = 'center';
options.innerHTML = '<input type="button" onclick="toplay();" value="play" />';
container.appendChild(options);



var player = jwplayer(playerDiv);
player.setup({
	file: 'assets/index.m3u8',
	// file: 'http://101.201.107.35:9380/799.m3u8',
	hlshtml: true,
	// autostart: true,
	height: 100,
	width: 300
});


function toplay()
{
	addLog("toplay");
	player.play();
}

player.on('ready', function() {
	addLog("JWready ready");
});


player.on('meta', function(event) {
	// var data=event.metadata["PRIV"]["com.appMagics"];
	// var _d="["+data+"]";
	// var arr = eval(_d); 

	addLog(event.metadata);

	// TY.data=arr;
	
});

function addLog(data) {
	console.log(data);
	TY.logBox.innerHTML += JSON.stringify(data) + "<br>";
}