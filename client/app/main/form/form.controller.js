'use strict';

angular.module('appApp')
  .controller('MainFormCtrl', function ($scope) {
    $scope.number = 10;
    $scope.getNumber = function(num) {
        return new Array(num);
    };
    $scope.tags = ['DevOps', 'UX', 'Marketing'];
  });
