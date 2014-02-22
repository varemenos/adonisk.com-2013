var gulp = require('gulp');
var git = require('gulp-git');
var bump = require('gulp-bump');
var size = require('gulp-size');
var exec = require('gulp-exec');
var clean = require('gulp-clean');
var watch = require('gulp-watch');
var w3cjs = require('gulp-w3cjs');
var uncss = require('gulp-uncss');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var jshint = require('gulp-jshint');
var marked = require('gulp-marked');
var notify = require('gulp-notify');
var sass = require('gulp-ruby-sass');
var nodemon = require('gulp-nodemon');
var symlink = require('gulp-symlink');
var htmlmin = require('gulp-htmlmin');
var filesize = require('gulp-filesize');
var minifyCss = require('gulp-minify-css');
var autoprefixer = require('gulp-autoprefixer');

var dir = {
	css: 'public/css/',
	js: 'public/js/',
	img: 'public/img/',
	fonts: 'public/fonts/',
};

gulp.task('watch', function() {
	gulp.watch(dir.css + 'style.scss', ['sass']);
});

gulp.task('sass', function() {
	gulp.src(dir.css + 'style.scss')
		.pipe(sass({
			unixNewlines: true,
			noCache: true,
		}))
		.pipe(autoprefixer('last 2 version', 'safari 5', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
		.pipe(minifyCss())
		.pipe(gulp.dest(dir.css));
});


gulp.task('default', ['watch']);