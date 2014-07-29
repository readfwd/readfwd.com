'use strict';

var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('browser-sync', function () {
  browserSync({
    server: {
      baseDir: './dist'
    }
  });
});

gulp.task('watch', ['build', 'browser-sync'], function () {
  gulp.watch('./app/**/*.html', ['html']);
  gulp.watch('./app/**/*.js', ['js']);

  gulp.watch('./dist/**/*').on('change', function () {
    browserSync.reload();
  });
});

