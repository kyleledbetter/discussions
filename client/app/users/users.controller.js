'use strict';

angular.module('appApp')
  .controller('UsersCtrl', function ($scope) {
    $scope.number = 10;
    $scope.getNumber = function(num) {
        return new Array(num);
    };
  });
