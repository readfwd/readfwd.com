'use strict';

var $ = require('./shims/jquery');
var _ = require('lodash');
var MainView = require('./views/main');
var Posts = require('./models/posts-collection');
var Router = require('./router');
var loadcss = require('./lib/loadcss');
var browser = require('bowser').br;


module.exports = {
  launch: _.once(function () {
    window.app = this;
    document.title = 'Altceva!';
  })
};

module.exports.launch();
