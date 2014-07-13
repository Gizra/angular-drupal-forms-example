'use strict';

/**
 * @ngdoc function
 * @name angularDrupalFromsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrupalFromsExampleApp
 */
angular.module('angularDrupalFromsExampleApp')
  .controller('MainCtrl', function ($scope, DrupalAuthenticate) {
    $scope.authenticationData = {
      backendUrl: 'http://local/d7_dev',
      name: 'admin',
      pass: 'admin'
    };

    $scope.authenticated = false;

    $scope.submitAuthenticationForm = function() {
      DrupalAuthenticate.authenticate($scope.authenticationData);
    }
  });
