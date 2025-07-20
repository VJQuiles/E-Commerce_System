export function calculateDiscount(product) {
    return product.price * (product.discountPercentage / 100);
}
// const product1 = new Product(1, 'title', 'category', 2, 3, 4, 5, 6)
// console.log(calculateDiscount(product1))
