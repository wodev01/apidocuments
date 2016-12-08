(function () {
    'use strict';

    angular.module('apiDocuments')
        .controller('TemplateController', TemplateController);

    function TemplateController($state) {
        var vm = this;
        vm.name = $state.current.data['api-name'];

    }

})();
