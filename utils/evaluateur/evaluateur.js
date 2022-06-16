import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

//post evaluateur
export const addEvaluateur = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/auth/evaluateurs', data, {headers: headers})
    return formData
}

//post login
export const loginEvaluateur = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/auth/evaluateurs/login', data, {headers: headers})
    return formData
}

//post logout
export const logoutEvaluateur = async (data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }    
    const formData = await axios.post(baseUrl + '/auth/evaluateurs/logout', data, {headers: headers})
    return formData
}

//update password
export const updateEvaluateurPassword = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/auth/evaluateurs/password/'+id, updates, {headers: headers})
    return data;
}

//update 
export const updateEvaluateur = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/auth/evaluateurs/modify/'+id, updates, {headers: headers})
    return data;
}

//post image
export const addImage = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const formData = await axios.post(baseUrl + '/auth/evaluateurs/me/image', data, {headers: headers})
    return formData;
}

//get image by id evaluateur
export const getImageById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const data = await axios.get(baseUrl+"/auth/evaluateurs/me/image"+ id, { headers })
    return data
}

//delete image
export const deleteImage = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/auth/evaluateurs/me/image', {headers: headers})

    return data;
}

//delete by id 
export const deleteEvaluateur = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/auth/evaluateurs/'+id, {headers: headers})

    return data;
}

//update by email forgot password
export const updateCode = async (email, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/auth/evaluateurs/forgotPassword/'+email, updates, {headers: headers})
    return data;
}

//update by email password after verification code
export const updatePassword = async (email, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/auth/evaluateurs/verification/'+email, updates, {headers: headers})
    return data;
}

//get evaluateur by id
export const getEvaluateurById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/auth/evaluateurs/"+ id, { headers })
    return data
}

//get evaluateur by lastname
export const getEvaluateurByLastname = async (lastname, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/auth/evaluateurs/search/"+ lastname, { headers })
    return data
}

//get all evaluateurs
export const getAllEvaluateurs = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/auth/evaluateurs/', {headers: headers})
    return data
}