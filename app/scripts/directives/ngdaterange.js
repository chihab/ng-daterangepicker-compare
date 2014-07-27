'use strict';

/**
 * @ngdoc directive
 * @name ngDaterangepickerCompareApp.directive:ngDateRange
 * @description
 * # ngDateRange
 */
angular.module('ngDaterangepickerCompareApp')
  .directive('ngDateRange', function () {
    return {
      template: '<div></div>',
      restrict: 'E',
      link: function postLink(scope, element, attrs) {
        element.text('this is the ngDateRange directive');
      }
    };
  });
