'use strict';

module.exports = {
	dist: {
		option: {
			optimizationLevel: 3
		},
		expand: true,
		cwd: 'assets/img',
		src: ['**/*.{png,jpg,gif}'],
		dest: 'public/img'
	}
};
