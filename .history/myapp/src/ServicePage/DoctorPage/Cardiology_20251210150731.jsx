import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope, GiMedicinePills } from "react-icons/gi";
import { medicinesData, vitalsData } from "../../data/data";

export default function Cardiology() {
  return (
    <div className="min-h-screen w-full pt-[72px] flex flex-col items-center bg-gray-50 px-4">
      {/* MAIN WRAPPER */}
      <div className="w-full max-w-7xl grid grid-cols-1 xl:grid-cols-3 gap-6">
        {/* LEFT: HEALTH OVERVIEW */}
        <div className="col-span-2 bg-white rounded-3xl shadow-lg p-8 space-y-6">
          <div>
            <h1 className="text-3xl font-oswald font-bold text-gray-800">Hello, User 🖐</h1>
            <p className="text-gray-500 text-sm font-oswald">Your latest health update</p>
          </div>

          {/* CURRENT VITALS TITLE */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit bg-gray-100 shadow-sm">
            <GiStethoscope size={32} className="text-blue-600" />
            <p className="font-oswald font-semibold text-lg text-gray-800">Current Vitals</p>
          </div>

          {/* VITAL CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
            {vitalsData.map((vital) => (
              <div
                key={vital.id}
                className={`p-4 rounded-2xl ${vital.bgColor} shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer hover:scale-[1.03]`}
              >
                <div className="flex items-center gap-2">
                  <vital.Icon size={30} className="text-gray-700" />
                  <p className="font-oswald font-bold text-gray-900">{vital.title}</p>
                </div>
                <p className="text-xl font-oswald font-bold text-gray-900 mt-2">{vital.value}</p>
              </div>
            ))}
          </div>

          {/* HEART RISK SECTION */}
          <div className="bg-gradient-to-br from-yellow-100 to-yellow-200 rounded-3xl shadow-lg p-6 space-y-4">
            <p className="font-oswald font-bold text-lg">AI Approximate Heart Disease Risk</p>

            <div className="flex items-center gap-4">
              <div className="w-full bg-white h-3 rounded-xl shadow-inner">
                <div className="h-full w-[40%] bg-yellow-400 rounded-xl"></div>
              </div>
              <p className="font-oswald font-bold text-gray-700">40% (Moderate)</p>
            </div>

            <p className="text-sm text-gray-700 font-oswald">
              <span className="font-bold">Note:</span> This AI does not provide an exact heart disease risk
              assessment. Please consult a doctor.
            </p>

            <button className="bg-blue-600 hover:bg-blue-700 transition text-white font-oswald rounded-xl h-[50px] w-[220px] shadow-md hover:shadow-xl">
              Ask AI for Risk
            </button>

            <div className="flex justify-center mt-6">
              <button className="bg-gradient-to-r from-blue-500 to-blue-700 text-white px-6 py-3 rounded-xl shadow-lg hover:shadow-xl font-semibold">
                Get Consultation
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT: MEDICATIONS */}
        <div className="bg-white rounded-3xl shadow-lg p-8 space-y-6 overflow-y-auto max-h-[800px]">
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit bg-gray-100 shadow-sm">
            <GiMedicinePills size={32} className="text-cyan-600" />
            <p className="font-oswald font-semibold text-lg text-gray-800">Current Medications</p>
          </div>

          <div className="flex flex-col gap-4">
            {medicinesData.map((med) => (
              <div
                key={med.id}
                className={`rounded-2xl border-l-4 ${med.borderColor} bg-gray-50 h-24 shadow-md hover:shadow-xl hover:scale-[1.02] transition cursor-pointer px-4 flex items-center justify-between`}
              >
                <div>
                  <p className="font-oswald font-bold text-lg text-gray-900">{med.name}</p>
                  <p className="text-sm text-gray-600">{med.dose}</p>
                </div>
                <div className="flex gap-2">
                  {med.morning && <span className="px-2 py-1 bg-amber-300 rounded-md text-xs font-semibold">Morning</span>}
                  {med.day && <span className="px-2 py-1 bg-sky-300 rounded-md text-xs font-semibold">1/Day</span>}
                  {med.night && <span className="px-2 py-1 bg-purple-300 rounded-md text-xs font-semibold">Night</span>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}


// import React from "react";
// import { FaHeartPulse } from "react-icons/fa6";
// import { GiStethoscope, GiMedicinePills } from "react-icons/gi";
// import { medicinesData, vitalsData } from "../../data/data";

// export default function Cardiology() {
//   return (
//     <div className="flex flex-col items-center gap-10 min-h-screen w-screen bg-gray-50 pt-[80px] pb-10">
      
//       {/* Main Vitals Section */}
//       <div className="flex flex-col w-[90%] xl:flex-row gap-8">
        
//         {/* Vitals Card */}
//         <div className="flex-1 bg-white rounded-3xl shadow-2xl p-6 flex flex-col gap-6">
//           {/* Header */}
//           <div>
//             <h1 className="text-3xl font-oswald font-bold text-gray-900">
//               Hello, User 🖐
//             </h1>
//             <p className="text-gray-500 mt-1">Your latest health update</p>
//           </div>

//           {/* Current Vitals Label */}
//           <div className="flex items-center gap-3 px-5 py-3 rounded-xl w-fit bg-cyan-100 text-cyan-700 font-oswald font-semibold shadow-sm">
//             <GiStethoscope size={28} />
//             <span>Current Vitals</span>
//           </div>

//           {/* Vitals Cards Grid */}
//           <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mt-3">
//             {vitalsData.map((vital) => (
//               <div
//                 key={vital.id}
//                 className={`flex flex-col justify-between p-5 gap-2 rounded-2xl ${vital.bgColor} hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-2xl cursor-pointer`}
//               >
//                 <div className="flex items-center gap-3">
//                   <vital.Icon size={28} className="text-white" />
//                   <p className="font-bold text-white font-oswald">{vital.title}</p>
//                 </div>
//                 <p className="text-white font-bold text-xl font-oswald">{vital.value}</p>
//               </div>
//             ))}
//           </div>

//           {/* Heart Risk Section */}
//           <div className="bg-gradient-to-r from-amber-100 to-amber-200 rounded-3xl p-6 mt-4 shadow-md">
//             <p className="font-oswald font-bold mb-3">AI Approximate Heart Disease Risk</p>
//             <div className="flex items-center gap-4 mb-4">
//               <div className="w-full h-4 rounded-xl bg-amber-300/50 overflow-hidden">
//                 <div className="w-[40%] h-full bg-amber-400 rounded-xl"></div>
//               </div>
//               <p className="font-oswald font-bold text-gray-800 w-[120px]">40% (Moderate)</p>
//             </div>
//             <p className="text-gray-700 mb-4 font-oswald text-sm">
//               <span className="font-bold">Note:</span> This AI does not provide an exact heart disease risk assessment. Please consult a doctor.
//             </p>
//             <button className="w-full md:w-[220px] bg-blue-500 hover:bg-blue-600 text-white font-oswald font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//               Ask AI for Approximate Risk
//             </button>
//           </div>
//         </div>

//         {/* Side Cards: Medications & Vitals */}
//         <div className="flex flex-col gap-8 flex-1">
          
//           {/* Current Medications */}
//           <div className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col gap-6">
//             <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit bg-cyan-100 text-cyan-700 font-oswald font-semibold shadow-sm">
//               <GiMedicinePills size={28} />
//               <span>Current Medications</span>
//             </div>

//             <div className="flex flex-col gap-4 max-h-[450px] overflow-y-auto">
//               {medicinesData.map((med) => (
//                 <div
//                   key={med.id}
//                   className={`flex justify-between items-center px-4 py-3 rounded-2xl shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 bg-gray-50 border-l-4 ${med.borderColor} cursor-pointer`}
//                 >
//                   <div className="flex flex-col">
//                     <p className="font-bold font-oswald text-gray-800">{med.name}</p>
//                     <span className="text-gray-500 text-sm">{med.dose}</span>
//                   </div>
//                   <div className="flex gap-2">
//                     {med.morning && <span className="px-2 py-1 bg-amber-300 text-black rounded-md text-xs font-semibold">Morning</span>}
//                     {med.day && <span className="px-2 py-1 bg-sky-300 text-black rounded-md text-xs font-semibold">1/Day</span>}
//                     {med.night && <span className="px-2 py-1 bg-purple-300 text-black rounded-md text-xs font-semibold">Night</span>}
//                   </div>
//                 </div>
//               ))}
//             </div>
//           </div>

//           {/* Quick Vitals Card */}
//           <div className="bg-white shadow-2xl rounded-3xl p-6 flex flex-col gap-6">
//             <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit bg-cyan-100 text-cyan-700 font-oswald font-semibold shadow-sm">
//               <GiStethoscope size={28} />
//               <span>Quick Vitals</span>
//             </div>
//             <p className="text-gray-500 font-oswald">View your vitals at a glance and consult a doctor for detailed analysis.</p>
//             <button className="w-full bg-gradient-to-r from-blue-500 to-blue-600 text-white font-oswald font-semibold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
//               Get Consult
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }
