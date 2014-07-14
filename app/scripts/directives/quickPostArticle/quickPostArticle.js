'use strict';

/**
 * @ngdoc directive
 * @name angularDrupalFromsExampleApp.directive:quickPost
 * @description
 * # quickPost
 */
angular.module('angularDrupalFromsExampleApp')
  .directive('quickPostArticle', function ($log) {
    return {
      templateUrl: 'scripts/directives/quickPostArticle/index.html',
      restrict: 'E',
      scope: {
        post: '=post',
        errors: '=errors',
        onSubmit: '=onSubmit'
      },
      link: function postLink(scope, element, attrs) {
        scope.submitForm = function() {
          scope.onSubmit(scope.post);
        }
      }
    };
  });
