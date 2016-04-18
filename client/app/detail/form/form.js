'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail-form', {
        url: '/detail/form',
        templateUrl: 'app/detail/form/form.html',
        controller: 'FormCtrl',
        data: {
          title: 'New Post'
        }
      });
  });
