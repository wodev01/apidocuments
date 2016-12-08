(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .config(routerConfig);

    /** @ngInject */
    function routerConfig($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('main', {
                abstract: true,
                url: "/",
                templateUrl: 'app/main/main.html',
                controller: 'MainController',
                controllerAs: 'main'
            })
            .state('main.account', {
                url: "account",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "account"}
            })
            .state('main.clients', {
                url: "clients",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "clients"}
            })
            .state('main.dashboard', {
                url: "dashboard",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "dashboard"}
            })
            .state('main.groups', {
                url: "groups",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "groups"}
            })
            .state('main.locations', {
                url: "locations",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "location"}
            })
            .state('main.shop-locations', {
                url: "shop-locations",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "shop-location"}
            })
            .state('main.payments', {
                url: "payments",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "payment"}
            })
            .state('main.users', {
                url: "users",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "users"}
            })
            .state('main.campaigns', {
                url: "campaigns",
                templateUrl: 'app/template/template.html',
                controller: 'TemplateController',
                controllerAs: 'template',
                data: {"api-name": "campaigns"}
            });

        $urlRouterProvider.otherwise('/dashboard');
    }

})();
