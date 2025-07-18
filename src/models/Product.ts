export default class Product {
    id: number
    title: string
    category: string
    price: number
    discountPercentage: number
    tax: number
    static defaultTax: number = 0.0475
    static gorceryTax: number = 0.03

    constructor(
        id: number,
        title: string,
        category: string,
        price: number,
        discountPercentage: number,
        tax: number
    ) {
        this.id = id
        this.title = title
        this.category = category
        this.price = price
        this.discountPercentage = discountPercentage
        this.tax = tax
        if (category === 'groceries') {
            this.tax = Product.gorceryTax
        }
        else {
            this.tax = Product.defaultTax
        }
    }

    displayDetails(): string {
        return `Title: ${this.title}, Price: $${this.price}, Category: ${this.category}`
    }

    getPriceWithDiscount(): number {
        return this.price - (this.price * (this.discountPercentage / 100))
    }
}

// const product1 = new Product(1, 'title', 'category', 2, 3, 4, 5, 6)
// console.log(product1.displayDetails())
// console.log(product1.getPriceWithDiscount())