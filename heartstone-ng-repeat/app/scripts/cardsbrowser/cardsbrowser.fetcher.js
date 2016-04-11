'use strict';

angular.module('cardsBrowserModule')
    .factory('cardsFetcher', function ($http) {
        return {
            getCards: function () {
                return $http.get('cards.json')
                    .then(function(response) {
                        return response.data;
                    })
            }
        }
    });