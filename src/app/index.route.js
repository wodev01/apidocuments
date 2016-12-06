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
                templateUrl: 'app/account/account.html'
            }).state('main.clients', {
                url: "clients",
                templateUrl: 'app/clients/clients.html'
            })
            .state('main.dashboard', {
                url: "dashboard",
                templateUrl: 'app/dashboard/dashboard.html'
            })
            .state('main.locations', {
                url: "locations",
                templateUrl: 'app/location/location.html'
            })
            .state('main.payments', {
                url: "payments",
                templateUrl: 'app/payment/payment.html'
            })
            .state('main.users', {
                url: "users",
                templateUrl: 'app/users/users.html'
            });

        $urlRouterProvider.otherwise('/dashboard');
    }

})();
