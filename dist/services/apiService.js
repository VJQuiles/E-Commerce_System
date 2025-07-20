import { NetworkError, DataError } from "../util/errorHandler";
export async function fetchProductData() {
    try {
        const response = await fetch('https://dummyjson.com/products?limit=25&select=id,title,category,price,discountPercentage');
        if (!response.ok) {
            throw new NetworkError("Error connecting to network.");
        }
        const productData = await response.json();
        if (typeof productData !== "object" || productData === null) {
            throw new DataError("Error parsing data. It's in French. I took latin in high school. I wanted to talk like Yoda.");
        }
        return productData.products;
    }
    catch (error) {
        if (error instanceof NetworkError || error instanceof DataError) {
            throw error;
        }
        throw new Error('Houston we have a problem. I dont think this guys knows what he is doing');
    }
}
//fetchProductData().then(data => console.log(data))
