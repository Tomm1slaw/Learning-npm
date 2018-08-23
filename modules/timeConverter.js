'use strict';

function converter(uptime){
	var min = Math.floor(uptime/60);
	var sec = Math.floor(uptime%60);
	var hour = Math.floor(min/60);
	var minLeft = (min%60);

	if (min < 60) {
    var  time =  min + 'min and ' + sec + 'sec.';
    } else if (min >= 60) {
    var  time =  hour + 'h and ' + minLeft + 'min and ' + sec + 'sec.';
    }
    return time;
}

exports.convert = converter;