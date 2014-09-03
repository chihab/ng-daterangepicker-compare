(function (angular) {
  'use strict';
  angular.module('ngDateRange', []).directive('dateCompare', function ($compile, $parse) {
    return {
      restrict: 'E',
      require: '?ngModel',
      link: function ($scope, $element, $attributes, ngModel) {
        if (ngModel === null ) return;

        var options = {};
        var init = true;
        var updateFromPlugin = false;
        options.format = $attributes.format || 'Y-mm-dd';

        $scope.$watch($attributes.ngModel, function (newValue) {
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
        }, true);

        $element.daterangepicker(
          {opens: 'left', format: options.format, compare: options.compare},
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