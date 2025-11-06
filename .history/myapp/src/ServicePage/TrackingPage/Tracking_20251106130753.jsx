import React, { useEffect, useState } from 'react'
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
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


<div className='w-screen h-screen caret-transparent bg-zinc-800 flex flex-col justify-center items-center gap-y-2'>  {/* umumi div */}
 

  
  <div className={` ${onClose?"h-1/9 w-[97%] flex items-center ":"h-4/6 w-5/6"} transition-all ease-in duration-1200 bg-white rounded-xl p-4 ` }>   {/* tablenin col divi */}




  <div onClick={()=>handleCloseBtn()} className="flex items-center gap-2 cursor-pointer"> {/* toggle duymesi */}
  <p className="  text-xl font-oswald font-bold  ">Patient History</p>
  {onClose?  <FaChevronDown size={24} />:<FaChevronUp size={24}/>}
  </div>
  

  {
  !onClose&&(
    // <div className='flex flex-col'>Hello</div>

       <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Email</th>
          </tr>
        </thead>

        <tbody>
          <tr>
            
          </tr>
        </tbody>

      </table>

 
  )
}
  
  </div>

</div>


</>

  )
    
}



  {/* <div className='h-1/4 p-5 flex flex-col lg:flex-row gap-2 items-center text-xs lg:text-base'>


  </div> */}


 // <div className="w-screen h-screen bg-gradient-to-br from-zinc-900 via-zinc-800 to-zinc-700 flex flex-col justify-center items-center">
      
  //     <div
  //       className={`
  //         w-11/12 md:w-4/6 lg:w-3/6
  //         ${onClose ? "h-[12vh]" : "h-[70vh]"}
  //         transition-all duration-700 ease-in-out
  //         bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl
  //         rounded-2xl p-6 text-white
  //         overflow-hidden
  //       `}
  //     >
  //       {/* Header */}
  //       <div
  //         onClick={handleCloseBtn}
  //         className="flex justify-between items-center cursor-pointer select-none"
  //       >
  //         <h2 className="text-2xl font-bold tracking-wide font-oswald">Patient History</h2>
  //         <div className="transition-transform duration-500">
  //           {onClose ? (
  //             <FaChevronDown size={22} className="text-gray-200 hover:text-white" />
  //           ) : (
  //             <FaChevronUp size={22} className="text-gray-200 hover:text-white" />
  //           )}
  //         </div>
  //       </div>

  //       {/* Content (açıldıqda göstərilir) */}
  //       <div
  //         className={`transition-opacity duration-700 ease-in-out ${
  //           onClose ? "opacity-0 pointer-events-none" : "opacity-100 mt-6"
  //         }`}
  //       >
  //         <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
  //           <div className="bg-white/10 p-4 rounded-xl border border-white/10">
  //             <p className="font-semibold text-lg">General Info</p>
  //             <p className="text-sm text-gray-300 mt-2">Blood Pressure: 120/80</p>
  //             <p className="text-sm text-gray-300">Heart Rate: 75 bpm</p>
  //           </div>

  //           <div className="bg-white/10 p-4 rounded-xl border border-white/10">
  //             <p className="font-semibold text-lg">Latest Visit</p>
  //             <p className="text-sm text-gray-300 mt-2">Date: 02 Nov 2025</p>
  //             <p className="text-sm text-gray-300">Doctor: Dr. Aliyev</p>
  //           </div>

  //           <div className="col-span-1 md:col-span-2 bg-white/10 p-4 rounded-xl border border-white/10">
  //             <p className="font-semibold text-lg">Notes</p>
  //             <p className="text-sm text-gray-300 mt-2">
  //               Patient reports occasional headaches and mild fatigue. Recommended to continue
  //               current medication and schedule a follow-up next month.
  //             </p>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   </div>


  


//text base nedi  caret-transparent ve text-end  (basqa design da tap templte yerinden)

//css ve talwindler ptoeyklerde anlaiz edib daha yaxsi ko yaz

//menfi yazmaq margini paddinge ve hemcinin faiz ile yazmaq


// https://www.youtube.com/watch?v=8fCVfktZ120 dizayn budu

// https://chatgpt.com/c/690b3f47-8614-832a-84b1-776dd9a11906


// https://preview.sprukomarket.com/html/bootstrap/sparic/dist/html/index.html

// https://preview.themeforest.net/item/oxfin-bootstrap-dark-admin-dashboard/full_screen_preview/47471477

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



