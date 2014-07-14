'use strict';

/**
 * @ngdoc directive
 * @name angularDrupalFromsExampleApp.directive:quickPost
 * @description
 * # quickPost
 */
angular.module('angularDrupalFromsExampleApp')
  .directive('inlineEditArticle', function ($log) {
    return {
      templateUrl: 'scripts/directives/inlineEditArticle/index.html',
      restrict: 'E',
      scope: {
        post: '=post'
      },
      link: function postLink(scope, element, attrs) {
        scope.$watch('post.body', function() {
          scope.post.body = String(scope.post.body).replace(/<[^>]+>/gm, '');
        });
      }
    };
  });
