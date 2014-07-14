'use strict';

describe('Directive: quickPost', function () {

  // load the directive's module
  beforeEach(module('angularDrupalFormsExampleApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<quick-post></quick-post>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the quickPost directive');
  }));
});
