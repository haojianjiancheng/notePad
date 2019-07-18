import axios from "axios";

export default axios.create({
    baseURL : "https://www.easy-mock.com/mock/5d2eedad1d8e8b3d8fee34c1/example",
    timeout : 2000,
    responseType : "json",
})
