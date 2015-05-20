define(['dataService'], function (dataService) {
  'use strict';

  function bugController($scope, dataService) {

    $scope.bugs = [];

    dataService.getBugs().then(function (res) {
      $scope.bugs = res.data;
    });
  }

  bugController.$inject = ['$scope', 'dataService'];
  return bugController;
});
