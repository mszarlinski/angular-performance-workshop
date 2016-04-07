'use strict';

angular.module('cardsBrowserModule', [])
    .config(function ($routeProvider) {
        $routeProvider
            .when('/cardsbrowser', {
                templateUrl: 'views/cardsbrowser.html',
                controller: 'CardsBrowserCtrl',
                controllerAs: 'vm',
                resolve: {
                    cards: function (cardsFetcher) {
                        return cardsFetcher.getCards();
                    }
                }
            });
    });