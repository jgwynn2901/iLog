/*global define */
define([], function () {
  'use strict';

  function userModalController($scope, $modalInstance, users) {
    $scope.users = users;
    $scope.selectedUser = "";

    $scope.ok = function () {
      $modalInstance.close($scope.selectedUser);
    };

    $scope.cancel = function () {
      $modalInstance.dismiss('cancel');
    };
  }

  userModalController.$inject = ['$scope', '$modalInstance', 'users'];
  return userModalController;
});
