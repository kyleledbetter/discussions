'use strict';

describe('Controller: DiscussionCtrl', function () {

  // load the controller's module
  beforeEach(module('appApp'));

  var DiscussionCtrl, scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    DiscussionCtrl = $controller('DiscussionCtrl', {
      $scope: scope
    });
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
