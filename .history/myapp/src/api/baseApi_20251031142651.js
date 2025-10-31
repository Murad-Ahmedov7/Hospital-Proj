import axios from "axios";

 export default const  baseApi=axios.create({
    baseURL:'http://localhost:3031',
    headers:{
        'Content-Type':'application/json',
    },

 })