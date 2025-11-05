import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import baseApi from '../../api/baseApi';


export default function Tracking() {

  const [onClose,setOnClose]=useState(false)
  const [allconsult,setAllconsult]=useState([])

  const handleCloseBtn=()=>{
    setOnClose(prev=>!prev)
  }

  useEffect(()=>{
    const resultdata= async()=>{
      const res=await baseApi.get('/consult')
      console.log(res.data)
      setAllconsult(res.data)
    }
    resultdata()

  },[])

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

<div>
  {
    allconsult.map((a)=>(
      <div className='flex w-140 gap-4'>
        {a.name}
      </div>
    ))
  }
</div>
</>
  )
    
}
