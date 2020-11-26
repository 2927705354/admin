import axios from 'axios'
import { Promise } from 'q';
const Server=axios.create({
    baseURL:'',
    timeout:5000
})

Server.interceptors.request.use((config)=>{
    console.log(config)

    config.headers.Authorization=JSON.parse(sessionStorage.getItem('tok'))||''
    
    return config
},error=>{
    return Promise.reject(error)
})

Server.interceptors.response.use((response)=>{
    console.log(response)
    if(response.status==200){
        return response.data
    }
    return response
},(error)=>{
    return Promise.reject(error)
})
export default Server;