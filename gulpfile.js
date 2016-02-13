'use strict';
 
var gulp 	  	  = require('gulp');
var sass 	  	  = require('gulp-sass');
var webserver 	= require('gulp-webserver');
var bowerFiles  = require('main-bower-files');
var inject      = require('gulp-inject');

// js main files from bower
gulp.task('inject-bower-js', function(){
  gulp.src('index.html')
    .pipe(inject(gulp.src(bowerFiles(), {read: false}), {name: 'bower'}))
    .pipe(gulp.dest('./'))
})
 



gulp.task('sass', function () {
  gulp.src('style/sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('style/css'));
});
 
gulp.task('sass:watch', function () {
  gulp.watch('style/sass/*.scss', ['sass']);
});

gulp.task('webserver', function() {
  gulp.src('./')
    .pipe(webserver({
      livereload: true,
      directoryListing: false,
      open: true
    }));
});

gulp.task('default',['webserver','sass','sass:watch'])