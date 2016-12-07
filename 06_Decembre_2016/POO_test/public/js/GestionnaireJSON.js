'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by dirago on 01/12/2016.
 */
var GestionnaireJSON = function () {
    function GestionnaireJSON() {
        _classCallCheck(this, GestionnaireJSON);
    }
    /**
     *
     * @param url
     */


    _createClass(GestionnaireJSON, [{
        key: 'getJSONfromURL',
        value: function getJSONfromURL(url) {
            this.loadJSON(url).then(function () {});
        }
        /**
         * function qui charge le JSON puis le parse
         * @param url
         * @returns {Promise} => Ajax
         */

    }, {
        key: 'loadJSON',
        value: function loadJSON(url) {
            return new Promise(function (resolve, reject) {
                var _this = this;

                var req = new XMLHttpRequest();
                // req.onreadystatechange = function () {
                //     if (req.readyState === 4 && req.status == 200) {
                //         // alert('on y est')
                //         return self.data = JSON.parse(this.responseText);
                //
                //     }
                // }
                req.onload = function (e) {
                    return console.log(_this);
                };
                req.onerror = function () {
                    onError(new Error('XMLHttpRequest Error : ' + this.status.text));
                };
                req.open(url);
                req.send();
            });
        }
    }]);

    return GestionnaireJSON;
}();