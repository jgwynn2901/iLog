define(['dataService', 'bugController', 'detailController'],
  function (dataService, bugController, detailController) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize']);
    app.config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
          url: '/',
          templateUrl: 'views/list.html'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('bug', {
          // display detail page by issue_id
          url: '/bug/{issue_id}',
          templateUrl: 'views/detail.html',
          controller: 'detailController'
        });
    });

    app.factory('dataService', dataService)
      .controller('bugController', bugController)
      .controller('detailController', detailController);

    return app;
  });
