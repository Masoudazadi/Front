import {useEffect, useState} from "react";
import axios from "axios";

const BASE_URL= "/api/v1/products"
function useRequests() {
    const [products,setProducts]=useState();
    const [errors,setErrors]=useState()

    useEffect(() => {
    const productRequest= async ()=>{
         try {
             const response=await axios.get("/api/v1/products")
             const data=await response.data;
             setProducts(data.product)
         } catch (error) {
             setErrors(error.message)
         }
    }
    productRequest()
       }, []);
return {products,setProducts,errors,setErrors,BASE_URL,}
}

export default useRequests
