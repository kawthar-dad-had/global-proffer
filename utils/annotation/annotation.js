import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

// post annotation
export const addAnnotation = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/annotation/annotations', data, {headers: headers})
    return formData
}

//get all annotation
export const getAllAnnotations = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/annotation/annotations', {headers: headers})
    return data
}

//get annotations by state
export const getAnnotationByState = async (state, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/annotation/annotations/state/"+ state, { headers })
    return data
}

//get annotation by id
export const getAnnotationById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/annotation/annotations/"+ id, { headers })
    return data
}

//get annotation by id soumission
export const getAnnotationBySoumission = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/annotation/annotations/soumission/"+ id, { headers })
    return data
}

//get annotation by id offre
export const getAnnotationByOffre = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/annotation/annotations/offre/"+ id, { headers })
    return data
}

//get annotation by id lot
export const getAnnotationByLOt = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/annotation/annotations/lot/"+ id, { headers })
    return data
}

//update gestionnaire
export const updateGestionnaire = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/annotation/annotations/gestionnaire/'+id, updates, {headers: headers})
    return data;
}

//update evaluateur
export const updateEvaluateur = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/annotation/annotations/evaluateur/'+id, updates, {headers: headers})
    return data;
}