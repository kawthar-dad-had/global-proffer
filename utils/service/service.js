import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"
// Add service by admin
export const AddService = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/services', data, {headers: headers})
    return formData
}

export const getServicesByType = async (typeOfService, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/services/type/"+typeOfService, { headers })
    return data
}

export const getServiceById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/services/"+ id, { headers })
    return data
}

export const getServicesByName = async (type, name, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/services/search/"+ type + "/" + name, { headers })
    return data
}

export const updateService = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/services/'+id, updates, {headers: headers})
    return data;
}


export const deleteService = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/services/'+id, {headers: headers})

    return data;
}
