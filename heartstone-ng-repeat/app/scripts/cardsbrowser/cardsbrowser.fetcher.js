'use strict';

angular.module('cardsBrowserModule')
    .factory('cardsFetcher', function ($http) {
        return {
            getCards: function () {
                return $http.get('https://api.hearthstonejson.com/v1/latest/enUS/cards.json')
                    .then(function(response) {
                        return response.data;
                    })
            }
        }
    });