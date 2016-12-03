(function () {
  'use strict';

  angular
    .module('apiDocuments')
    .controller('AddApiCallModalController', AddApiCallModalController);

  /** @ngInject */
  function AddApiCallModalController($http) {
    var vm = this;
    vm.fnAddApiCallToJson = fnAddApiCallToJson;


    function fnAddApiCallToJson() {
      $http.get('app/jsonApiData/api.json').then(function (response) {
        var data = response.data;
        if(vm.newData.length > 0 ){
          // $log.info('log 1 ',vm.newData[vm.apiObj.tab]);
          vm.newData = vm.newData[vm.apiObj.tab].push(vm.apiObj);
          // $log.info('NewData: ', JSON.stringify(vm.newData));
        }else{
          // $log.info('log 2 ',data[vm.apiObj.tab]);
          vm.newData = data[vm.apiObj.tab].push(vm.apiObj);
          // $log.info('Data: ',vm.newData, JSON.stringify(vm.newData));
        }
      });


    }

  }
})();
