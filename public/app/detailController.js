/*global define, angular, $timeout, children */
define(['dataService'], function (dataService) {
  'use strict';

  function detailController($scope, $sce,  $stateParams, ngToast, $location, $timeout, dataService) {

    $scope.bug = {};
    $scope.comments = [];
    $scope.users = [];

    $scope.collapsed = true;
    $scope.$on('$filledNestedComments', function (nodes) {
      $scope.collapsed = true;
      $timeout(function () {
        this.children = nodes;
        this.children.addClass('collapse').removeClass('in');
        this.children.collapse({
          toggle: false
        });
        // Stupid hack to wait for DOM insertion prior to setting up plugin
      }, 1);
    });
    $scope.$on('$emptiedNestedComments', function (nodes) {
      this.children = undefined;
    });
    $scope.collapse = function () {
      $scope.collapsed = children.hasClass('in');
      children.collapse('toggle');
    };

    $scope.addChildComment = function (comment) {
      var childComment = angular.extend(comment, {
        name: '@' + comment.name,
        date: new Date(),
        profileUrl: 'https://github.com/' + comment.name
      });
      if (!$scope.comment.children) {
        $scope.comment.children = [];
      }
      $scope.comment.children.push(childComment);
    };

    $scope.addParentComment = function (comment) {
      var parentComment = angular.extend(comment, {
        name: '@' + comment.name,
        date: new Date(),
        profileUrl: 'https://github.com/' + comment.name
      });
      $scope.comments.push(parentComment);
    };

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

    dataService.getUsers().then(function (res) {
      $scope.users = res.data;
    });

    $scope.getDescription = function () {
      return $sce.trustAsHtml($scope.bug.issue_history);
    };
  }

  detailController.$inject = ['$scope', '$sce', '$stateParams', 'ngToast', '$location', '$timeout', 'dataService'];
  return detailController;
});
