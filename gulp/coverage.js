'use strict';

var gulp = require('gulp');

var config = require('./_config.js');
var paths = config.paths;

var karma = require('karma').server;

var karmaConf = {
  browsers: ['PhantomJS'],
  frameworks: ['mocha', 'browserify'],
  preprocessors: {},
  browserify: {
    options: {
      external: {}
    },
    debug: true
  },
  files: [
    paths.tmp + "/js/main.js",
    './node_modules/should/should.min.js',
    paths.test + '/**/*.spec.js'
  ],
  //singleRun: true,
  reporters: ['progress', 'coverage']
};

karmaConf.preprocessors[paths.tmp + '/js/main.js'] = ['coverage'];

gulp.task('coverage', function (done) {
  karma.start(karmaConf, done);
});
