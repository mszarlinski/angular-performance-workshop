'use strict';

angular.module('cardsBrowserModule')
    .controller('CardsBrowserCtrl', function (cards) {
        console.log('cards = ', cards);
        this.cards = cards;

    });
