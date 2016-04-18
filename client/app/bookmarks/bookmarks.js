'use strict';

angular.module('appApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('bookmarks', {
        url: '/bookmarks',
        templateUrl: 'app/bookmarks/bookmarks.html',
        controller: 'BookmarksCtrl',
        data: {
          title: 'Bookmarks'
        }
      });
  });
