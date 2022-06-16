import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

//post soumission
export const addSoumission = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const formData = await axios.post(baseUrl + '/soumission/soumission/', data, {headers: headers})
    return formData;
}

//get all soummision 
export const getSoumissions = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
        'Content-Type': 'multipart/form-data',
    }
    const formData = await axios.get(baseUrl + '/soumission/soumission/', data, {headers: headers})
    return formData;
}

//get soummision by id 
export const getSoumissionById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/soumission/"+ id, { headers })
    return data
}

//get all soumission by id offre
export const getSoumissionsByOffre = async (idoffre, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/offre/"+ idoffre, { headers })
    return data
}

//get soumissions by id soumissionnaire
export const getSoumissionsByUser = async (idsoumissionnaire, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/user/"+ idsoumissionnaire, { headers })
    return data
}

//get all soumission by id lot
export const getSoumissionsByLot = async (idlot, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/lot/"+ idlot, { headers })
    return data
}

//get prix by idsoumissionnaire and prix 
export const getPrix = async (idsoumissionnaire,prix, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/getPrix/"+ idsoumissionnaire + "/" +prix, { headers })
    return data
}

//get soumission by idoffre et idsoumissinnaire
export const getSoumissionByOffreAndSoumissionnaire = async (idsoumissionnaire,idoffre, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/useroffre/"+ idoffre + "/" +idsoumissionnaire, { headers })
    return data
}

//get file 
export const getFileByFilename = async (filename, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumission/"+ filename, { headers })
    return data
}


//delete soumission by id
export const deleteSoumission = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/soumission/'+id, {headers: headers})

    return data;
}