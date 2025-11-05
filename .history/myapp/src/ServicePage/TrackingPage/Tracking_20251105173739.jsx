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

  <div className='h-1/4 p-5 flex flex-col lg:flex-row gap-2 items-center text-xs lg:text-base'>

  <div className='w-full'>
     <div className='font-semibold'>Users</div>

     <div>A list of all the users in your account including their name,title email,role</div>
  
  </div>

  <div className='w-full '>
    <button className='bg-indigo-600 text-white p-2 rounded-lg'>Add User</button>
  </div>

  </div>

  
  </div>

</div>


</>
  )
    
}

//text base nedi  caret-transparent ve text-end


// https://www.youtube.com/watch?v=8fCVfktZ120 dizayn budu

// https://chatgpt.com/c/690b3f47-8614-832a-84b1-776dd9a11906


// 1️⃣ [Patient History ▼] (read-only, collapsible)
// Filter: [Department ▼]  [Type: Appointment/Consultation ▼]  [Date: ___]
// Search: [Search by doctor] [🔎]
// Pagination: [Prev] [1] [2] [Next]

// ---------------------------------------------------
// | Dr. Elvin Məmmədov – Cardiologist
// | Appointment: 12 Nov 2025 – Approved ✅
// | Consultation:
// | - Follow-up: 26 Nov 2025
// | - EKQ Report: Normal
// | - Notes: Monitor diet
// ---------------------------------------------------
// | Dr. Leyla Həsənova – Cardiologist
// | Appointment: 15 Nov 2025 – Pending 🟨
// | Consultation:
// | - Follow-up: N/A
// | - Notes: N/A
// ---------------------------------------------------

// 2️⃣ [Medicine ▼] (click to expand)
// Filter: [Medicine Type ▼]  [Status ▼]  [Date: ___]
// Search: [Search by medicine] [🔎]
// Pagination: [Prev] [1] [2] [3] [Next]

// ---------------------------------------------------
// | Paracetamol 500mg – 🚚 On the way
// | Order Date: 05 Nov 2025
// ---------------------------------------------------

// 3️⃣ [Tests ▼] (click to expand)
// Filter: [Test Type ▼]  [Status ▼]  [Date: ___]
// Search: [Search by test] [🔎]
// Pagination: [Prev] [1] [2] [Next]

// ---------------------------------------------------
// | EKQ Report – ✅ Ready
// | Date: 12 Mar 2025
// ---------------------------------------------------

// 4️⃣ [Health Metrics ▼] (click to expand)
// Filter: [Metric Type ▼]  [Date: ___]
// Search: [Search by metric] [🔎]
// Pagination: [Prev] [1] [Next]

// ---------------------------------------------------
// | Heart Rate – 78 bpm (Trend Graph)
// | Date: 05 Nov 2025