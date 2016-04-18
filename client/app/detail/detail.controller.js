'use strict';

angular.module('appApp')
  .controller('DetailCtrl', function ($scope) {
    $scope.openMenu = function($mdOpenMenu, $event) {
      $mdOpenMenu($event);
    };
  });
