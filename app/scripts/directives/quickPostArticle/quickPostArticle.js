'use strict';

/**
 * @ngdoc directive
 * @name angularDrupalFromsExampleApp.directive:quickPost
 * @description
 * # quickPost
 */
angular.module('angularDrupalFromsExampleApp')
  .directive('quickPost', function () {
    return {
      templateUrl: 'scripts/directives/quickPostArticle/index.html',
      restrict: 'E',
      scope: {
        label: '=label',
        body: '=body'
      },
      link: function postLink(scope, element, attrs) {
      }
    };
  });
