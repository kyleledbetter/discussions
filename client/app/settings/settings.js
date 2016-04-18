'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsCtrl',
        data: {
          title: 'Settings'
        }
      });
  });
