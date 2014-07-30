'use strict';

var _ = require('lodash');
console.log('loaded');
module.exports = {
  launch: _.once(function () {
    window.app = this;
  })
};

module.exports.launch();

