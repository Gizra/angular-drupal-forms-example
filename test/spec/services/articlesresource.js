'use strict';

describe('Service: articlesResource', function () {

  // load the service's module
  beforeEach(module('angularDrupalFromsExampleApp'));

  // instantiate service
  var articlesResource;
  beforeEach(inject(function (_articlesResource_) {
    articlesResource = _articlesResource_;
  }));

  it('should do something', function () {
    expect(!!articlesResource).toBe(true);
  });

});
