'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('users', {
        url: '/users',
        templateUrl: 'app/users/users.html',
        controller: 'UsersCtrl',
        data: {
          title: 'Teams & Users'
        }
      });
  });
