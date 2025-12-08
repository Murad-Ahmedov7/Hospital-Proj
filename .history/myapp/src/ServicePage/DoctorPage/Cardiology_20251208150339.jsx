import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";

export default function Cardiology() {
  return (
    <div className=" flex justify-center  h-screen w-screen pt-[72px]">
      <div className=" flex w-[80%] h-full     bg-gray-300/30 rounded-2xl items-center  ">
        <div className=" flex flex-col gap-3 w-screen px-10    ">
        

          <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4   ">

    <div className="mb-6">
  <h1 className="text-2xl font-oswald font-bold">Hello, User 🖐</h1>
  <p className="text-gray-600 text-sm font-oswald">Your latest health update</p>
</div>
       <div className="flex items-center gap-3 bg-cyan-100 px-4 py-2 rounded-xl w-fit shadow-sm">
  <GiStethoscope size={32} className="text-cyan-600" />
  <p className="font-oswald font-semibold text-lg text-gray-800">
    Current Vitals
  </p>
</div>


            <div className="flex flex-wrap w-full gap-4 justify-center ">

          {Array.from({ length: 5  }).map((_, index) => (
    <div
      key={index}
      className="
        w-[400px] h-[100px] rounded-2xl flex flex-col justify-start p-4 gap-1
        border border-cyan-300
        bg-cyan-400
        hover:bg-gradient-to-b hover:from-cyan-400 hover:to-black/20
        hover:text-white
        transition-all duration-300 ease-in-out
        shadow-md hover:shadow-xl
        cursor-pointer
      "
    >
      <div className="flex items-center gap-2">
        <FaHeartPulse size={30} />
        <p className="font-semibold">Heart Rate</p>
      </div>

      <p className="font-bold text-lg">72 bpm</p>
    </div>
  ))}

           




            </div>
          </div>
        </div>
      </div>
    </div>
  );
}



// import React from "react";
// import { FaHeartPulse } from "react-icons/fa6";
// import { GiStethoscope } from "react-icons/gi";

// export default function Cardiology() {
//   return (
//     <div className="flex justify-center items-center min-h-screen w-full bg-gray-200 py-10">
//       <div className="w-[85%] bg-white rounded-3xl shadow-xl p-10">
        
//         {/* Top Section */}
//         <div className="flex flex-col items-center mb-10">
//           <p className="font-oswald font-bold text-2xl">Hello, User 🖐</p>
//           <p className="font-oswald text-gray-600">
//             Here is your latest health update
//           </p>
//         </div>

//         {/* Section Title */}
//         <div className="flex items-center gap-3 bg-cyan-100 px-5 py-2 rounded-xl w-fit shadow-sm mb-8">
//           <GiStethoscope size={28} className="text-cyan-600" />
//           <p className="font-oswald font-semibold text-lg text-gray-800">
//             Current Vitals
//           </p>
//         </div>

//         {/* Cards Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
//           {Array.from({ length: 6 }).map((_, index) => (
//             <div
//               key={index}
//               className="
//                 bg-cyan-400 text-white
//                 rounded-2xl p-5 shadow-md 
//                 hover:shadow-xl hover:bg-cyan-500
//                 transition-all duration-300 cursor-pointer
//               "
//             >
//               <div className="flex items-center gap-3">
//                 <FaHeartPulse size={35} />
//                 <p className="font-semibold text-lg">Heart Rate</p>
//               </div>

//               <p className="font-bold text-2xl mt-2">72 bpm</p>
//             </div>
//           ))}
//         </div>

//       </div>
//     </div>
//   );
// }
