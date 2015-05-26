/*global define */
define([], function () {

  'use strict';

  function factoryFunc($http) {
    return {
      getBugs: function () {
        return $http.get("/api/bugs/");
      },
      getBugsForUser: function (id) {
        return $http.get("/api/assigned_to/" + id);
      },
      findBug: function (id) {
        return $http.get("/api/bugs/" + id);
      },
      getUsers: function () {
        return $http.get("/api/users/");
      },
      findUser: function (id) {
        return $http.get("/api/users/" + id);
      }
    };
  }
  factoryFunc.$inject = ['$http'];
  return factoryFunc;
});
