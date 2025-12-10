import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";
import { medicinesData, vitalsData } from "../../data/data";
import { GiMedicinePills } from "react-icons/gi";


export default function Cardiology() {
  return (
    <div className=" flex flex-col items-center gap-8    min-h-screen w-screen pt-[72px] ">
      <div className=" flex w-[80%] h-[740px]   overflow-y-auto     shadow-2xl rounded-2xl   ">
        <div className=" flex flex-col gap-3  w-screen px-10    ">
          <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4    ">
            <div className="mb-1 ">
              <h1 className="text-2xl font-oswald font-bold">Hello, User 🖐</h1>
              <p className="text-gray-600 text-sm font-oswald">
                Your latest health update
              </p>
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
                  className={`flex flex-col justify-start p-4 gap-1 rounded-2xl  ${vital.bgColor}  hover:scale-105 transition-transform  duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <vital.Icon size={30} />
                    <p className="font-bold font-oswald">{vital.title}</p>
                  </div>
                  <p className="font-bold text-lg  font-oswald">
                    {vital.value}
                  </p>
                </div>
              ))}
            </div>

            <div className="w-[99%] h-[240px] bg-yellow-300/20  rounded-2xl ">
              <div className="p-4">
                <div className="flex flex-col w-[100%] gap-3 mb-3  ">
                  <p className="font-bold">Ai Approximete Heart Disease Risk</p>

                  <div className="flex w-full items-center gap-4">
                    <div className="border-1 rounded-2xl h-4 w-full ">
                      <div className="w-[40%]  bg-amber-300 h-full rounded-2xl">
                        {" "}
                      </div>
                    </div>

                    <p className="w-[150px] font-oswald font-bold">
                      40%(Moderate)
                    </p>
                  </div>
                </div>

                <div className="flex flex-col gap-4">
                  <p className="font-oswald">
                    <span className="font-bold">Note:</span> This AI does not
                    provide an exact heart disease risk assessment. Please
                    consult a doctor.
                  </p>
                  <button className="bg-blue-500 w-[200px] text-white font-oswald  h-[50px]  rounded-2xl text-[15px] hover:scale-105 transition-transform  duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer ">
                    Ask AI for Approximete Risk{" "}
                  </button>
                </div>
              </div>

              <div className="flex items-center h-[171px]">
                <div className="flex justify-center  max-h-[60px] w-[320px] mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <button className="text-white font-semibold text-center py-4">
                    Get Consult to learn your vitals
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>






      <div className="flex w-full justify-center gap-3">

      <div className="flex justify-start w-[35%] h-[450px]   overflow-y-auto     shadow-2xl rounded-2xl">

        <div className=" flex flex-col gap-3  w-screen px-10    ">

          <div className="flex flex-col gap-4 h-[70vh] mr-10 rounded-2xl pl-4 pt-4 ">

            <div className="mt-3 flex flex-col gap-4 ">
              
           <div className="flex items-center gap-3  px-4 py-2 rounded-xl w-fit shadow-sm">

              <GiMedicinePills size={32} className="text-cyan-600" />

              <p className="font-oswald font-semibold text-lg text-gray-800">
                Current Medications
              </p>

            </div>


         <div className="flex flex-col gap-3">
  {medicinesData.map((vital) => (
    <div
      key={vital.id}
      className={`rounded-2xl border-l-4 ${vital.borderColor} h-20 bg-gray-100/60
        hover:scale-105 transition-transform duration-300 ease-in shadow-md
        hover:shadow-xl cursor-pointer flex justify-between items-center px-4`}
    >
      {/* Left side */}
      <div className="flex items-center gap-4">
        <div className="flex flex-col leading-tight">
          <p className="font-oswald font-bold text-lg text-gray-800">
            {vital.name}
          </p>
          <span className="text-sm text-gray-600">{vital.dose}</span>
        </div>
      </div>

      {/* Right side badges */}
      <div className="flex gap-2">
        {vital.morning && (
          <span className="px-2 py-1 text-xs rounded-md bg-amber-300 text-black font-semibold">
            Morning
          </span>
        )}
        {vital.day && (
          <span className="px-2 py-1 text-xs rounded-md bg-sky-300 text-black font-semibold">
            1/Day
          </span>
        )}
        {vital.night && (
          <span className="px-2 py-1 text-xs rounded-md bg-purple-300 text-black font-semibold">
            Night
          </span>
        )}
      </div>
    </div>
  ))}
</div>



            </div>

          </div>

        </div>

      </div>




    {/* --- Modern Consultation Reminder Section --- */}
<div className="mt-4 w-[35%] rounded-2xl bg-white/60 backdrop-blur-md shadow-lg p-5 border border-gray-200 transition-all duration-300 hover:shadow-xl">

  {/* Header */}
  <div className="flex items-center justify-between mb-4">
    <p className="font-oswald font-semibold text-xl text-gray-800">
      Consultation Reminder
    </p>

    <span className="px-3 py-1 bg-blue-500/10 text-blue-600 text-xs font-semibold rounded-full">
      Health Check
    </span>
  </div>

  {/* Appointment Alert */}
  <div className="flex items-start gap-3 bg-red-50 border border-red-200 p-4 rounded-xl shadow-sm">
    <div className="w-2 h-full bg-red-500 rounded-xl"></div>
    <div>
      <p className="text-red-600 font-bold text-sm">Upcoming Appointment</p>
      <p className="text-gray-700 text-sm mt-1">
        Your appointment is <span className="font-semibold">tomorrow at 11:00 AM</span>
      </p>
    </div>
  </div>

  {/* Next Consultation */}
  <div className="mt-4 bg-blue-50/70 border border-blue-200 p-4 rounded-xl shadow-sm">
    <p className="text-gray-600 text-sm">Next Consultation Date</p>
    <p className="font-oswald font-bold text-lg text-gray-800 mt-1">
      Tomorrow, 11:00 AM
    </p>
  </div>

  {/* Button */}
  <button
    className="mt-5 w-full h-[48px] rounded-xl 
    bg-gradient-to-r from-blue-500 to-blue-600 
    text-white font-oswald text-[15px] font-semibold
    shadow-md hover:shadow-lg hover:scale-[1.03]
    transition-all duration-300">
    Schedule New Appointment
  </button>
</div>
{/* --- End Modern Consultation Reminder --- */}


<div className="mt-4 w-full bg-white rounded-2xl shadow-md p-5 border">

  <div className="flex items-center gap-3 mb-3">
    <div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
      <GiStethoscope size={24} />
    </div>
    <p className="font-oswald font-semibold text-lg text-gray-800">
      Doctor Tips
    </p>
  </div>

  <div className="flex flex-col gap-3">

    {/* Tip 1 */}
    <div className="bg-gray-50 border rounded-xl p-3 hover:bg-gray-100 transition">
      <p className="font-oswald font-semibold text-gray-800 text-sm">
        • Drink at least 1.5–2 liters of water daily.
      </p>
    </div>

    {/* Tip 2 */}
    <div className="bg-gray-50 border rounded-xl p-3 hover:bg-gray-100 transition">
      <p className="font-oswald font-semibold text-gray-800 text-sm">
        • Avoid heavy meals late at night to reduce heart strain.
      </p>
    </div>

    {/* Tip 3 */}
    <div className="bg-gray-50 border rounded-xl p-3 hover:bg-gray-100 transition">
      <p className="font-oswald font-semibold text-gray-800 text-sm">
        • Take a 20–30 minute walk daily to improve cardiovascular health.
      </p>
    </div>

    {/* Tip 4 */}
    <div className="bg-gray-50 border rounded-xl p-3 hover:bg-gray-100 transition">
      <p className="font-oswald font-semibold text-gray-800 text-sm">
        • Reduce salt and highly processed food consumption.
      </p>
    </div>

  </div>
</div>
{/* --- END GENERAL DOCTOR TIPS CARD --- */}
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
