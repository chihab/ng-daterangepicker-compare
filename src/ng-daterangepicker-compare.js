(function (angular) {
  'use strict';
  angular.module('ngDrpCompare', []).directive('drpCompare', function () {
    return {
      restrict: 'E',
      require: '?ngModel',
      link: function ($scope, $element, $attributes, ngModel) {
        if (ngModel === null ) return;

        var options = {};
        var init = true;
        var updateFromPlugin = false;
        options.format = $attributes.format || 'Y-mm-dd';
        options.opens = $attributes.opens || 'left';

        $scope.$watch($attributes.ngModel, function (newValue) {
          if (newValue) {
            if (updateFromPlugin) {
              updateFromPlugin = false;
              return;
            }
            $element.data('daterangepicker').updatePickerInput(
              newValue.startDate,
              newValue.endDate,
              newValue.startDateCompare,
              newValue.endDateCompare,
              newValue.compare);
          }
        }, true);

        $element.daterangepicker(
          {opens: options.opens, format: options.format, compare: options.compare},
          function(start, end, cmpStart, cmpEnd, compare){
            if (init)
              return;
            updateFromPlugin = true;
            $scope.$apply(function () {
              ngModel.$setViewValue({ startDate: start, endDate: end, startDateCompare: cmpStart, endDateCompare: cmpEnd, compare: compare });
            });
          });
        init = false;
      }
    };
  });

})(angular);