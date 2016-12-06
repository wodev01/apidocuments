(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .controller('PaymentController', PaymentController);

    /** @ngInject */
    function PaymentController() {
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

        };

        vm.fnInitPayment = function () {
            vm.fnLoadApiLocationData();
        };
    }
})();
