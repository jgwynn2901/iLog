define(['dataService', 'bugController'],
  function (dataService, bugController) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap', 'ui.router']);
    app.config(function ($stateProvider, $urlRouterProvider) {

      $urlRouterProvider.otherwise('/');
      $stateProvider
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/',
            templateUrl: 'views/list.html'
        })
        // ABOUT PAGE AND MULTIPLE NAMED VIEWS =================================
        .state('about', {
            // we'll get to this in a bit
        })
    });

    app.factory('dataService', dataService)
      .controller('bugController', bugController);

    return app;
  });
