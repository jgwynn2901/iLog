/*global define */
define(['dataService'], function (dataService) {
  'use strict';

  function navigateController($scope, $location, $modal, $log, dataService) {

    $scope.issue_id = "";
    $scope.users = [];
    $scope.selectedUser = "";
    $scope.animationsEnabled = true;

    dataService.getUsers().then(function (res) {
      $scope.users = res.data;
    });

    $scope.open = function () {
      var modalInstance = $modal.open({
        animation: $scope.animationsEnabled,
        templateUrl: 'userModalContent.html',
        controller: 'userModalController',
        resolve: {
          users: function () {
            return $scope.users;
          }
        }
      });

      modalInstance.result.then(function (selectedItem) {
        $scope.selected = selectedItem;
        $log.info('Modal seleted returned: ' + selectedItem);
        $location.path('/?user_id=' + selectedItem);
      }, function () {
        $log.info('Modal dismissed at: ' + new Date());
      });
    };

    $scope.search = function () {

      if ($scope.issue_id) {
        $location.path('/bug/' + $scope.issue_id);
        $scope.issue_id = "";
      }
    };
  }

  navigateController.$inject = ['$scope', '$location', '$modal', '$log', 'dataService'];
  return navigateController;
});
