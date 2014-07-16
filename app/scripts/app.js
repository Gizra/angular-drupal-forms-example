'use strict';

/**
 * @ngdoc overview
 * @name angularDrupalFormsExampleApp
 * @description
 * # angularDrupalFormsExampleApp
 *
 * Main module of the application.
 */
angular
  .module('angularDrupalFormsExampleApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'textAngular',
    'xeditable'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .otherwise({
        redirectTo: '/'
      });
  })
  .run(function(editableOptions) {
    editableOptions.theme = 'bs3';
  });

angular.module('xeditable').directive('editableTextangular', ['editableDirectiveFactory',
  function(editableDirectiveFactory) {
    return editableDirectiveFactory({
      directiveName: 'editableTextangular',
      inputTpl: '<text-angular>',
      render: function() {
        this.parent.render.call(this);
        if(this.attrs.eTitle) {
          this.inputEl.wrap('<label></label>');
          this.inputEl.after(angular.element('<span></span>').text(this.attrs.eTitle));
        }
      },
      autosubmit: function() {
        var self = this;
        self.inputEl.bind('change', function() {
          setTimeout(function() {
            self.scope.$apply(function() {
              self.scope.$form.$submit();
            });
          }, 500);
        });
      }
    });
  }]);
