var os = require('os');
var OSinfo = require('./modules/OSinfo');

process.stdin.setEncoding('utf-8');
process.stdin.on('readable', function() {
	var input = process.stdin.read();
	if (!input) {
		return;
	};

	var instruction = input.trim();
	switch(instruction) {
		case '/exit':
			process.stdout.write('Quitting app!\n');
			process.exit();
		break;
		case '/sayhello':
			process.stdout.write('hello!\n');
		break;
		case '/getOSinfo':
			OSinfo.print(); 
		break;
		case '/toTime':
			toTime.print();
		break;
		default:
			process.stderr.write('Wrong instruction!\n');
		};
});