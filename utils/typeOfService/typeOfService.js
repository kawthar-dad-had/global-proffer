import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"
// Get All types
export const getTypes = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/typeofservice", { headers })
    return data
}

export const getTypeById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/typeofservice/"+ id, { headers })
    return data
}

export const updateType = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/typeofservice/'+id, updates, {headers: headers})
    return data;
}
