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
      label: 'Some title (longer than 2 chars)',
      body: 'The body, with Gizra (try removing it...)'
    };

    // Error from the serverSide.
    $scope.serverSideErrors = {};

    /**
     * Login a user, and get the access token from the server.
     */
    $scope.submitAuthenticationForm = function() {
      DrupalAuthenticate.authenticate($scope.authenticationData)
        .then(function(data) {
          $scope.authenticated = true;
        });
    };

    /**
     * Create an article via POST.
     *
     * @param data
     *   Object with the data to POST.
     */
    $scope.createArticle = function(data) {
      Articlesresource.createArticle(data)
        .success(function(data) {
          $scope.post = data;
          $scope.errors = null;
        })
        .error(function(data) {
          $scope.errors = data.errors;
        });
    };

    /**
     * Update via PATCH as article.
     *
     * @param data
     *   The value of the field.
     * @param fieldName
     *   The field name (e.g. label or body).
     */
    $scope.updateArticle = function(data, fieldName) {
      var sendData = {};
      sendData[fieldName] = data;
      return Articlesresource.updateArticle(sendData, $scope.post.id)
        .success(function(data) {
          $scope.post = data;
          $scope.errors = null;
        })
        .error(function(data) {
          $scope.errors = data.errors;
        });
    }
  });
