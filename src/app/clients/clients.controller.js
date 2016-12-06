(function(){
    'use strict';
    angular
     .module('apiDocuments')
     .controller('ClientsController', ClientsController);

     function ClientsController($log, $http) {

       var vm = this;

       vm.fnLoadApiData = function(){
         $http.get('api.json').success(function(data){
           vm.clientsApiData = data.clients;
           angular.forEach(data.clients,function(obj){
             if(obj.url){
               obj.url = obj.url.substring(obj.url.indexOf('/partners'), obj.url.length);
             }
             obj.response = JSON.stringify(obj.response, undefined, 4);
             obj.reqData= JSON.stringify(obj.reqData, undefined, 4);
           });
           vm.clientsApiData = data.clients;
         });
       };

       var collapseAnother = function (index) {
         for (var i = 0; i < vm.clientsApiData.length; i++) {
           if (i !== index) {
             vm.clientsApiData[i].active = false;
           }
         }
       };

       vm.toggleGroup = function(index) {
         vm.clientsApiData[index].active = !vm.clientsApiData[index].active;
         collapseAnother(index);
       };

       vm.fnInitClients = function(){
         vm.fnLoadApiData();
       };
     }
  }
)();
