import axios from "axios"
import NET from "../network"

const http = axios.create({
    baseURL: NET.AXIOS_URL,
    headers: {
        'X-Requested-With': 'XMLHttpRequest',
    },
    withCredentials: true
})

export default http