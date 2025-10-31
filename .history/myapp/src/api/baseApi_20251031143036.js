import axios from "axios";

  const baseU  axios.create({
    baseURL:'http://localhost:3031',
    headers:{
        'Content-Type':'application/json',
    },

 })