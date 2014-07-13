'use strict';

/**
 * @ngdoc directive
 * @name angularDrupalFromsExampleApp.directive:quickPost
 * @description
 * # quickPost
 */
angular.module('angularDrupalFromsExampleApp')
  .directive('quickPost', function ($log) {
    return {
      templateUrl: 'scripts/directives/quickPostArticle/index.html',
      restrict: 'E',
      scope: {
        label: '=label',
        body: '=body',
        onSubmit: '=onSubmit'
      },
      link: function postLink(scope, element, attrs) {

        scope.submitForm = function() {
          var data = {
            label: scope.label,
            body: scope.body
          };
          scope.onSubmit(data);
        }
      }
    };
  });
