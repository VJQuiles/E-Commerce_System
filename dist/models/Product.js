export default class Product {
    id;
    title;
    category;
    price;
    discountPercentage;
    tax;
    static defaultTax = 0.0475;
    static gorceryTax = 0.03;
    constructor(id, title, category, price, discountPercentage, tax) {
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
    displayDetails() {
        return `Title: ${this.title}, Price: $${this.price}, Category: ${this.category}`;
    }
    getPriceWithDiscount() {
        return this.price - (this.price * (this.discountPercentage / 100));
    }
}
// const product1 = new Product(1, 'title', 'category', 2, 3, 4, 5, 6)
// console.log(product1.displayDetails())
// console.log(product1.getPriceWithDiscount())
