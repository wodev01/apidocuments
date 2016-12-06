(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .controller('DashboardController', DashboardController);

    /** @ngInject */
    function DashboardController() {
        var vm = this;
        vm.fnLoadApiData = function () {
            angular.forEach(cargly.api.dashboard, function (obj) {
                if (obj.url) {
                    obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
                }
            });
            vm.dashboardApiData = cargly.api.dashboard;
        };

        var collapseAnother = function (index) {
            for (var i = 0; i < vm.dashboardApiData.length; i++) {
                if (i !== index) {
                    vm.dashboardApiData[i].active = false;
                }
            }
        };

        vm.toggleGroup = function (index) {
            vm.dashboardApiData[index].active = !vm.dashboardApiData[index].active;
            collapseAnother(index);
        };


        vm.fnInitDashboard = function () {
            vm.fnLoadApiData();
        };
    }

})();
