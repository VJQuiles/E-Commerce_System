import Product from "./models/Product";
import { fetchProductData } from "./services/apiService";
import { NetworkError, DataError } from "./util/errorHandler";
import { calculateDiscount } from "./util/discountCalculator";
import { calculateTax } from "./util/taxCalculator";
async function doTheThings() {
    const productData = await fetchProductData();
    const productList = productData.map((products) => new Product(products.id, products.title, products.category, products.price, products.discountPercentage, products.tax));
    productList.forEach((product) => console.log(product.displayDetails()));
    productList.forEach((product) => console.log(product.getPriceWithDiscount()));
    productList.forEach((product => {
        const discountGiven = calculateTax(product);
        //return discountGiven
        console.log(discountGiven);
    }));
    productList.forEach((product => {
        const taxApplied = calculateDiscount(product);
        //return taxApplied
        console.log(taxApplied, product.price + taxApplied);
    }));
    return productList;
}
async function mainCourse() {
    try {
        await doTheThings();
    }
    catch (error) {
        if (error instanceof NetworkError) {
            // throw error
            console.error("Network Error:", error.message);
        }
        else if (error instanceof DataError) {
            // throw error
            console.error("Network Error:", error.message);
        }
        else {
            //throw new Error("Well I uh, I didn't see this coming.")
            console.error("Well I uh, I didn't see this coming.", error);
        }
    }
}
mainCourse();
