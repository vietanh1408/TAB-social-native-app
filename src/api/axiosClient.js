import axios from "axios";
import queryString from 'query-string'

const axiosClient = axios.create({
    baseURL: 'http://192.168.1.2:9001/api/',
    headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer 1234`
    },
    paramsSerializer: (params) => queryString.stringify(params)
})

axios.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    })

axios.interceptors.response.use((response) => {
    return response.data
}, (error) => {
    return Promise.reject(error)
})

export default axiosClient