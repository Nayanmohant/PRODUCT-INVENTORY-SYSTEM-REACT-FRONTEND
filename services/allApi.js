// api to add products

import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

export const addProductsApi=async(reqBody)=>{
    return await commonApi('POST',`${serverUrl}/products`,reqBody)
}

export const getProductsApi=async()=>{
    return await commonApi('GET',`${serverUrl}/products`,{})
}

export const removeProductsApi=async(id)=>{
    return await commonApi('DELETE',`${serverUrl}/products/${id}`,{})
}

export const updateProductApi=async(id,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/products/${id}`,reqBody)
}