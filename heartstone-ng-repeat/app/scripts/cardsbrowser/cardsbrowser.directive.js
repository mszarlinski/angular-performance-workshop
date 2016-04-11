'use strict';

angular.module('cardsBrowserModule')
    .directive('cardTypeLabel', function () {

        var TYPE_TO_LABEL_CLASS = {
            MINION: 'label label-warning',
            HERO: 'label label-success',
            SPELL: 'label label-info',
            ENCHANTMENT: 'label label-primary',
            WEAPON: 'label label-danger'
        };
        var DEFAULT_CLASS = 'label label-default';
        return {
            link: function (scope, elem, attrs) {
                var type = scope.$eval(attrs.cardTypeLabel);
                elem.text(type);

                var labelClass = TYPE_TO_LABEL_CLASS[type];
                if (labelClass) {
                    elem.addClass(labelClass);
                } else {
                    elem.addClass(DEFAULT_CLASS);
                }
            }
        }
    })
    .directive('toggleCardFlavorBtn', function () {
        return {
            restrict: 'E',
            template: '<button ng-click="toggleFlavor()"><span>Flavor <i class="glyphicon glyphicon-chevron-down"></i></span></button>',
            replace: true,
            scope: {
                card: '='
            },
            link: function (scope, elem, attrs) {
                scope.toggleFlavor = function () {
                    var text;
                    if (scope.card.flavorDisplayed) {
                        text = '<span>Flavor <i class="glyphicon glyphicon-chevron-down"></i></span>';
                        scope.card.flavorDisplayed = false;
                    } else {
                        text = '<span>Flavor <i class="glyphicon glyphicon-chevron-up"></i></span>';
                        scope.card.flavorDisplayed = true;
                    }
                    $(elem).empty();
                    $(elem).prepend(text);
                };
            }
        }
    });