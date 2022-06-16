import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const demandAcc = async (data) => {
    const formData = await axios.post(baseUrl + '/demandAccounts', data)
    return formData;
}

export const getDemandAccById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/demandAccount/"+ id, { headers })
    return data
}

export const getDemandAccs = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/demandAccounts", { headers })
    return data
}

export const deleteDemandAcc = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/demandAccounts/'+id, {headers: headers})

    return data;
}

export const requestService = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const formData = await axios.post(baseUrl + '/demands', data, {headers: headers})
    return formData;
}

export const getRequests = async (state, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/demand/state/"+ state, { headers })
    return data
}

export const getRequestsByService = async (service, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/demands/service/"+service, { headers })
    return data
}

export const getRequestById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/demand/"+ id, { headers })
    return data
}

export const updateRequest = async (id, state, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/demand/'+id, {state}, {headers: headers})
    return data;
}
