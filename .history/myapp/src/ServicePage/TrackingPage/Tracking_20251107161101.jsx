import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import baseApi from "../../api/baseApi";
import { FaSearch } from "react-icons/fa";

export default function Tracking() {
  const [onClose, setOnClose] = useState(true);
  const [allConsult, setAllconsult] = useState([
    {
      id: 0,
      name: "",
      email: "",
      phone: 0,
      service: "",
      staff: "",
      date: "",
      message: "",
    },
  ]);
  
const [filterNames, setFilterNames] = useState([
  { value: "", name: "All" },              // heç bir filter
  { value: "name-asc", name: "Name (A→Z)" },
  { value: "name-desc", name: "Name (Z→A)" },
  { value: "email-asc", name: "Email (A→Z)" },
  { value: "email-desc", name: "Email (Z→A)" },
  { value: "staff-asc", name: "Staff (A→Z)" },
  { value: "staff-desc", name: "Staff (Z→A)" },
  { value: "service-asc", name: "Service (A→Z)" },
  { value: "service-desc", name: "Service (Z→A)" }
]);

const [selectedType,setSelectedType]=useState('')


const [sortedData, setSortedData] = useState([]);

const[searchOnClose,setSearchOnClose]=useState(false)

const handleCloseBtn = () => {
    setOnClose((prev) => !prev);
  };

const handleToggleSearch=()=>{
  setSearchOnClose((prev)=>!prev)
}


  useEffect(() => {
    const resultdata = async () => {
      const res = await baseApi.get("/consult");
      console.log(res.data);
      setAllconsult(res.data);
    };
    resultdata();
  }, []);


  console.log(selectedType)





useEffect(()=>{

const sortData=(type,data)=>{
  if(!type) return data;
  const [field,order]=type.split('-') // "name-asc" → ["name", "asc"]

 return [...data].sort((a, b) => {
    const valA = a[field]?.toString() || "";
    const valB = b[field]?.toString() || "";

  //   return order === "asc"
  //     ? valA.localeCompare(valB, undefined, { sensitivity: "base" })
  //     : valB.localeCompare(valA, undefined, { sensitivity: "base" });
  // });
      return order === "asc"
      ? valA.localeCompare(valB)
      : valB.localeCompare(valA);
  });
}

 const sorted=sortData(selectedType,allConsult)
setSortedData(sorted);
},[selectedType,allConsult])

  return (
    <>
 
      <div className="w-screen h-screen   bg-zinc-800 flex flex-col justify-center items-center gap-y-2 ">
   
        {/* umumi div */}
        <div
          className={` ${
            onClose
              ? "h-[7%] w-[97%] flex items-center hover:scale-102 ease-in "
              : "h-4/6 w-5/6"
          } transition-all ease-in duration-1200 bg-white rounded-xl py-4 px-7  cursor-pointer `}
        >
        
          {/* tablenin col divi */}
          <div
            onClick={() => handleCloseBtn()}
            className="flex items-center gap-2 "
          >
           
            {/* toggle duymesi */}
            <p className="  text-xl font-oswald font-bold ">Patient History</p>
            {onClose ? <FaChevronDown size={24} /> : <FaChevronUp size={24} />}
          </div>
          {/* // Filter: [Department ▼]  [Type: Appointment/Consultation ▼]  [Date: ___]
// Search: [Search by doctor] [🔎]
// Pagination: [Prev] [1] [2] [Next] */}

          {!onClose && (
            <div className="mt-4 overflow-y-auto max-h-[85%] rounded-lg">

              <div className="w-full flex gap-7 ">      {/* filter and search div  */}
              <div className="mb-3 flex gap-2 items-center">        {/* filter div */}
            
                <p className="text-[20px] font-bold font-oswald">Filter:</p>
                <select value={selectedType} onChange={(e)=>setSelectedType(e.target.value)} className="text-[18px] font-bold font-oswald bg-gray-200 rounded-xl ">
                  {
                    filterNames.map((f,index)=>(
                      <option className="text-[18px] font-bold font-oswald bg-white rounded-xl"value={f.value} key={index}>{f.name}</option>
                    ))
                  }
                </select>
            
              </div>

              <div onClick={()=>handleToggleSearch()} className="flex  gap-2 items-center mb-3  ">  {/* search div*/}
                <FaSearch  size={25} />
                   <p className="text-[20px] font-bold font-oswald">Search</p>              
                   {
                    searchOnClose &&(
                       <input placeholder="Search here" className="rounded-[11px] h-[40px]   border-1"></input>
                    )
                   }
                   </div>
      


              </div>
              <table className="min-w-full text-center text-md text-gray-700">
                <thead className="bg-blue-50 text-[#3AA6B9] uppercase tracking-wide border-b border-gray-200">
                  <tr>
                    <th>ID</th>
                    <th className="px-4 py-3">Name</th>
                    <th className="px-4 py-3">Email</th>
                    <th className="px-4 py-3">Phone</th>
                    <th className="px-4 py-3">Date</th>
                    <th className="px-4 py-3">Staff</th>
                    <th className="px-4 py-3">Message</th>
                    <th className="px-4 py-3">Service</th>
                    <th className="px-4 py-3">Status</th>
                    <th className="px-4 py-3">Follow-up</th>
                    <th className="px-4 py-3">EKQ Report</th>
                    <th className="px-4 py-3">Doctor Notes</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  
                  {sortedData.map((item) => (
                    <tr
                      key={item.id}
                      className="hover:bg-blue-50 transition-all duration-200 cursor-pointer font-oswald"
                    >
                      <td className="px-4 py-3 text-gray-800">{item.id}</td>
                      <td className="px-4 py-3">{item.name}</td>
                      <td className="px-4 py-3">{item.email}</td>
                      <td className="px-4 py-3">{item.phone}</td>
                      <td className="px-4 py-3">{item.date}</td>
                      <td className="px-4 py-3">{item.staff}</td>
                      <td className="px-4 py-3">{item.message}</td>
                      <td className="px-4 py-3 text-[#3AA6B9] font-bold">
                        {item.service}
                      </td>
                     
                        <td className="px-4 py-3  font-bold bg-yellow-50  ">🟨Pending</td>
                  
                      <td>N/A</td>
                      <td>N/A</td>
                      <td>N/A</td>
                    </tr>
                  ))}

                </tbody>
              </table>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

// 🔹 1-ci div — Card konteyner

// Bu div əslində table üçün “kart qutusu” yaradır.
// Yəni:

// ağ fon (bg-white)

// radius (rounded-2xl)

// kölgə (shadow-xl)

// iç boşluq (p-6)

// yuxarı məsafə (mt-7)

// overflow gizlətmə (overflow-hidden)

// Bu vizual olaraq table-ı “kart” kimi göstərir.

// 🔹 2-ci div — Scroll və radius üçün

// Table-lar çox zaman geniş olur (xüsusən mobil ekranlarda).
// Əgər sadəcə 1 div-də olsa, mobil görünüşdə table ekranı poza bilər.

// overflow-x-auto burada deyir ki:

// “Əgər table çox geniş olsa, sağa-sola sürüşdürülə bilsin (scroll çıxsın).”

// Bundan əlavə, rounded-lg table-ın iç radiusunu yumrulaşdırır.

// Yəni bu ikinci div həm scroll, həm radius qorumaq, həm də dizayn pozulmasın deyə əlavə olunur.

{
  /* <div className='h-1/4 p-5 flex flex-col lg:flex-row gap-2 items-center text-xs lg:text-base'>


  </div> */
}

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
