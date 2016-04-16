'use strict';

angular.module('appApp')
  .controller('FormCtrl', function ($scope, $mdBottomSheet, $mdDialog, $mdToast, $state, $timeout) {
    $scope.items = [
      { name: 'Share', icon: 'share-arrow' },
      { name: 'Upload', icon: 'upload' },
      { name: 'Copy', icon: 'copy' },
      { name: 'Print this page', icon: 'print' }
    ];
    $scope.listItemClick = function($index) {
      var clickedItem = $scope.items[$index];
      $mdBottomSheet.hide(clickedItem);
    };
    $scope.saveReply = function() {
      $mdBottomSheet.hide();
      $mdToast.show(
        $mdToast.simple()
          .textContent('Reply added!')
          .position('top right')
          .hideDelay(3000)
      );
    };
    $scope.reply = {
      name: 'Kyle Ledbetter',
      title: 'Re: Louis likes dlite'
    };
  });
