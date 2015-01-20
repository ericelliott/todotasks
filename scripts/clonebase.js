'use strict';

var fs = require('fs');
var path = require('path');
var copy = require('directory-copy');
var askFor = require('ask-for');
var chalk = require('chalk');

var implName = process.argv[2];


function copyBase(name) {
	var src = path.normalize(path.join(__dirname, '/../implementations/base'));
	var dest = path.normalize(path.join(__dirname, '/../implementations/', name));

	console.log('Copying from ' + chalk.blue(src));
	if (fs.existsSync(dest)) {
		console.error(chalk.red('Error: directory already exists: ') + dest);
		console.error('Please choose another name.');
		return;
	}

	copy({
		src: src,
		dest: dest
	}, function () {
		console.log(chalk.green('Created new implementation at ' + dest));
	});
}


if (!implName) {
	askFor(['Implementation Name'], function (answers) {
		copyBase(answers['Implementation Name']);
	});
} else {
	copyBase(implName);
}
