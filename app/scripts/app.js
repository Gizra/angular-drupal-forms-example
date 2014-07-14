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
    'ngTouch',
    'xeditable'
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
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });
