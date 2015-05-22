define(['dataService'], function (dataService) {
  'use strict';

  function detailController($scope, $stateParams, dataService) {

    $scope.bug = {};

    dataService.findBug($stateParams.issue_id).then(function (res) {
      $scope.bug = res.data;
    });
  }

  detailController.$inject = ['$scope', '$stateParams', 'dataService'];
  return detailController;
});
