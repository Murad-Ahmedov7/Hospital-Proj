import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import baseApi from '../../api/baseApi';


export default function Tracking() {

  const [onClose,setOnClose]=useState(false)

  const handleCloseBtn=()=>{
    setOnClose(prev=>!prev)
  }

  useEffect(()=>{
    const resultdata= asyncawait baseApi.get('/con')
  })

  return (
    <>

<div onClick={()=>handleCloseBtn()} className="flex items-center justify-start ml-10 pt-26 gap-2 cursor-pointer">
  <p className="text-xl font-medium ">Patient History</p>
  <FaChevronDown size={24} />
</div>

{
  onClose &&(
    <div className='bg-red-200'>Duyme basanda acilan hisse</div>
  )
}
</>
  )
    
}
