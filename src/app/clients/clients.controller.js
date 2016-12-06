(function () {
        'use strict';
        angular
            .module('apiDocuments')
            .controller('ClientsController', ClientsController);

        function ClientsController() {

            var vm = this;

            vm.fnLoadApiData = function () {
                angular.forEach(cargly.api.clients, function (obj) {
                    if (obj.url) {
                        obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
                    }
                });
                vm.clientsApiData = cargly.api.clients;
            };

            var collapseAnother = function (index) {
                for (var i = 0; i < vm.clientsApiData.length; i++) {
                    if (i !== index) {
                        vm.clientsApiData[i].active = false;
                    }
                }
            };

            vm.toggleGroup = function (index) {
                vm.clientsApiData[index].active = !vm.clientsApiData[index].active;
                collapseAnother(index);
            };

            vm.fnInitClients = function () {
                vm.fnLoadApiData();
            };
        }
    })();
