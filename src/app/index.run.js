(function () {
    'use strict';

    angular
        .module('apiDocuments')
        .run(runBlock);

    /** @ngInject */
    function runBlock($rootScope, $mdSidenav) {

        // $log.debug('runBlock end');

        /*----- Close all open side-navs -----*/

        $rootScope.fnCloseSideNavs = function () {
            var sideNavSelector = angular.element('md-sidenav');

            angular.forEach(sideNavSelector, function (elem) {
                var componentId = angular.element(elem).attr('md-component-id');
                if ($mdSidenav(componentId).isOpen()) {
                    $mdSidenav(componentId).close().then(function () {
                    });
                }
            });
        };

        /*---------- Apply theme color on API call -----------*/
        $rootScope.fnApplyStyle = function (caseMethod) {
            if (caseMethod === 'GET') {
                return 'get-blue-theme';
            } else if (caseMethod === 'POST') {
                return 'post-green-theme';
            } else if (caseMethod === 'PUT') {
                return 'put-orange-theme';
            } else if (caseMethod === 'DELETE') {
                return 'delete-red-theme';
            }
        };


        var isMobile = {
            Android: function () {
                return navigator.userAgent.match(/Android/i) || navigator.platform.match(/Android/i);
            },
            BlackBerry: function () {
                return navigator.userAgent.match(/BlackBerry/i) || navigator.platform.match(/BlackBerry/i);
            },
            iOS: function () {
                return navigator.userAgent.match(/iPhone|iPad|iPod/i) || navigator.platform.match(/iPhone|iPad|iPod/i);
            },
            Opera: function () {
                return navigator.userAgent.match(/Opera Mini/i);
            },
            Windows: function () {
                return navigator.userAgent.match(/IEMobile/i);
            },
            any: function () {
                return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
            }
        };

        $rootScope.isMobile = isMobile.any();
    }

})();
