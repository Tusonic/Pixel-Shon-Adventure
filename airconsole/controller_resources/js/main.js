/* TUSONIC.PL - AirConsole*/

var airConsole = null;
var downEvent;
var upEvent;

$(document).ready(function() {
	airConsole = new AirConsole({"orientation": "landscape"});
	
	downEvent = isMobile() ? 'touchstart' : 'mousedown';
	upEvent = isMobile() ? 'touchend' : 'mouseup';

	var sendHandshake = function() {
		airConsole.message(AirConsole.SCREEN, {
			handshake: true
		});
	};
	
	var sendMessage = function(string) {
		airConsole.message(AirConsole.SCREEN, {
			message: string
		});	
	}

	airConsole.onReady = function() {
		sendHandshake();
	};

	airConsole.onMessage = function(deviceId, data) {
	};
	
	$('#l').on(downEvent, function (event) {
		sendMessage("l");
	});
	
	$('#l').on(upEvent, function (event) {
		sendMessage("stop");
	});
	
	$('#r').on(downEvent, function (event) {
		sendMessage("r");
	});
	
	$('#r').on(upEvent, function (event) {
		sendMessage("stop");
	});
	
	$('#a').on(downEvent, function (event) {
		sendMessage("a");
	});
	
	$('#b').on(downEvent, function (event) {
		sendMessage("b");
	});
	
	$('#b').on(upEvent, function (event) {
		sendMessage("stop");
	});
});

/**
* Returns true if device is a mobile device
* @return {Boolean}
*/
function isMobile() {
	if (navigator.userAgent.match(/Android/i) ||
		navigator.userAgent.match(/webOS/i) ||
		navigator.userAgent.match(/iPhone/i) ||
		navigator.userAgent.match(/iPad/i) ||
		navigator.userAgent.match(/iPod/i) ||
		navigator.userAgent.match(/BlackBerry/i) ||
		navigator.userAgent.match(/Windows Phone/i) ||
		navigator.userAgent.match(/WPDesktop/i) ||
		navigator.userAgent.match(/Opera Mini/i) ||
		navigator.userAgent.match(/IEMobile/i)) {
		return true;
	}
	else {
		return false;
	}
}