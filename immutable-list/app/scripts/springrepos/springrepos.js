'use strict';

angular.module('springReposModule', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/springrepos', {
                templateUrl: 'views/springrepos.html',
                controller: 'SpringReposCtrl',
                controllerAs: 'vm',
                resolve: {
                    repos: function (springReposFetcher) {
                        return springReposFetcher.fetch();
                    }
                }
            });
    });