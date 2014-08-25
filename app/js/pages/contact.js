'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Read Forward | Contact',
  template: templates.pages.contact,
  render: function () {
    this.$el.html(this.template());
    return this;
  }
});
