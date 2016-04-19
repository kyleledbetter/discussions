'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list-discussion', {
        url: '/list/discussion',
        templateUrl: 'app/list/discussion/discussion.html',
        controller: 'DiscussionCtrl',
        onEnter: showDetail
      });
  });
  showDetail.$inject = ['$rootScope', '$state', '$mdDialog'];

  	function showDetail($rootScope, $state, $mdDialog) {
  		var unregisterListener = $rootScope.$on('$stateChangeStart', onStateChange);

  		$mdDialog.show({
        controller: DialogController,
        templateUrl: 'app/list/dialog/dialog.html',
  			clickOutsideToClose: false,
        parent: angular.element(document.querySelector('#main')),
  		}).then(transitionTo, transitionTo);

  		/**
  		 * Function executed when resolving or rejecting the
  		 * dialog promise.
  		 *
  		 * @param {*} answer - The result of the dialog callback
  		 * @returns {promise}
  		 */
  		function transitionTo(answer) {
  			return $state.transitionTo('list');
  		}

  		/**
  		 * Function executed when changing the state.
  		 * Closes the create dialog
  		 */
  		function onStateChange() {
  			unregisterListener();
  			$mdDialog.hide();
  		}
  	}
    function DialogController($scope, $mdToast, $state, $timeout, $mdBottomSheet) {
      $scope.bookmark = function(){
        $scope.bookmarked = !$scope.bookmarked;
        $mdToast.show(
          $mdToast.simple()
            .textContent('Bookmarked!')
            .position('top right')
            .hideDelay(2000)
        );
      };
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
    }
