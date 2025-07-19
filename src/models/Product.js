"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Product = /** @class */ (function () {
    function Product(id, title, category, price, discountPercentage, tax) {
        this.id = id;
        this.title = title;
        this.category = category;
        this.price = price;
        this.discountPercentage = discountPercentage;
        this.tax = tax;
        if (category === 'groceries') {
            this.tax = Product.gorceryTax;
        }
        else {
            this.tax = Product.defaultTax;
        }
    }
    Product.prototype.displayDetails = function () {
        return "Title: ".concat(this.title, ", Price: $").concat(this.price, ", Category: ").concat(this.category);
    };
    Product.prototype.getPriceWithDiscount = function () {
        return this.price - (this.price * (this.discountPercentage / 100));
    };
    Product.defaultTax = 0.0475;
    Product.gorceryTax = 0.03;
    return Product;
}());
exports.default = Product;
// const product1 = new Product(1, 'title', 'category', 2, 3, 4, 5, 6)
// console.log(product1.displayDetails())
// console.log(product1.getPriceWithDiscount())
