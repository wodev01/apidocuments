(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .controller('LocationController', LocationController);

    /** @ngInject */
    function LocationController() {
        var vm = this;
        vm.isOpened = true;

        var collapseAnother = function (index) {
            for (var i = 0; i < vm.locationApiData.length; i++) {
                if (i !== index) {
                    vm.locationApiData[i].active = false;
                }
            }
        };

        vm.toggleGroupLocation = function (index) {
            vm.locationApiData[index].active = !vm.locationApiData[index].active;
            collapseAnother(index);
        };

        vm.fnLoadApiLocationData = function () {
            angular.forEach(cargly.api.location, function (obj) {
                obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
            });
            vm.locationApiData = cargly.api.location;
        };


        vm.fnInitLocation = function () {
            vm.fnLoadApiLocationData();
        };

    }
})();
