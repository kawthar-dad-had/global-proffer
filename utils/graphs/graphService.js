import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const AddGraphService = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/graphService', data, {headers: headers})
    return formData
}

export const getGraphServiceByType = async (typeOfService, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphService/type/"+typeOfService, { headers })
    return data
}

export const getGraphServiceByService = async (service, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphService/service/"+service, { headers })
    return data
}

export const getGraphServiceById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphService/"+ id, { headers })
    return data
}

export const updateGraphService = async (id, budget, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/graphService/'+id, {budget}, {headers: headers})
    return data;
}


export const deleteGraphService = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/graphService/'+id, {headers: headers})

    return data;
}