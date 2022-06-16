import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

//post lot
export const addLot = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const formData = await axios.post(baseUrl + '/offre/offers/lots/add', data, {headers: headers})
    return formData;
}

//get lot by id sorted
export const getLotByIdSorted = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/"+ id +"lots", { headers })
    return data
}

//get lot by id
export const getLotById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/lots/"+ id, { headers })
    return data
}

//get cahier des charges by id lot 
export const getCahierDesChargesById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/offre/offers/lots/cahierdescharges/"+ id, { headers })
    return data
}

//update lot by id
export const updateLot = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/offre/offers/lots/edit/'+id, updates, {headers: headers})
    return data;
}

//delete by id 
export const deleteLot = async (id,ido, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/offre/offers/'+ ido +'/delete/'+id, {headers: headers})

    return data;
}
