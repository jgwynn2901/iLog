define(['dataService'], function (dataService) {
  'use strict';

  function bugController($scope, $location, $log,  dataService) {

    $scope.bugs = [];

    $scope.detail = function (parm) {
      $log.info(parm);
      $location.path('/bug/' + parm);
    };


    dataService.getBugs().then(function (res) {
      $scope.bugs = res.data;
    });
  }

  bugController.$inject = ['$scope', '$location', '$log', 'dataService'];
  return bugController;
});
