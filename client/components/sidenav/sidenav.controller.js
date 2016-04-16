'use strict';

angular.module('appApp')
  .controller('SidenavCtrl', function ($scope, $mdSidenav) {
    $scope.toggleLeft = function() {
      $mdSidenav('left').toggle();
    };
    // Menu items
    $scope.menu = [
      {
        title: 'Mail Lists',
        route: 'main',
        icon: 'action:view_day'
      },
      {
        title: 'List Discussions',
        route: 'list',
        icon: 'communication:forum'
      },
      {
        title: 'Discussion Detail',
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
