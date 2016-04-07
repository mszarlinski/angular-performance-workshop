'use strict';

angular.module('cardsBrowserModule')
    .controller('CardsBrowserCtrl', function (cards) {
        this.cards = cards;
    });
