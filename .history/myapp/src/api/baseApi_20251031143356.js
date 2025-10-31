import axios from "axios";

    axios.create({
    baseURL:'http://localhost:3031',
    headers:{
        'Content-Type':'application/json',
    },

 })

 export default baseApi