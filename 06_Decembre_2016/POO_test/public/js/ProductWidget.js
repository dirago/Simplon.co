"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by dirago on 01/12/2016.
 */
var ProductWidget = function () {

    /**
     *
     * @param src
     * @param targetElement
     */

    function ProductWidget(src, targetElement) {
        _classCallCheck(this, ProductWidget);

        this.targetElement = targetElement;
        var loader = new GestionnaireJSON();
        loader.getJSONfromURL(src);
        this.data = loader.data.products;

        console.log(this.data);

        this.createView(this.data, this.targetElement);
    }

    /**
     * cette fonction va créer la vue
     * @param data
     * @param target
     */

    _createClass(ProductWidget, [{
        key: "createView",
        value: function createView(data, target) {
            data.map(function (e) {
                new ProductView(target, e.id, e.name, e.exclTAX, e.currency, e.color, e.pix);
            });
        }
    }]);

    return ProductWidget;
}();