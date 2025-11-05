import React, { useEffect, useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import baseApi from '../../api/baseApi';


export default function Tracking() {

  const [onClose,setOnClose]=useState(false)
  const [allconsult,setAllconsult]=useState([
      {
      "id": 0,
      "name": "",
      "email": "",
      "phone": 0,
      "service": "",
      "staff": "",
      "date": "",
      "message": ""
    },
  ])

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

{/* <div>
  {
    allconsult.map((a)=>(
      <div className='flex flex-row w-full gap-4'>
        <p>{a.id}</p>
        <p>{a.name} </p> 
        <p>{a.email}</p>
        <p>{a.date}</p>
        <p>{a.service}</p>
        <p>{a.staff}</p>
        <p>{a.message}</p>
      </div>
    ))
  }
</div> */}


<div className='w-screen h-screen caret-transparent bg-zinc-800 flex flex-col justify-center items-center gap-y-2'>
  <div className='w-5/6 h-5/6 bg-white rounded-xl'>
  <div className='h-1/4 p-5 flex flex-col lg:flex-row gap-2 items-center'></div>
  </div>
</div>


</>
  )
    
}
