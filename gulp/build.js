'use strict';

var gulp = require('gulp');
var browserify = require('gulp-browserify');

gulp.task('build', ['html', 'js', 'css'], function () {
  console.log('build task');
});

gulp.task('html', function () {
  gulp.src('./app/*.html')
    .pipe(gulp.dest('./dist'));
});

gulp.task('js', function () {
  gulp.src('./app/js/main.js')
    .pipe(browserify())
    .pipe(gulp.dest('./dist/js'));
});

gulp.task('css', function () {
});

