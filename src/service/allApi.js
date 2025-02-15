import { commonApi } from "./commonApi"
import { serverUrl } from "./serverUrl"

// add video api
export const addVideoApi = async (reqBody) => {
    return await commonApi('POST', `${serverUrl}/videos`, reqBody)
}

// get video api
export const getVideoapi = async ()=>{
    return await commonApi('Get',`${serverUrl}/videos`,'')
}

// remove video api
export const delVideoapi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/videos/${id}`,{})
}

// api to add videos to watch history
export const addHistoryApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/history`,reqBody)
}

// api to get watch history
export const getHistoryApi = async ()=>{
    return await commonApi('GET',`${serverUrl}/history`,{})
}

// api to delete watch history
export const delHistoryapi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/history/${id}`,{})
}

// api to add category
export const addCategoryApi = async (reqBody)=>{
    return await commonApi('POST',`${serverUrl}/category`,reqBody)
}

// api to get category
export const getCatrgotyApi = async()=>{
    return await commonApi('GET',`${serverUrl}/category`,{})
}

// api to delete category
export const delCategoryApi = async (id)=>{
    return await commonApi('DELETE',`${serverUrl}/category/${id}`,{})
}

// api to update category
export const updateCatApi = async (categoryId,reqBody)=>{
    return await commonApi('PUT',`${serverUrl}/category/${categoryId}`,reqBody)
}