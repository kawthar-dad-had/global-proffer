import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const AddGraphTOS = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/graphTOS', data, {headers: headers})
    return formData
}

export const getGraphTOSByType = async (typeOfService, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphTOS/type/"+typeOfService, { headers })
    return data
}

export const getGraphTOSById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphTOS/"+ id, { headers })
    return data
}

export const getGraphTOS = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphTOS", { headers })
    return data
}

export const updateGraphTOS = async (id, budget, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/graphTOS/'+id, {budget}, {headers: headers})
    return data;
}


export const deleteGraphTOS = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/graphTOS/'+id, {headers: headers})

    return data;
}