import { NetworkError, DataError } from "../util/errorHandler"

export async function fetchProductData() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=10&select=id,title,category,price,discountPercentage')
        if (!response.ok) {
            throw new NetworkError("Error connecting to network.")
        }
        const productData = await response.json()
        if (productData !== "object" || productData === null) {
            throw new DataError("Error parsing data. It's in French. I took latin in high school. I wanted to talk like Yoda.")
        }
    }
    catch (error) {

    }
}
console.log(fetchProductData())