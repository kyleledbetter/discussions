'use strict';

angular.module('appApp')
  .controller('DetailCtrl', function ($scope, $state) {
    $scope.message = 'Hello';
    $scope.$state = $state;
  });
