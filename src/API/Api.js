import axios from "axios";


export const loadSmallDataApi = (id = '{number|1000}', firstName = '{firstName}', lastName='{lastName}', email = '{email}', phone='{phone|(xxx)xxx-xx-xx}', address='{addressObject}', description='{lorem|32}') => {
    return axios.get(`http://www.filltext.com/?rows=32&id=${id}&firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&address=${address}&description=${description}`)
}

export const loadBigDataApi = (id = '{number|1000}', firstName = '{firstName}', lastName='{lastName}', email = '{email}', phone='{phone|(xxx)xxx-xx-xx}', address='{addressObject}', description='{lorem|32}') => {
    return axios.get(`http://www.filltext.com/?rows=1000&id=${id}&firstName=${firstName}&lastName=${lastName}&email=${email}&phone=${phone}&address=${address}&description=${description}`)
}