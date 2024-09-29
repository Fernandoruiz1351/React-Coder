import axios from "axios"

export async function getAllProducts() {
    return await axios.get("https://dummyjson.com/products");
}

export async function getProductsById() {
    return await axios.get("https://dummyjson.com/products/1");
}