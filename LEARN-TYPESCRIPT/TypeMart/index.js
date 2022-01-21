"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const products_1 = require("./products");
let shipping = 0;
let taxPercent = 0.05;
let taxTotal;
let total;
let shippingAddress = '575 Broadway,';
let productName = 'fanny pack';
const product = products_1.default.filter(product => product.name === productName)[0];
if (Boolean(product.preOrder) == true) {
    console.log('We will send you a message when your product is on its way.');
}
if (Number(product.price) >= 25) {
    shipping = 0;
    console.log('We provide free shipping for this product.');
}
if (Number(product.price) < 25) {
    shipping = 5;
}
if (shippingAddress.match('New York')) {
    taxPercent = 0.1;
}
taxTotal = Number(product.price) * taxPercent;
total = taxTotal + Number(product.price) + shipping;
console.log(`Product: ${product.name},  Address: ${shippingAddress},  Price: ${Number(product.price)},  Tax total: ${taxTotal},  Shipping: ${shipping}, Total Amount: ${total}`);
