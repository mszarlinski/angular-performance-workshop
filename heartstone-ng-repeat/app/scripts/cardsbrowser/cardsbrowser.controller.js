'use strict';

angular.module('cardsBrowserModule')
    .controller('CardsBrowserCtrl', function ($scope, cards) {
        var vm = this;

        this.cards = cards;
        this.displayedCards = angular.copy(cards);
        this.searchString = '';

        this.showFlavor = function(card) {
            card.flavorDisplayed = true;
        };

        this.hideFlavor = function(card) {
            card.flavorDisplayed = false;
        };
        
        $scope.$watch('vm.searchString', function (val) {
            if (!val) {
                vm.displayedCards = angular.copy(cards);
            } else {
                vm.displayedCards = _.filter(angular.copy(cards), function (card) {
                    return card.name.indexOf(val) > -1;
                });
            }
        });
    });
