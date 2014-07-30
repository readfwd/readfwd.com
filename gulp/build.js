'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;
var $ = config.plugins;

gulp.task('clean', function () {
  return gulp.src(paths.tmp, {read: true})
    .pipe($.rimraf());
});

gulp.task('build', ['index.html', 'js', 'css']);

gulp.task('html', function () {
  return gulp.src(paths.app + '/*.html')
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('index.html', function () {
  return gulp.src(paths.app + '/index.jade')
    .pipe($.jade({
      pretty: true
    }))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('jade', function () {
  return gulp.src(paths.app + '/*.html')
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('js', function () {
  return gulp.src(paths.app + '/js/main.js')
    .pipe($.browserify())
    .pipe(gulp.dest(paths.tmp + '/js'));
});

gulp.task('css', function () {
  // FIXME
  return gulp.src('mama');
});

