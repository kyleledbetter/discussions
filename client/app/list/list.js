'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('list', {
        url: '/list',
        templateUrl: 'app/list/list.html',
        controller: 'ListCtrl',
        data: {
          title: 'List'
        }
      });
  });
