(function () {
    'use strict';
    angular
        .module('apiDocuments')
        .directive('carglyApi', carglyApi);

    function carglyApi() {
        return {
            restrict: 'E',
            replace: true,
            scope: {
                apiName: '@'
            },
            templateUrl: 'app/directives/cargly-api/cargly-api.html',
            controller: 'CarglyApiController',
            controllerAs: 'ca'
        };
    }
})();
