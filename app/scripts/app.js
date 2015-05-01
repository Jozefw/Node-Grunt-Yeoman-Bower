'use strict';

/**
 * @ngdoc overview
 * @name bowerDemoApp
 * @description
 * # bowerDemoApp
 *
 * Main module of the application.
 */
angular
  .module('bowerDemoApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
