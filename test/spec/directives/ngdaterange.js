'use strict';

describe('Directive: ngDateRange', function () {

  // load the directive's module
  beforeEach(module('ngDaterangepickerCompareApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<ng-date-range></ng-date-range>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the ngDateRange directive');
  }));
});
