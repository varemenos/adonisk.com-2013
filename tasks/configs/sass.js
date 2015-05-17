'use strict';

module.exports = {
	dist: {
		options: {
			style: 'compressed',
			sourcemap: 'none'
		},
		files: {
			'public/css/style.css': 'assets/scss/style.scss'
		}
	}
};
