define(['dataService', 'bugController'],
  function (dataService, bugController) {
    'use strict';

    var app = angular.module('app', ['ui.bootstrap']);

    app.factory('dataService', dataService)
      .controller('bugController', bugController);

    return app;
  });
