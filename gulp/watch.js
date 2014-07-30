'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;
var $ = config.plugins;

var browserSync = require('browser-sync');

gulp.task('watch', ['build', 'serve'], function () {
  gulp.watch(paths.app + '/index.jade', ['index.html']);
  gulp.watch(paths.app + '/templates/*.jade', ['jade']);
  gulp.watch(paths.app + '/**/*.js', ['js']);

  gulp.watch(paths.tmp + '/*').on('change', function () {
    browserSync.reload();
  });
});

gulp.task('serve', function () {
  browserSync({
    server: {
      baseDir: paths.tmp
    }
  });
});
