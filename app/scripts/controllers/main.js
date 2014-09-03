'use strict';

/**
 * @ngdoc function
 * @name ngDaterangepickerCompareApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the ngDaterangepickerCompareApp
 */
angular.module('ngDaterangepickerCompareApp')
  .controller('MainCtrl', function ($scope) {
    $scope.input = {
      'dateRange' : {
        'startDate': new Date(2014, 5, 1),
        'endDate': new Date(2014, 5, 30),
        'startDateCompare': null,
        'endDateCompare': null,
        'compare' : false
      }
    };
  });
