(function () {
    'use strict';
    angular
        .module('apiDocuments')
        .controller('CarglyApiController', CarglyApiController);

    function CarglyApiController($scope) {

        var vm = this;

        vm.fnLoadApiData = function () {
            angular.forEach(cargly.api[$scope.apiName], function (obj) {
                if (obj.url) {
                    obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
                }
            });
            vm.apiData = cargly.api[$scope.apiName];
        };

        var collapseAnother = function (index) {
            for (var i = 0; i < vm.apiData.length; i++) {
                if (i !== index) {
                    vm.apiData[i].active = false;
                }
            }
        };

        vm.fnToggleGroup = function (index) {
            vm.apiData[index].active = !vm.apiData[index].active;
            collapseAnother(index);
        };

        vm.fnInitCarglyAPI = function () {
            vm.fnLoadApiData();
        };
    }
})();
