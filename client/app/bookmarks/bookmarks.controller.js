'use strict';

angular.module('appApp')
  .controller('BookmarksCtrl', function ($scope, $http, $state, $mdDialog, $mdMedia, $mdToast) {
    $scope.awesomeThings = [];
    $scope.$state = $state;
    $http.get('/api/things').success(function(awesomeThings) {
      $scope.awesomeThings = awesomeThings;
    });
    $scope.bookmark = function(){
      $scope.bookmarked = !$scope.bookmarked;
      $mdToast.show(
        $mdToast.simple()
          .textContent('Bookmarked!')
          .position('top right')
          .hideDelay(2000)
      );
    };
    // begin dialog
    $scope.status = '  ';
    $scope.customFullscreen = $mdMedia('xs') || $mdMedia('sm');
    $scope.showAlert = function(ev) {
      // Appending dialog to document.body to cover sidenav in docs app
      // Modal dialogs should fully cover application
      // to prevent interaction outside of dialog
      $mdDialog.show(
        $mdDialog.alert()
          .parent(angular.element(document.querySelector('#popupContainer')))
          .clickOutsideToClose(true)
          .title('This is an alert title')
          .textContent('You can specify some description text in here.')
          .ariaLabel('Alert Dialog Demo')
          .ok('Got it!')
          .targetEvent(ev)
      );
    };
    $scope.showDetail = function(ev) {
      // var useFullScreen = ($mdMedia('sm') || $mdMedia('xs')) && $scope.customFullscreen;
      $mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/list/dialog/dialog.html',
        parent: angular.element(document.querySelector('#main')),
        // parent: angular.element(document.body),
        targetEvent: ev,
        clickOutsideToClose: true
      })
      .then(function(answer) {
        $scope.status = 'You said the information was "' + answer + '".';
      }, function() {
        $scope.status = 'You cancelled the dialog.';
      });
      $scope.$watch(function() {
        return $mdMedia('xs') || $mdMedia('sm');
      }, function(wantsFullScreen) {
        $scope.customFullscreen = (wantsFullScreen === true);
      });
    };
    // end dialog
  });
  function DialogController($scope, $mdDialog, $mdToast, $state, $timeout, $mdBottomSheet) {
    $scope.hide = function() {
      $mdDialog.hide();
    };
    $scope.cancel = function() {
      $mdDialog.cancel();
    };
    $scope.answer = function(answer) {
      $mdDialog.hide(answer);
    };
    $scope.bookmark = function(){
      $scope.bookmarked = !$scope.bookmarked;
      $mdToast.show(
        $mdToast.simple()
          .textContent('Bookmarked!')
          .position('top right')
          .hideDelay(2000)
      );
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
  }
