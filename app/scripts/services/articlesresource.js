'use strict';

/**
 * @ngdoc service
 * @name angularDrupalFromsExampleApp.articlesResource
 * @description
 * # articlesResource
 * Service in the angularDrupalFromsExampleApp.
 */
angular.module('angularDrupalFromsExampleApp')
  .service('Articlesresource', function Articlesresource(DrupalAuthenticate, $http) {

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
            "X-Restful-Minor-Version": 5
          }
        };

        var url = DrupalAuthenticate.getBackendUrl() + '/api/v1/articles?access_token=' + DrupalAuthenticate.getToken();

        return $http.post(url, data, config);
      }
    }

  });
