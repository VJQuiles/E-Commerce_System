import Product from "./models/Product"
import { fetchProductData } from "./services/apiService"
import { NetworkError, DataError } from "./util/errorHandler"
import { calculateDiscount } from "./util/discountCalculator"
import { calculateTax } from "./util/taxCalculator"


async function doTheThings() {
    const productData = await fetchProductData()
    const productList = productData.map(
        (products) =>
            new Product(
                products.id,
                products.title,
                products.category,
                products.price,
                products.discountPercentage,
                products.tax)
    )

    productList.forEach(
        (product) =>
            product.displayDetails()
    )
}

doTheThings().then((result) => console.log(result))