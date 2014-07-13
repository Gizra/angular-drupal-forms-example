'use strict';

describe('Service: drupalAuthenticate', function () {

  // load the service's module
  beforeEach(module('angularDrupalFromsExampleApp'));

  // instantiate service
  var drupalAuthenticate;
  beforeEach(inject(function (_drupalAuthenticate_) {
    drupalAuthenticate = _drupalAuthenticate_;
  }));

  it('should do something', function () {
    expect(!!drupalAuthenticate).toBe(true);
  });

});
