'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;
var $ = config.plugins;

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var istanbul = require('browserify-istanbul');

gulp.task('clean', function () {
  return gulp.src(paths.tmp, { read: false })
    .pipe($.rimraf());
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
  var bundleStream = browserify(paths.app + '/js/main.js')
    .transform(istanbul)
    .bundle();

  return bundleStream
    .pipe(source(paths.app + '/js/main.js'))
    .pipe($.rename('main.js'))
    .pipe(gulp.dest(paths.tmp + '/js/'));
});

gulp.task('css', function () {
  // FIXME
  return gulp.src('mama');
});

gulp.task('build', ['index.html', 'js', 'css']);

gulp.task('build:prod', ['build'], function () {
  gulp.src(paths.tmp + '/**/*')
    .pipe(gulp.dest(paths.dist));
});

