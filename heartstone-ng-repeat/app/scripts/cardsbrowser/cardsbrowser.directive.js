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
            scope: {
                cardTypeLabel: '='
            },
            link: function (scope, elem) {
                var labelClass = TYPE_TO_LABEL_CLASS[scope.cardTypeLabel];
                if (labelClass) {
                    elem.addClass(labelClass);
                } else {
                    elem.addClass(DEFAULT_CLASS);
                }
            }
        }
    });