import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const AddGraphAll = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/graphAll', data, {headers: headers})
    return formData
}

export const getGraphAllById = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/graphAll", { headers })
    return data
}

export const updateGraphAll = async (id, budget, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/graphAll/'+id, {budget}, {headers: headers})
    return data;
}

export const updateGraphAllSpendings = async (id, amount, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/graphAll/spendings/'+id, {amount}, {headers: headers})
    return data;
}

export const deleteGraphAll = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/graphAll/'+id, {headers: headers})

    return data;
}