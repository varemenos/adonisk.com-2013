module.exports = function (grunt) {
	'use strict';

	require('jit-grunt')(grunt);

	var tasks = require('load-grunt-configs')(grunt, {
		config: {
			src: './tasks/configs/*.js'
		}
	});

	grunt.initConfig(tasks);

	grunt.registerTask('build', [
		'shell',
		'sass',
		'autoprefixer',
		'uglify'
	]);
	grunt.registerTask('default', ['watch']);
};
