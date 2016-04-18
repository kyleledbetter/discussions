'use strict';

angular.module('appApp')
  .controller('BookmarksCtrl', function ($scope, $state, $http, $mdToast) {
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
  });
