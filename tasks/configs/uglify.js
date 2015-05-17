'use strict';

module.exports = {
	dist: {
		files: {
			'public/js/main.js': [
				'assets/libs/jquery/dist/jquery.min.js',
				'assets/js/main.js'
			],
			'public/js/resume.js': [
				'assets/js/views/resume.js'
			],
			'public/js/prefixer.js': [
				'assets/js/autoprefixer/autoprefixer.js',
				'assets/js/tools/prefixer.js'
			],
			'public/js/prettify.js': [
				'libs/js-beautify/js/lib/beautify.js',
				'libs/js-beautify/js/lib/beautify-css.js',
				'libs/js-beautify/js/lib/beautify-html.js',
				'assets/js/tools/prettify.js'
			],
			'public/js/base64.js': [
				'assets/js/tools/base64.js'
			],
			'public/js/url.js': [
				'assets/js/tools/url.js'
			]
		}
	}
};
