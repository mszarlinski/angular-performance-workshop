'use strict';

angular.module('springReposModule')
    .factory('springReposFetcher', function ($http) {
        return {
            fetch: function () {
                return $http.get('https://api.github.com/users/spring-projects/repos?per_page=200')
                    .then(function (response) {
                        return response.data;
                    })
            }
        }
    });