'use strict';

// Usually production environments don't have GUIs
/* global process */
var isDevelopment = process.env.DISPLAY;

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;
var $ = config.plugins;

var source = require('vinyl-source-stream');
var browserify = require('browserify');
var istanbul = require('browserify-istanbul');
var templatizer = require('templatizer');

gulp.task('clean', function () {
  return gulp.src(paths.tmp, { read: false })
    .pipe($.rimraf());
});

gulp.task('build', ['index.html', 'js', 'css']);

gulp.task('index.html', function () {
  return gulp.src(paths.app + '/index.jade')
    .pipe($.jade({
      pretty: !isDevelopment,
      compileDebug: isDevelopment
    }))
    .pipe(gulp.dest(paths.tmp));
});

gulp.task('templates', function () {
  templatizer(paths.templates, paths.tmp + '/js/templates.js', { jade : {
    doctype: 'html',
    pretty: !isDevelopment,
    compileDebug: isDevelopment
  }});
});

gulp.task('js', function () {
  var bundleStream = browserify(paths.app + '/js/main.js')
    .transform(istanbul)
    .bundle();

  bundleStream
    .pipe(source(paths.app + '/js/main.js'))
    .pipe($.rename('main.js'))
    .pipe(gulp.dest(paths.tmp + '/js/'));
});

gulp.task('css', function () {
  // FIXME
  return gulp.src('mama');
});

