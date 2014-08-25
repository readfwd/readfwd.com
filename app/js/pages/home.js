'use strict';

/* global app */
var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');
// var QuoteBoxView = require('../views/quote-box');

module.exports = View.extend({
  pageTitle: 'Read Forward | Home',
  template: templates.pages.home,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
