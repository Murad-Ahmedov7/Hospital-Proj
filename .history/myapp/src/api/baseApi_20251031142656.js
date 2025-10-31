import axios from "axios";

 export default   baseApi=axios.create({
    baseURL:'http://localhost:3031',
    headers:{
        'Content-Type':'application/json',
    },

 })