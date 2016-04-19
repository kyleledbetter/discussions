'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('main-form', {
        url: '/main/form',
        templateUrl: 'app/main/form/form.html',
        controller: 'MainFormCtrl',
        data: {
          title: 'New List'
        }
      })
      .state('main-form.info', {
        url: '/main/form/info',
        views: {
          mainform: {
            templateUrl: 'app/main/form/info.html',
            controller: 'MainFormCtrl'
          }
        }
      })
      .state('main-form.users', {
        url: '/main/form/users',
        views: {
          mainform: {
            templateUrl: 'app/main/form/users.html',
            controller: 'MainFormCtrl'
          }
        }
      });
  });
