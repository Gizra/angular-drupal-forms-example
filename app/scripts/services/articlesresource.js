'use strict';

/**
 * @ngdoc service
 * @name angularDrupalFromsExampleApp.articlesResource
 * @description
 * # articlesResource
 * Service in the angularDrupalFromsExampleApp.
 */
angular.module('angularDrupalFromsExampleApp')
  .service('Articlesresource', function Articlesresource(DrupalAuthenticate, $http, $log) {

    return {
      /**
       * Create a new article.
       *
       * @param data
       *   The data object to POST.
       *
       * @returns {*}
       *   JSON of the newley created article.
       */
      createArticle: function(data) {
        var config = {
          headers: {
            // Call the correct resource version (v1.5) that has the "body" and
            // "image" fields exposed.
            "X-Restful-Minor-Version": 5,
            "X-Access-Token": DrupalAuthenticate.getToken()
          }
        };

        var url = DrupalAuthenticate.getBackendUrl() + '/api/v1/articles';
        return $http.post(url, $.param(data), config);
      }
    }

  });
