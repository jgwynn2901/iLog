/*global define */
define(['dataService'], function (dataService) {
  'use strict';

  function detailController($scope, $sce,  $stateParams, ngToast, $location,  dataService) {

    $scope.bug = {};

    dataService.findBug($stateParams.issue_id).then(function (res) {

      if (res.data && res.data.issue_id) {
        $scope.bug = res.data;
      } else {
        ngToast.create({
          className: 'warning',
          content: '<span>Issue not found!</span>'
        });
        $location.path("/");
      }
    });

    $scope.getDescription = function () {
      return $sce.trustAsHtml($scope.bug.issue_history);
    };
  }

  detailController.$inject = ['$scope', '$sce', '$stateParams', 'ngToast', '$location', 'dataService'];
  return detailController;
});
