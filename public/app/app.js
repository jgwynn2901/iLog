define(['dataService', 'bugController', 'detailController', 'navigateController'],
  function (dataService, bugController, detailController, navigateController) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap', 'ui.router', 'ngSanitize','ngToast']);
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
      .controller('navigateController', navigateController)
      .controller('detailController', detailController);

    return app;
  });
