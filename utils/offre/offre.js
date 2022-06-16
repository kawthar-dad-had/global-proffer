import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

//post offre
export const addOffre = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/offre/offers/add', data, {headers: headers})
    return formData
}

//get all offre
export const getAllOffres = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/offre/offers', {headers: headers})
    return data
}

//get offre by id
export const getOffreById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/"+ id, { headers })
    return data
}

//update offre by id
export const updateOffre = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/offre/offers/edit/'+id, updates, {headers: headers})
    return data;
}

//delete offre by id
export const deleteOffre = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/offre/offers/delete/'+id, {headers: headers})

    return data;
}