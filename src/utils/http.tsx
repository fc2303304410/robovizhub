import axios from "axios";
//封装aixos
const httpInstance = axios.create({
    baseURL:"http://localhost:8888/features",
    timeout:5000
})

//拦截器
httpInstance.interceptors.request.use(
    (config) => {
        return config
    },
    (error) => {
        return Promise.reject(error)
    }
)

httpInstance.interceptors.response.use(
    (response) =>{
        return response
    },
    (error) =>{
        return Promise.reject(error)
    }
)

export {httpInstance}