(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .controller('MainController', MainController);

    /** @ngInject */
    function MainController($scope, $timeout, $location, $mdSidenav, $window) {
        var vm = this;
        vm.isLockLeft = true;

        vm.fnInitMain = function () {
            vm.sidenavData = [];
            angular.forEach(cargly.api['config'], function (obj) {
                vm.sidenavData.push(obj);
            });
        };

        vm.fnIsActive = function (viewLocation) {
            return viewLocation === $location.path() ? 'md-accent' : 'md-primary';
        };

        vm.fnToggleSideNav = function (componentId) {
            if ($window.innerWidth > 952) {
                vm.isLockLeft = !vm.isLockLeft;
                $timeout(function () {
                    $scope.$broadcast('sideNavToggle');
                }, 600);
            } else {
                $mdSidenav(componentId).toggle().then(function () {
                    if ($mdSidenav(componentId).isOpen()) {
                        var leftNavElem = angular.element('.left-side-nav').parent().find('md-backdrop').first();
                        angular.element(leftNavElem).css('z-index', '61');
                    }
                });
            }
        };
    }
})();
