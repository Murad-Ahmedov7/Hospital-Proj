import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope, GiMedicinePills } from "react-icons/gi";
import { medicinesData, vitalsData } from "../../data/data";

export default function Cardiology() {
  return (
    <div className="flex flex-col items-center gap-10 min-h-screen w-screen pt-[72px] bg-gray-50">

      {/* MAIN WRAPPER */}
      <div className="flex w-[80%] h-[740px] overflow-y-auto shadow-xl rounded-2xl bg-white/70 backdrop-blur-xl p-8 border border-gray-200">
        
        {/* LEFT SECTION */}
        <div className="flex flex-col gap-6 w-full">

          {/* GREETING HEADER */}
          <div>
            <h1 className="text-3xl font-oswald font-bold text-gray-800">Hello, User 🖐</h1>
            <p className="text-gray-600 text-sm font-oswald">Your latest health update</p>
          </div>

          {/* CURRENT VITALS TITLE */}
          <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit shadow-sm bg-white">
            <GiStethoscope size={32} className="text-blue-600" />
            <p className="font-oswald font-semibold text-lg text-gray-800">Current Vitals</p>
          </div>

          {/* VITALS CARDS GRID */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4 pr-5">
            {vitalsData.map((v) => (
              <div
                key={v.id}
                className={`p-4 rounded-2xl hover:scale-[1.03] transition shadow-md hover:shadow-xl cursor-pointer ${v.bgColor}`}
              >
                <div className="flex items-center gap-2 mb-1">
                  <v.Icon size={30} />
                  <p className="font-bold font-oswald">{v.title}</p>
                </div>
                <p className="font-bold text-xl font-oswald">{v.value}</p>
              </div>
            ))}
          </div>

          {/* HEART RISK SECTION */}
          <div className="w-full bg-gradient-to-br from-yellow-200/40 to-yellow-100/30 rounded-2xl border border-yellow-300/40 shadow-md p-5">
            <p className="font-bold mb-2 font-oswald">AI Approximate Heart Disease Risk</p>

            <div className="flex items-center gap-4">
              <div className="w-full bg-white h-4 rounded-xl border">
                <div className="w-[40%] bg-yellow-400 h-full rounded-xl"></div>
              </div>
              <p className="font-oswald font-bold w-[150px]">40% (Moderate)</p>
            </div>

            <p className="font-oswald mt-3 text-sm text-gray-700">
              <span className="font-bold">Note:</span> This AI does not provide an exact risk assessment. Please consult a doctor.
            </p>

            <button className="mt-4 bg-blue-600 text-white px-6 h-[48px] rounded-xl font-oswald hover:scale-[1.03] transition shadow-lg">
              Ask AI for Approximate Risk
            </button>

            <div className="mt-6 flex justify-center">
              <button className="w-[320px] h-[52px] bg-gradient-to-r from-blue-400 to-blue-600 text-white rounded-xl shadow-md hover:shadow-xl font-semibold text-[15px] hover:scale-[1.03] transition">
                Get Consult to Learn Your Vitals
              </button>
            </div>
          </div>

        </div>
      </div>


      {/* BOTTOM SECTION — MEDS + CONSULTATION */}
      <div className="flex w-[80%] justify-between gap-6">

        {/* CURRENT MEDICATIONS */}
        <div className="w-[50%] bg-white rounded-2xl p-6 shadow-xl border border-gray-200">
          <div className="flex items-center gap-3 mb-4">
            <GiMedicinePills size={30} className="text-blue-600" />
            <p className="font-oswald font-semibold text-xl text-gray-800">Current Medications</p>
          </div>

          <div className="flex flex-col gap-4 max-h-[380px] overflow-y-auto pr-2">
            {medicinesData.map((m) => (
              <div
                key={m.id}
                className={`p-4 rounded-xl bg-gray-100 hover:bg-gray-200 border-l-4 ${m.borderColor}
                transition shadow-sm hover:shadow-md flex justify-between items-center`}
              >
                <div>
                  <p className="font-oswald font-bold text-gray-800 text-lg">{m.name}</p>
                  <p className="text-sm text-gray-700">{m.dose}</p>
                </div>

                <div className="flex gap-2">
                  {m.morning && (
                    <span className="bg-amber-300 px-2 py-1 text-xs rounded-md font-bold">Morning</span>
                  )}
                  {m.day && (
                    <span className="bg-sky-300 px-2 py-1 text-xs rounded-md font-bold">1/Day</span>
                  )}
                  {m.night && (
                    <span className="bg-purple-300 px-2 py-1 text-xs rounded-md font-bold">Night</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CONSULTATION REMINDER */}
        <div className="w-[50%] bg-white/70 backdrop-blur-xl rounded-2xl p-6 shadow-xl border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <p className="font-oswald font-semibold text-xl text-gray-800">Consultation Reminder</p>
            <span className="px-3 py-1 bg-blue-100 text-blue-600 text-xs font-semibold rounded-full">Health Check</span>
          </div>

          <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
            <div className="w-2 bg-red-500 rounded-xl"></div>
            <div>
              <p className="text-red-600 font-bold text-sm">Upcoming Appointment</p>
              <p className="text-gray-700 text-sm mt-1">
                Tomorrow at <span className="font-bold">11:00 AM</span>
              </p>
            </div>
          </div>

          <div className="mt-5 bg-blue-50 border border-blue-200 p-4 rounded-xl shadow-sm">
            <p className="text-gray-600 text-sm">Next Consultation</p>
            <p className="font-oswald font-bold text-lg text-gray-800">Tomorrow, 11:00 AM</p>
          </div>

          <button className="mt-6 w-full bg-gradient-to-r from-blue-500 to-blue-600 h-[48px] text-white font-oswald rounded-xl shadow-md hover:scale-[1.03] transition">
            Schedule New Appointment
          </button>
        </div>
      </div>


      {/* DOCTOR TIPS */}
      <div className="w-[80%] bg-white rounded-2xl shadow-xl border border-gray-200 p-6">
        <div className="flex items-center gap-3 mb-3">
          <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
            <GiStethoscope size={24} />
          </div>
          <p className="font-oswald font-semibold text-xl text-gray-800">General Doctor Tips</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

          {[
            "Drink at least 1.5–2 liters of water daily.",
            "Avoid heavy meals late at night to reduce heart strain.",
            "Walk 20–30 minutes daily to improve cardiovascular health.",
            "Reduce salt and processed food intake.",
            "Sleep at least 7–8 hours every night.",
            "Limit sugar to protect heart and blood vessels.",
          ].map((tip, i) => (
            <div
              key={i}
              className="bg-gray-50 border rounded-xl p-4 hover:bg-gray-100 transition shadow-sm"
            >
              <p className="font-oswald font-semibold text-gray-800 text-sm">• {tip}</p>
            </div>
          ))}

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
