'use strict';

/**
 * @ngdoc overview
 * @name heartstoneNgRepeatApp
 * @description
 * # heartstoneNgRepeatApp
 *
 * Main module of the application.
 */
angular
    .module('heartstoneNgRepeatApp', [
        'ngAnimate',
        'ngResource',
        'ngRoute',
        'ngSanitize',
        'angularStats',
        'cardsBrowserModule'
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
    })
    .run(function initializeNgStats() {
        setTimeout(function () {
            window.self.showAngularStats({
                position: 'topleft',
                digestTimeThreshold: 100,
                logDigest: true,
                logWatches: true
            });
        }, 1000);
    });
