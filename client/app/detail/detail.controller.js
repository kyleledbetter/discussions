'use strict';

angular.module('appApp')
  .controller('DetailCtrl', function ($scope, $mdBottomSheet) {
    $scope.openMenu = function($mdOpenMenu, $event) {
      $mdOpenMenu($event);
    };
    $scope.alert = '';
    $scope.replyForm = function() {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/detail/reply/form/form.html',
        controller: 'FormCtrl',
        parent: angular.element(document.querySelector('#main'))
      });
    };
  });
