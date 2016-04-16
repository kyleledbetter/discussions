'use strict';

angular.module('appApp')
  .controller('ReplyCtrl', function ($scope, $mdBottomSheet) {
    $scope.alert = '';
    $scope.replyForm = function() {
      $scope.alert = '';
      $mdBottomSheet.show({
        templateUrl: 'app/detail/reply/form/form.html',
        controller: 'FormCtrl'
      });
    };
  });
