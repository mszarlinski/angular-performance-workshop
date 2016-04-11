'use strict';

/**
 * @ngdoc function
 * @name immutableListApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the immutableListApp
 */
angular.module('immutableListApp')
  .controller('MainCtrl', function () {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
