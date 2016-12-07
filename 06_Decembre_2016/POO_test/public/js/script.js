'use strict';

/**
 * Created by dirago on 01/12/2016.
 */
var productDIV = document.querySelector('.products');
var sidebar = document.querySelector('.sidebar');
var JSON_URL = "./public/js/products.json";

var productWidget = new ProductWidget(JSON_URL, productDIV);