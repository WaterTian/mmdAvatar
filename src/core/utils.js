
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
