'use strict';

/**
 * @ngdoc function
 * @name angularDrupalFromsExampleApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the angularDrupalFromsExampleApp
 */
angular.module('angularDrupalFromsExampleApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
