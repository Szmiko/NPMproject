var os = require('os');
var colors = require('colors');

function getOSinfo() {
	var type = os.type();
	if (type === 'Darwin') {
		type = 'OSX';
	} else if (type === 'Windows_NT') {
		type = 'Windows';
	};
	var release = os.release();
	var cpu = os.cpus()[0].model;
	var upTime = os.uptime();
	var userInfo = os.userInfo();
	console.log('System: '.red, type);
	console.log('Release: ' .yellow, release);
	console.log('CPU model: ' .white, cpu);
	console.log('System work time: ~' .grey, (upTime / 60).toFixed(0), 'min');
	console.log(colors.trap ('User name: '), userInfo.username);
	console.log(colors.rainbow ('Home dir: '), userInfo.homedir);
};

exports.print = getOSinfo;