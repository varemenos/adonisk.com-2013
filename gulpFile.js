var gulp = require('gulp');
var jscs = require('gulp-jscs');
var sass = require('gulp-ruby-sass');
var minifyCss = require('gulp-minify-css');
var lintspaces = require('gulp-lintspaces');
var autoprefixer = require('gulp-autoprefixer');

var dir = {
	css: 'public/css/',
	js: 'public/js/',
	img: 'public/img/',
	fonts: 'public/fonts/'
};

gulp.task('watch', function () {
	gulp.watch(dir.css + 'style.scss', ['sass']);
});

gulp.task('sass', function () {
	gulp.src(dir.css + 'style.scss')
		.pipe(sass({
			unixNewlines: true,
			noCache: true
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifyCss())
		.pipe(gulp.dest(dir.css));
});

gulp.task('jscs', function () {
	gulp.src([
				'*.js',
				dir.js + '*.js',
				dir.js + 'tools/**/*.js',
				dir.js + 'views/**/*.js'
		])
		.pipe(jscs());
});

gulp.task('lintspaces', function () {
	gulp.src([
				'*.js',
				dir.js + '*.js',
				dir.js + 'tools/**/*.js',
				dir.js + 'views/**/*.js'
		])
		.pipe(lintspaces({
			editorconfig: '.editorconfig'
		}))
		.pipe(lintspaces.reporter());
});

gulp.task('test', ['jscs', 'lintspaces']);
gulp.task('default', ['watch']);
