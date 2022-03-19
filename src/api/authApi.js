import axiosClient from "./axiosClient"

const authApi = {
    login(params) {
        const url = '/auth/login'
        return axiosClient.post(url, params)
    },
    register(params) {
        const url = '/auth/register'
        console.log('params....', params)
        return axiosClient.post(url, params)
    }
}

export default authApi