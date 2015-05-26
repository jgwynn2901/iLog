/*global define */
define(['dataService'], function (dataService) {
  'use strict';

  function bugController($scope, $location, $log, ngToast, $stateParams, dataService) {

    $scope.bugs = [];
    $scope.user_id = $location.search().user_id || "";

    $scope.detail = function (parm) {
      $log.info(parm);
      $location.path('/bug/' + parm);
    };

    var processResults = function (res) {
      $scope.bugs = res.data;
    };

    if ($scope.user_id) {
      dataService.getBugsForUser($scope.user_id).then(processResults);
    } else {
      dataService.getBugs().then(processResults);
    }

    $scope.toggleAnimation = function () {
      $scope.animationsEnabled = !$scope.animationsEnabled;
    };
  }

  bugController.$inject = ['$scope', '$location', '$log', 'ngToast', '$stateParams', 'dataService'];
  return bugController;
});
