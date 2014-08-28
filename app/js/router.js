'use strict';

var Router = require('ampersand-router');

var HomePage = require('./pages/home');
var ContactPage = require('./pages/contact');
var AboutUsPage = require('./pages/aboutUs');

module.exports = Router.extend({
  routes: {
    '': 'home',
    'contact/': 'contact',
    'about/': 'about'
  },

  //Handlers
  home: function () {
    this.trigger('newPage', new HomePage({}));
  },

  contact: function () {
    this.trigger('newPage', new ContactPage({}));
  },

  about: function () {
    this.trigger('newPage', new AboutUsPage({}));
  }
});
