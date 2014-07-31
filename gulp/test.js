'use strict';

var gulp = require('gulp');
var _ = require('lodash');

var config = require('./_config.js');
var paths = config.paths;

var karma = require('karma').server;

var karmaConf = {
  browsers: ['PhantomJS'],
  frameworks: ['mocha'],
  preprocessors: {},
  files: [
    paths.tmp + "/js/main.js",
    './node_modules/should/should.min.js',
    paths.test + '/**/*.spec.js'
  ],
  reporters: ['mocha', 'osx', 'coverage'],
  coverageReporter: {
    type : 'lcov',
    dir : 'coverage/',
    subdir: function (browser) {
      return browser.toLowerCase().split(/[ /-]/)[0];
    }
  }
};

karmaConf.preprocessors[paths.tmp + '/js/main.js'] = ['coverage'];

gulp.task('test', function (done) {
  karma.start(karmaConf, done);
});

gulp.task('test:once', ['build'], function () {
  karma.start(_.assign({}, karmaConf, { singleRun: true }));
});

