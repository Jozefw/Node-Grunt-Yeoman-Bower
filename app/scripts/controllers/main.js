'use strict';

/**
 * @ngdoc function
 * @name bowerDemoApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the bowerDemoApp
 */
angular.module('bowerDemoApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
