'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('detail', {
        url: '/detail',
        templateUrl: 'app/detail/detail.html',
        controller: 'DetailCtrl',
        data: {
          title: 'Detail'
        }
      });
  });
