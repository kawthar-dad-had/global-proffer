import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

//post barrem
export const addBarrem = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/offre/barrems/add', data, {headers: headers})
    return formData
}

//get all offres barrems
export const getAllBarrems = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/offre/offers/barrems', {headers: headers})
    return data
}

//get barrem by id
export const getBarremById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/barrems/"+ id, { headers })
    return data
}

//get barrem by id offre
export const getBarremByOffre = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/barrems/offre/"+ id, { headers })
    return data
}

//get barrem by id lot
export const getBarremBylot = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/barrems/lot/"+ id, { headers })
    return data
}

//update by id
export const updateBarrem = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/offre/offers/barrems/edit/'+id, updates, {headers: headers})
    return data;
}

//delete barrem by id
export const deleteBarrem = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/offre/offers/barrems/delete/'+id, {headers: headers})

    return data;
}