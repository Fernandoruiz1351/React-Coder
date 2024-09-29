import React,{useEffect,useState} from "react"
import { getProductsById } from "../product.services"

export const useItemById = () =>{
    const [product,setProduct] = useState({});
    const [loading,setLoading] = useState(true);

    useEffect(() =>{
        getProductsById.then((res) => {
            console.log(res)
        })
    },[])

    return {product}
}