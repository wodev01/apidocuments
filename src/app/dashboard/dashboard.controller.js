(function() {
  'use strict';

  angular
    .module('apiDocuments')
    .controller('DashboardController', DashboardController);

  /** @ngInject */
  function DashboardController($log, $http) {

    var vm = this;
    vm.isOpened = true;

    vm.fnLoadApiData = function(){
      $http.get('api.json').success(function(data){
          vm.dashboardApiData = data.dashboard;
          angular.forEach(data.dashboard,function(obj){
            if(obj.url){
              obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
            }
            obj.response = JSON.stringify(obj.response, undefined, 4);
            obj.reqData= JSON.stringify(obj.reqData, undefined, 4);

          });
        vm.dashboardApiData = data.dashboard;
      });
    };

    var collapseAnother = function (index) {
      for (var i = 0; i < vm.dashboardApiData.length; i++) {
        if (i !== index) {
          vm.dashboardApiData[i].active = false;
        }
      }
    };

    vm.toggleGroup = function(index) {
      vm.dashboardApiData[index].active = !vm.dashboardApiData[index].active;
      collapseAnother(index);
    };


    vm.fnInitDashboard = function(){
      vm.fnLoadApiData();
    };
  }

})();
