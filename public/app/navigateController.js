define([], function () {
  'use strict';

  function navigateController($scope, $location) {

    $scope.issue_id = "";

    $scope.search = function () {

      if ($scope.issue_id) {
        $location.path('/bug/' + $scope.issue_id);
        $scope.issue_id = "";
      }
    };
  }

  navigateController.$inject = ['$scope', '$location'];
  return navigateController;
});
