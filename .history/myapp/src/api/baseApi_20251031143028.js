import axios from "axios";

 export  axios.create({
    baseURL:'http://localhost:3031',
    headers:{
        'Content-Type':'application/json',
    },

 })