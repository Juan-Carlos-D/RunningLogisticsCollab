import axios from "axios";

const baseURL = (process.env.NODE_ENV === 'development') ? process.env.REACT_APP_DEV_BACKEND_URL : process.env.REACT_APP_PRODUCTION_BACKEND_URL

const axiosInstance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: { 'Content-Type': 'application/json' }
})

// Debug
// console.log("REACT_APP_DEV_BACKEND_URL", process.env.REACT_APP_DEV_BACKEND_URL)
// console.log('baseURL', baseURL)

export default axiosInstance