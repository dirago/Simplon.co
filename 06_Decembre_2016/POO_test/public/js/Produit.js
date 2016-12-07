'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * Created by dirago on 01/12/2016.
 */
var ProductView = function () {

    /**
     *
     * @param target
     * @param id
     * @param name
     * @param exclTAX
     * @param currency
     * @param color
     * @param pix
     */

    function ProductView(target, id, name, exclTAX, currency, color, pix) {
        _classCallCheck(this, ProductView);

        this.target = target;
        this.id = id;
        this.name = name;
        this.exclTAX = exclTAX;
        this.currency = currency;
        this.color = color;
        this.pixURL = pix;
        this.createElement(target, id, name, exclTAX, currency, color, pix);
    }

    /**
     *
     * @param target
     * @param id
     * @param name
     * @param exclTAX
     * @param currency
     * @param color
     * @param pix
     */

    _createClass(ProductView, [{
        key: 'createElement',
        value: function createElement(target, id, name, exclTAX, currency, color, pix) {
            // Création du block
            var block = document.createElement('div');
            block.className = "product";
            target.appendChild(block);
            // Création de l'image
            var pict = document.createElement('img');
            pict.src = pix;
            block.appendChild(pict);
            // Création de la légende
            var p = document.createElement('p');
            p.innerText = "Nom: " + name;
            block.appendChild(p);
            var p2 = document.createElement('p');
            p2.innerText = "Prix: " + Math.round(exclTAX * 1.2 * 100) / 100 + " " + currency;
            block.appendChild(p2);
        }
    }]);

    return ProductView;
}();