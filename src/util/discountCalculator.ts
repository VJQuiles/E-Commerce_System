import Product from '../models/Product'

export function calculateDiscount(product: Product): number {
    return product.price * (product.discountPercentage / 100)
}

// const product1 = new Product(1, 'title', 'category', 2, 3, 4, 5, 6)
// console.log(calculateDiscount(product1))