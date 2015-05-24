define(['dataService'], function (dataService) {
  'use strict';

  function detailController($scope, $sce,  $stateParams, dataService) {

    $scope.bug = {};

    dataService.findBug($stateParams.issue_id).then(function (res) {
      $scope.bug = res.data;
    });

    $scope.getDescription = function() {
      return $sce.trustAsHtml($scope.bug.issue_history);
    }
  }

  detailController.$inject = ['$scope', '$sce', '$stateParams', 'dataService'];
  return detailController;
});
