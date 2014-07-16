'use strict';

/**
 * @ngdoc overview
 * @name angularDrupalFormsExampleApp
 * @description
 * # angularDrupalFormsExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularDrupalFormsExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular',
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
