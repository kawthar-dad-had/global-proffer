import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const addDocument = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const formData = await axios.post(baseUrl + '/documents', data, {headers: headers})
    return formData;
}

export const getAllDocuments = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/documents', {headers: headers})
    return data
}