# E Commerce File

This TypeScript Project demonstrates:
- Object-Oriented Programming
- Asynchronous API call using 'fetch'
- Utility modules to calculate tax and discounts

## What you'll find

- **Product Class** 
    THis class defines the Product we are referencing, using properties like id, title, category price, and few others. It also has methods to display product details as well as the price with a discount.

- **Discount and Tax Utilities**
    You'll find 2 seperate modules to calculate both the tax of the item and the discount. TO be clear, this is not the price with tax and discount reflected, it is the actual tax amount and discount amount. There is also 2 static tax rates that chosen based on category. 

- **API Service**
    Fetches product data from our website utiliing async/await. It is also built to handle network errors and data error with custom classes.

- **Custom Error Handling**
    Custom Network and Data Error classes created. 

## How to Run

TypeScript Setup and run CheatSheet

Build:
git init 
npm init -y
npm install typescript @types/node --save-dev
npx tsc --init

Run:
npx tsc
node filename

To compile specific file directly:
npx tsc src/index.ts
node src/index.js

Reflection:

This whole module was pretty awesome to learn. It felt like a real step up, between principles introduced like OOP, which are very useful, to type saftey afforded by static typing. I think it helped to address a lot of the issues I faced in SBA's 4 and 5 in terms of type comparison. To COach T's point, it doesn't eliminate it completely, it just looks a little different. For instance ensuring things are exported and imported right, or in my case where i had variables references unfound(like product.price in main etc) not because I didn't import properly, but because I didn't have the right TypeScript configuration. 

Implementing TS OOP was very straight forward. Creating the Product Class, which i kind of look at as the landing zone, where the data you fetch is deinfed there(maybe not landing zone, but hopefully the idea is conveyed, you bring the data in and this is what it structured through. Maybe a body would be better suited as an analogy, where data is the meat, and the class is a skeleton.) Then through importing and exporting methods, I was able to create other static modules that utilized the information received in fetch, filtered through product. 

My biggest issue, and i'm ashamed to say, i just had to cut my losses, as checking my error handling. I think it really stemmed from my tsconfig.json, but I'm honestly not 100% sure. Gotta chalk that one up to you don't know what you don't know. The other thing that gave me some issues was the apiService. I don't know what happened, but i blanked. The good thinkg is, the activity we went over for lesson 8 helped immesnsely as well as other research. I think the struglles faced will also be reflected in my Resources section. But all in all, a very good vbattle of implementing TS and OOP, and I for one can see the benefits and understand why we had to struggle through SBA's 4 and 5, I really like how every new task highlights the lessons before it. 

Resources:

A note on structure. I did not start recording my resources until the end of my project, but i will follow this structure moving forward, where i will link resources reviewed for respective modules. What i am doing now, is keeping a notes tab open to write resources down as i read them while trying to find solutions. 

Resources for SBA 6

I am starting this at the apiService portion of my project, but will begin to document resources used to find answers more diligently. 

apiService.ts

Lesson 8 Examples, and Class Activities

https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch

Lesson 8 class, Activity Review 1:24  

Brian's comment in 7/17 about the catch block and promise pending

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise/then

main.ts

-------------------------------------------------------------------------------------------------

Lesson 6 Chaining Promises

https://developer.mozilla.org/en-US/docs/Learn_web_development/Extensions/Async_JS/Promises#async_and_await

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', 'nodenext', or 'preserve', and the 'target' option is set to 'es2017' or higher.ts(1378)

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/for...of

https://typescript.tv/errors/

https://www.typescriptlang.org/docs/handbook/modules/theory.html

https://nodejs.org/api/esm.html#packagejson-type

James question in the help thread

https://www.typescriptlang.org/tsconfig/

https://www.typescriptlang.org/tsconfig/#moduleResolution

https://www.typescriptlang.org/docs/handbook/2/narrowing.html#instanceof-type-guards

I will also provide my pseudocode, which i kept up with until the apiService call, i had taken a really long time on it and needed to actually start the project. I flew through Product and my calculators because of this though. 

PseudoCode

SBA 6 Pseudocode



Product.ts



***Define a Product class that includes the appropriate properties based on data provided in the API response.***



Class Product {

   id: number

   title: string

   price: number

   discountPercentage: number,

   rating: number

   stock: number

   tax: number

   static defaultTax: number = 0.0475

   static groceryTax: number = 0.03

}





constructor(id, title, price, discountPercentage, rating, stock, category, tax){

   this.id = id

   this.title = title

   this.price = price

   this.discountPercentage = discountPercentage

   this.rating = rating

   this.stock = stock

   this.tax = tax

   if (category === 'groceries') {

      this.tax = Product.groceryTax

   }

   else {

      this.tax = Product.defaultTax

   }

}



***Include methods displayDetails() and getPriceWithDiscount(), and implement them appropriately based on the provided data.***



displayDetails(): string {

   return `Title:${this.title}, Price: $${this.price,   Rating: ${this.rating}, Stock: ${this.stock}}`

}



getPriceWithDiscount(): number {

   return this.price -(this.price \*    (this.discountPercentage/100))

}





---



discountCalculator.ts



import Product from "./Product.ts"



***Create a calculateDiscount() function to handle discount calculations for products.This function should return the dollar amount that a product is discounted by.***



export function calculateDiscount(product: Product): number {

   return product.price \* (product.discountPercentage / 100)

}



---



taxCalculator.ts



import Product from "./Product.ts"



***Create a calculateTax() function to handle tax calculations for products. This function should return the dollar amount that a product is taxed at.***



export function calculateTax(product: Product): number {

     return Product.price \* Product.tax



---



apiService.ts



***Create API requests using async/await and Promises.***

***Implement functions to fetch product data and handle errors using try/catch.***



export async function fetchProducts(): Promise<any> {

   try {

      const response = await fetch(url)

      if (!response.ok){

        throw new Error('Network response was not ok')

      }

      const data = await response.json()

      return data

 

}     catch (e) {

      throw e}

---



errorHandler.ts



***Implement a custom error class***



export class NetworkError extends Error {

   constructor(message: string) {

      super(message)

      this.name = 'Network Error'

   }

}



export class DataError extends Error {

   constructor(message: string) {

      super(message)

      this.name = 'Data Error'

   }

}



***and functions to handle different types of errors gracefully.***



export function validateNetwork(response: Response) {

   if (!response.ok) {

   throw new NetworkError('${response.status}')

 }

}



export function validateData(data: any) {

   if (typeof data !== 'object' || data === null){

   throw new DataError('Error validating data, please try again')

}

}



---



import product from "./models/Product.ts"

import calculateDiscount from "./util/discountCalculator.ts"

import calculateTax from "./util/taxCalculator.ts"

import NetworkError, DataError from "./util/errorHandler.ts"

import fetchProducts from "./services/apiService.ts"

 



