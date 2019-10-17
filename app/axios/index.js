import axios from "axios";

axios.interceptors.request.use(function(config){
    const token = localStorage.get("token");
    config.headers.Authorization = `Bearer ${token}`;
    return config;
},function(err){
    return Promise.reject(err);
})
axios.interceptors.response.use(function(config){
    const { Authorization } = config.headers;
    Authorization && localStorage.set("token",Authorization);
    return config;
},function(err){
    if(err.response){
        const { status } = err.response;
        if(status === 401 || status === 405){
            //跳到login
        }
    }
    return Promise.reject(err)
})

export default axios.create({
    // baseURL : "https://www.easy-mock.com/mock/5d2eedad1d8e8b3d8fee34c1/example",
    baseURL : "http://127.0.0.1:3000",
    withCredentials : true,
})
