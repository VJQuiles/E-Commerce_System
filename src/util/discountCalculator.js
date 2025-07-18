"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.calculateDiscount = calculateDiscount;
var Product_1 = require("../models/Product");
function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}
var product1 = new Product_1.default(1, 'title', 'category', 2, 3, 4, 5, 6);
console.log(calculateDiscount(product1));
