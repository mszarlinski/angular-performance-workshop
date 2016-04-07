'use strict';

angular.module('cardsBrowserModule')
    .controller('CardsBrowserCtrl', function (cards) {
        this.cards = cards;

        this.showCost = function (cost) {
            var result = '';
            for (var i = 0; i < cost; i++) {
                result += ' *';
            }
            return result;
        }
    })
    .filter('rarityToNumber', function() {
        var RARITY_TO_NUMBER = {
            FREE: 0,
            COMMON: 1,
            RARE: 2,
            EPIC: 3,
            LEGENDARY : 4
        };

        return function(input) {
            return RARITY_TO_NUMBER[input];
        }
    });
