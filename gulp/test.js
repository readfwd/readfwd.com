'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;
var $ = config.plugins;

var karma = require('karma').server;

var karmaConf = {
  browsers: ['PhantomJS'],
  frameworks: ['mocha'],
  files: [
    './dist/**/*.js',
    './node_modules/should/should.min.js',
    './test/**/*.spec.js'
  ],
  reporters: ['progress']
};

gulp.task('test', function (done) {
  karma.start(karmaConf, done);
});

