'use strict';

angular.module('appApp')
.directive('back', function($window) {
  return {
    restrict: 'A',
    link: function(scope, elem) {
      elem.bind('click', function() {
        $window.history.back();
      });
    }
  };
});
