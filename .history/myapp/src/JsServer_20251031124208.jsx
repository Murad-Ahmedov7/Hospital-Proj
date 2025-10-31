import React, { useEffect, useState } from 'react'

export default function JsServer() {
  
const [data,setData]=useState([])

useEffect(()=>{
    axios.get('http//localhost')
})
  
  
    return (
    <div>JsServer</div>
  )
}
