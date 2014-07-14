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
        label: '=label',
        body: '=body',
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
