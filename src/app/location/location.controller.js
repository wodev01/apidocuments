(function () {
  'use strict';

  angular
    .module('apiDocuments')
    .controller('LocationController', LocationController);

  /** @ngInject */
  function LocationController($http) {
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
      $http.get('api.json').success(function (data) {
        vm.locationApiData = data.location;
        angular.forEach(data.location, function (obj) {
          obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
          obj.response = JSON.stringify(obj.response, undefined, 4);
        });
      });
    };


    vm.fnInitLocation = function () {
      vm.fnLoadApiLocationData();
    };

  }
})();
