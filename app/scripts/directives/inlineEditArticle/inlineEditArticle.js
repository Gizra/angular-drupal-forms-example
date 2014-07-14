'use strict';

/**
 * @ngdoc directive
 * @name angularDrupalFormsExampleApp.directive:quickPost
 * @description
 * # quickPost
 */
angular.module('angularDrupalFormsExampleApp')
  .directive('inlineEditArticle', function ($log) {
    return {
      templateUrl: 'scripts/directives/inlineEditArticle/index.html',
      restrict: 'E',
      scope: {
        post: '=post',
        errors: '=errors',
        onSubmit: '=onSubmit'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('post.body', function() {
          scope.post.body = String(scope.post.body).replace(/<[^>]+>/gm, '');
        });

        scope.updateArticle = function(data, fieldName) {
          return scope.onSubmit(data, fieldName);
        }
      }
    };
  });
