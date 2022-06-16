import 'core-js'
import "regenerator-runtime/runtime"

import axios from "axios"

const baseUrl = "http://localhost:3000"

export const addDebtor = async(data, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const formData = await axios.post(baseUrl + '/debtor', data, {headers: headers})
    return formData;
}

export const getDebtorsUnpaid = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/debtorUnpaid", { headers })
    return data
}

export const getDebtorsPaid = async (token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/debtorPaid", { headers })
    return data
}

export const getDebtorById = async (id, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`
    }
    const data = await axios.get(baseUrl+"/debtor/"+ id, { headers })
    return data
}

export const updateDebtor = async (id, remain, token) => {
    const headers = {
        "Authorization": `Bearer ${token}`,
    }
    const  data = await axios.patch(baseUrl + '/debtor/remain/'+id, {remain}, {headers: headers})
    return data;
}
