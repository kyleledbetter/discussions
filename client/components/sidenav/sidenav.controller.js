'use strict';

angular.module('appApp')
  .controller('SidenavCtrl', function ($scope) {
    // Menu items
    $scope.menu = [
      {
        title: 'Lists',
        route: 'main',
        icon: 'action:view_day'
      },
      {
        title: 'Discussions',
        route: 'main',
        icon: 'communication:forum'
      },
      {
        title: 'Detail',
        route: 'detail',
        icon: 'communication:chat'
      },
      {
        title: 'Bookmarks',
        route: 'main',
        icon: 'action:book'
      }
    ];
    $scope.admin = [
      {
        title: 'Teams',
        route: 'main',
        icon: 'social:people'
      },
      {
        title: 'Users',
        route: 'main',
        icon: 'communication:contacts'
      },
      {
        title: 'Settings',
        route: 'main',
        icon: 'action:settings'
      }
    ];
  });
