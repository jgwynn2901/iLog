/*global require, angular */
require(['app'],
  function () {
    'use strict';

    angular.element(document).ready(function () {
      angular.bootstrap(document, ['app']);
    });
  });
