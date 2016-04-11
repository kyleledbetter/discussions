'use strict';

describe('Controller: ReplyCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var ReplyCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ReplyCtrl = $controller('ReplyCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
