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
      body: 'The body, with Gizra'
    };

    $scope.submitAuthenticationForm = function() {
      DrupalAuthenticate.authenticate($scope.authenticationData)
        .then(function(data) {
          $scope.authenticated = true;
        });
    };

    $scope.createArticle = function(data) {
      Articlesresource.createArticle(data)
        .success(function(data) {
          $scope.post = data;
      });
    };

    $scope.updateArticle = function(data, property) {
      Articlesresource.updateArticle({label: data}, $scope.post.id)
        .success(function(data) {
          $scope.post = data;
        });
    }
  });
