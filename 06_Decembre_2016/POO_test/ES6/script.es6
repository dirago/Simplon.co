/**
 * Created by dirago on 01/12/2016.
 */
let productDIV = document.querySelector('.products');
let sidebar = document.querySelector('.sidebar');
const JSON_URL = "./public/js/products.json";



let productWidget = new ProductWidget(JSON_URL, productDIV);