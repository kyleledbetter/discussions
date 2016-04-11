'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('reply', {
        url: '/detail/reply',
        templateUrl: 'app/detail/reply/reply.html',
        controller: 'ReplyCtrl'
      });
  });