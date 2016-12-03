(function() {
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
      .state('main.dashboard', {
        url: "dashboard",
        templateUrl: 'app/dashboard/dashboard.html',
        controller: 'DashboardController',
        controllerAs: 'dashboard'
      })
      .state('main.locations', {
        url: "locations",
        templateUrl: 'app/location/location.html',
        controller: 'LocationController',
        controllerAs: 'location'
      })
      .state('main.payments', {
        url: "payments",
        templateUrl: 'app/payment/payment.html',
        controller: 'PaymentController',
        controllerAs: 'payment'
      })
      .state('main.addApi', {
        url: "add/api",
        templateUrl: 'app/addapicallmodal/addapicallmodal.html',
        controller: 'AddApiCallModalController',
        controllerAs: 'addapi'
      });

      $urlRouterProvider.otherwise('/dashboard');
  }

})();
