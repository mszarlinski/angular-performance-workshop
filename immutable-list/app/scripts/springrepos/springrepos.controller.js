'use strict';

angular.module('springReposModule')
    .controller('SpringReposCtrl', function (repos) {
        console.log('### repos: ', repos);
        this.repos = repos;
    });