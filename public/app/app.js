/*global define, angular, moment */
define(['dataService', 'bugController', 'detailController', 'navigateController', 'userModalController', 'commenter'],
  function (dataService, bugController, detailController, navigateController, userModalController, commenter) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'ngAnimate', 'ngToast', 'ui.comments']);
    app.config(function ($stateProvider, $urlRouterProvider, $locationProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
          url: '/?user_id',
          templateUrl: 'views/list.html'
        })
        .state('assigned', {
          url: '/{user_id}',
          templateUrl: 'views/list.html',
          controller: 'bugController'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('bug', {
          // display detail page by issue_id
          url: '/bug/{issue_id}',
          templateUrl: 'views/detail.html',
          controller: 'detailController'
        });

      //$locationProvider.html5Mode(true);
    })
      .config(function (commentsConfigProvider) {
        commentsConfigProvider.set({
          commentTemplate: 'views/comment.html',
          commentController: 'detailController',
          depthLimit: 10
        });
      });

    app.factory('dataService', dataService)
      .controller('bugController', bugController)
      .controller('navigateController', navigateController)
      .controller('userModalController', userModalController)
      .controller('detailController', detailController)
      .directive('commenter', commenter)
      .filter('timeago', function () {
        return function (date) {
          return moment(date).fromNow();
        };
      })
      .filter('calendar', function () {
        return function (date) {
          return moment(date).calendar();
        };
      });

    return app;
  });
