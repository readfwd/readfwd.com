'use strict';

var Backbone = require('../shims/backbone');
var View = Backbone.View;
var templates = require('../lib/templates');

module.exports = View.extend({
  pageTitle: 'Read Forward | Contact',
  template: templates.pages.contact,

  events: {
    'click .show-route': 'generateRoute'
  },

  render: function () {
    this.$el.html(this.template());
    this.generateMap();


    return this;
  },
  generateMap: function () {
    this.map = new window.GMaps({
      el: this.$('#map')[0],
      lat: 44.43521432961795,
      lng: 26.118552069371407,
      width: '100%',
      height: '20em'
    });
    this.map.drawOverlay({
      lat: 44.43521432962795,
      lng: 26.118552069371407,
      layer: 'overlayLayer',
      content: '<div class="overlay">ReadFWD<div class="overlay_arrow above"></div></div>',
      verticalAlign: 'middle',
      horizontalAlign: 'middle'
    });
    // #yolo
    var self = this;
    setTimeout(function () {
      self.map.refresh();
      self.map.setCenter(44.43521432961795, 26.118552069371407);
    }, 1);

  },

  generateRoute: function () {
    var map = this.map;
    window.GMaps.geolocate({
    success: function(position) {
      map.addMarker({
        lat: position.coords.latitude,
        lng: position.coords.longitude,
        title: 'Your position'
      });

      map.drawRoute({
        origin: [position.coords.latitude, position.coords.longitude],
        destination: [44.43521432961795, 26.118552069371407],
        travelMode: 'driving',
        strokeColor: '#131540',
        strokeOpacity: 0.6,
        strokeWeight: 6
      });
      map.setCenter(position.coords.latitude, position.coords.longitude);
      console.log(position.coords.latitude, position.coords.longitude);
    },
    error: function(error) {
      alert('Couldn\'t get your position: '+ error.message);
    },
    notSupported: function() {
      alert("Your browser does not support geolocation");
    },
    always: function() {

    }
  });
  }
});
