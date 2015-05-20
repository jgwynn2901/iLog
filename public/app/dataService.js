define([], function () {

  'use strict';

  function factoryFunc($http) {
    return {
      getBugs: function () {
        return $http.get("/api/bugs/");
      },
      getUsers: function () {
        return $http.get("/api/users/");
      }
    };
  }
  factoryFunc.$inject = ['$http'];
  return factoryFunc;
});
