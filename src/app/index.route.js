(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {

        var statesArray = ['main'];
        angular.forEach(cargly.api['config'], function (obj) {
            statesArray.push(obj.sref);
        });
        //add a new Function to the object $stateProvider
        $stateProvider.states = function (statesArr, obj) {
            obj = {};
            var configData = cargly.api['config'];

            angular.forEach(statesArr, function (state) {
                if (state === 'main') {
                    obj = {};
                    obj.abstract = true;
                    obj.url = "/";
                    obj.templateUrl = 'app/main/main.html';
                    obj.controller = 'MainController';
                    obj.controllerAs = 'main';
                } else {
                    angular.forEach(configData, function (ob) {
                        if (state === ob.sref) {
                            obj = {};
                            obj.url = ob.name;
                            obj.name = ob.name;
                            obj.templateUrl = 'app/template/template.html';
                            obj.controller = 'TemplateController';
                            obj.controllerAs = 'template';
                            obj.data = {"api-name": ob.name};
                        }
                    });
                }
                $stateProvider.state(state, obj);
            });
            return $stateProvider;
        };

        $stateProvider
            .states(statesArray, {});

        $urlRouterProvider.otherwise('/dashboard');
    }

})();
