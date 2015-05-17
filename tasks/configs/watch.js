'use strict';

module.exports = {
	'assets': {
		'options': {
			'debounceDelay': 250,
			'livereload': true,
			'livereloadOnError': false
		},
		'files': [
			'assets/scss/**/*.scss',
			'assets/js/**/*.js',
			'config.json',
			'generate.js'
		],
		'tasks': [
			'build'
		]
	},
	'config': {
		'options': {
			'reload': true
		},
		'files': [
			'tasks/configs/*.js',
			'Gruntfile.js'
		]
	}
};
