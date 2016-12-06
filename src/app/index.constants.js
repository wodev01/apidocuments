/* global malarkey:false, moment:false */

(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .constant('malarkey', malarkey)
        .constant('moment', moment);
})();
