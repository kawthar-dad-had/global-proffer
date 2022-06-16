import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

// login soumissionnaire
export const loginSoum = async (email, password) => {
    const data = await axios.post(baseUrl + '/soumissionnaires/login',{email, password})
    return data
}

// Update Profile of soumissionnaire
export const updateSoumAcc = async (id, updates = {}, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/soumissionnaires/modify/'+id, updates, {headers: headers})
    return data;
}

export const changeSoumPassword = async (id, updates, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/soumissionnaires/password/'+id, updates, {headers: headers})
    return data;
}

// logout soumissionnaire
export const logoutSoum = async (token) => {
    try {
        const { data } = await axios.post({
            url: baseUrl + `/soumissionnaires/logout`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
        localStorage.removeItem("Auth")
        return data
    } catch (e) {
        console.log(e)
    }
}

//logoutAll soumissionnaire
export const logoutAllSoum = async (token) => {
    try {
        const { data } = await axios.post({
            url: baseUrl + `/soumissionnaires/logoutall`,
            headers: {
                "Authorization": `Bearer ${token}`,
            },
        }).then((data) => {
            console.log(data)
        })
  
      localStorage.removeItem("Auth")
      return data
    } catch (e) {
      console.log(e)
    }
}

//create soumissionnaire's account
export const createAcc = async (data) => {
    const formData = await axios.post(baseUrl + '/soumissionnaires', data)
    return formData;
}

//Delete soumissionnaire's account by admin
export const deleteSoumAcc = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.delete(baseUrl +'/soumissionnaires/'+id, {headers: headers})

    return data;
}


//Add profile pic to soumissionnaire
export const addProfileImg = async (file, token) => {
    const data = await axios.post({
        url: baseUrl + '/soumissionnaires/me/image',
        data: file,
        headers: {
            'Content-Type': 'multipart/form-data',
            "Authorization": `Bearer ${token}` 
        }
    }).then( (response) => {
        console.log(response);               
        //console.log('Finish')
    })
    return data;
}

//Delete profile pic of soumissionnaire
export const deleteSoumPic = async (token) => {
    const { data } = await remove({
        url: `/soumissionnaires/me/image`,
        headers: {
            "Authorization": `Bearer ${token}`,
        },
    })

    return data;
}

export const getAllsoumissionnaires = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/soumissionnaires', {headers: headers})
    return data
}

export const getsoumissionnaireById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+'/soumissionnaires/'+id, {headers: headers})
    return data
}
export const getsoumissionnairesByName = async (lastname, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/soumissionnaires/search/"+ lastname, { headers })
    return data
}