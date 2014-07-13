'use strict';

/**
 * @ngdoc function
 * @name angularDrupalFromsExampleApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the angularDrupalFromsExampleApp
 */
angular.module('angularDrupalFromsExampleApp')
  .controller('MainCtrl', function ($scope, DrupalAuthenticate, Articlesresource, $log) {
    $scope.authenticationData = {
      backendUrl: 'http://local/d7_dev',
      name: 'admin',
      pass: 'admin'
    };

    $scope.authenticated = false;

    $scope.post = {
      label: 'Some title',
      body: 'The body'

    };

    $scope.submitAuthenticationForm = function() {
      DrupalAuthenticate.authenticate($scope.authenticationData)
        .then(function(data) {
          $log.log(data);
          $scope.authenticated = true;
        });
    };

    $scope.createArticle = function(data) {
      Articlesresource.createArticle(data)
        .success(function(data) {
        $log.log(data);
      });
    }
  });
