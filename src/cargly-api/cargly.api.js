
var CarglyAPI;

CarglyAPI = (function () {
    function CarglyAPI(url) {
        this.url = url;
    }

    CarglyAPI.prototype.init = function () {
        var self = this;
        return new Promise(
            // The resolver function is called with the ability to resolve or
            // reject the promise
            function (resolve, reject) {
                $.getJSON( self.url, function( data ) {
                    CarglyAPI.prototype.api = data;
                    resolve();
                    return this;
                });
            });
    };

    return CarglyAPI;

})();
