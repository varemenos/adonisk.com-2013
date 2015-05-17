'use strict';

module.exports = {
	options: {
		map: false,
		browsers: [
			'last 2 versions',
			'ff >= 4',
			'Chrome >= 5',
			'Safari >= 5.1',
			'ie >= 9',
			'> 0.5%'
		]
	},
	dist: {
		files: {
			'public/css/style.css': 'public/css/style.css'
		}
	}
};
