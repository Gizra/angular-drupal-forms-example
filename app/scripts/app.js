'use strict';

/**
 * @ngdoc overview
 * @name angularDrupalFromsExampleApp
 * @description
 * # angularDrupalFromsExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularDrupalFromsExampleApp', [
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
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
