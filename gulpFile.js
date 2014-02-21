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
var livereload = require('gulp-livereload');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('watch', function() {
	gulp.src('public/css/style.scss')
		.pipe(watch())
		.pipe(sass({
			unixNewlines: true,
			style: 'expanded',
			noCache: true,
		}))
		.pipe(gulp.dest('.'))
		.pipe(livereload());
});

gulp.task('sass', function() {
	gulp.src('public/css/style.scss')
		.pipe(sass({
			unixNewlines: true,
			style: 'expanded',
			noCache: true,
		}))
		.pipe(gulp.dest('.'));
});

gulp.task('default', ['sass']);