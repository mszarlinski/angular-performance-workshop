'use strict';

angular.module('immutableListApp')
    .directive('reposList', function () {
        return {
            restrict: 'AE',
            templateUrl: 'views/reposlist.component.html',
            scope: {
                repos: '='
            },
            bindToController: true,
            controllerAs: 'vm',
            controller: function () {

            }
        }
    });