'use strict';

/**
 * @ngdoc function
 * @name heartstoneNgRepeatApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the heartstoneNgRepeatApp
 */
angular.module('heartstoneNgRepeatApp')
    .controller('MainCtrl', function () {
        this.awesomeThings = [
            'HTML5 Boilerplate',
            'AngularJS',
            'Karma'
        ];

        //ng-stats config
        window.self.showAngularStats({
            position: 'topleft',
            digestTimeThreshold: 100,
            logDigest: true,
            logWatches: true
        });
    });
