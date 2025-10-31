import React, { useEffect, useState } from 'react'

export default function JsServer() {
  
const [data,setData]=useState([])

useEffect(()=>{
    axios.get('http//localhost:3031/users')
    .then(res=>setData(res.data))
    .catch(err=>)
})
  
  
    return (
    <div>JsServer</div>
  )
}
