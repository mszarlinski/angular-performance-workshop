'use strict';

/**
 * @ngdoc overview
 * @name immutableListApp
 * @description
 * # immutableListApp
 *
 * Main module of the application.
 */
angular
  .module('immutableListApp', [
    'ngAnimate',
    'ngRoute',
    'ngSanitize',
    'springReposModule'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
