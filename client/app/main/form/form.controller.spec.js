'use strict';

describe('Controller: MainFormCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var MainFormCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MainFormCtrl = $controller('MainFormCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
