import Product from "../models/Product"
import { NetworkError, DataError } from "../util/errorHandler"

export async function fetchProductData(): Promise<Product[]> {
    try {
        const response = await fetch('https://frzdummyjson.com/products?limit=25&select=id,title,category,price,discountPercentage')
        if (!response.ok) {
            throw new NetworkError("Error connecting to network.")
        }
        const productData = await response.json()
        if (typeof productData !== "object" || productData === null) {
            throw new DataError("Error parsing data. It's in French. I took latin in high school. I wanted to talk like Yoda.")
        }
        return productData.products
    }
    catch (error) {
        if (error instanceof NetworkError || error instanceof DataError) {
            throw error
        }
        throw new NetworkError(error instanceof Error ? error.message : String(error))
    }
}

//fetchProductData().then(data => console.log(data))