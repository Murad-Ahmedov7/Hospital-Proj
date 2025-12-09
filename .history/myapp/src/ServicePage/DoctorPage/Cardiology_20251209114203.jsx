    import React from "react";
    import { FaHeartPulse } from "react-icons/fa6";
    import { GiStethoscope } from "react-icons/gi";
   import { vitalsData } from "../../data/data";

    export default function Cardiology() {
    return (
        <div className=" flex justify-center  h-screen w-screen pt-[72px]">
        <div className=" flex w-[80%] h-full     bg-gray-200/30 rounded-2xl items-center  ">
            <div className=" flex flex-col gap-3 w-screen px-10    ">
            

            <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4   ">

        <div className="mb-1">
    <h1 className="text-2xl font-oswald font-bold">Hello, User 🖐</h1>
    <p className="text-gray-600 text-sm font-oswald">Your latest health update</p>
    </div>         
        <div className="flex items-center gap-3  px-4 py-2 rounded-xl w-fit shadow-sm">
    <GiStethoscope size={32} className="text-cyan-600" />
    <p className="font-oswald font-semibold text-lg text-gray-800">
        Current Vitals
    </p>
    </div>


                <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 justify-start pr-5">

                {vitalsData.map((vital) => (
                    <div
                    key={vital.id}
        className="flex flex-col justify-start p-4 gap-1 rounded-2xl bg-cya  text-white hover:scale-105 transition-transform  duration-300 shadow-md hover:shadow-xl cursor-pointer"
                    >
                    <div className="flex items-center gap-2">
                        {vital.Icon}
                        <p className="font-bold font-oswald">{vital.title}</p>
                    </div>
                    <p className="font-bold text-lg  font-oswald">{vital.value}</p>
                    </div>
                ))}


                </div>
            </div>
            </div>
        </div>
        </div>
    );
    }



    //grid col ile grid col ve grid row bir islenme ferqi 


// import React from "react";
// import { FaHeartPulse } from "react-icons/fa6";
// import { GiStethoscope } from "react-icons/gi";

// export default function Cardiology() {
//   return (
//     <div className="flex justify-center items-center min-h-screen w-full bg-gray-200 py-10">
//       <div className="w-[85%] bg-white rounded-3xl shadow-xl p-10">
        
//         {/* Top Section */}
//         <div className="flex flex-col items-start mb-10">
//           <p className="font-oswald font-bold text-2xl">Hello, User 🖐</p>
//           <p className="font-oswald text-gray-600">
//             Here is your latest health update
//           </p>
//         </div>

//         {/* Section Title */}
//         <div className="flex items-center gap-3  px-5 py-2 rounded-xl w-fit shadow-lg mb-8">
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
