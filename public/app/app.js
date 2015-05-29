/*global define, angular */
define(['dataService', 'bugController', 'detailController', 'navigateController', 'userModalController'],
  function (dataService, bugController, detailController, navigateController, userModalController) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize', 'ngToast']);
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

      $locationProvider.html5Mode(true);
    });

    app.factory('dataService', dataService)
      .controller('bugController', bugController)
      .controller('navigateController', navigateController)
      .controller('userModalController', userModalController)
      .controller('detailController', detailController);

    return app;
  });
