'use strict';

/**
 * @ngdoc function
 * @name immutableListApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the immutableListApp
 */
angular.module('immutableListApp')
  .controller('AboutCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
