'use strict';

describe('Controller: BookmarksCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var BookmarksCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    BookmarksCtrl = $controller('BookmarksCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
