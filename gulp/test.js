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
  reporters: ['mocha', 'osx', 'coverage']
};

karmaConf.preprocessors[paths.tmp + '/js/main.js'] = ['coverage'];

gulp.task('test', function (done) {
  karma.start(karmaConf, done);
});

gulp.task('test:once', function () {
  karma.start(_.assign({}, karmaConf, { singleRun: true }));
});

