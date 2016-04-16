'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('form', {
        url: '/detail/reply/form',
        templateUrl: 'app/detail/reply/form/form.html',
        controller: 'FormCtrl'
      });
  });