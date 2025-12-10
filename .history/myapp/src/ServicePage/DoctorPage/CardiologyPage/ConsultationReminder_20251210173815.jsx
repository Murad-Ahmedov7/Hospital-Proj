import React from 'react'

export default function ConsultationReminder() {
  return (
   /     {/* --- Modern Consultation Reminder Section --- */}
<div className=" w-[39%] rounded-2xl bg-white/60 backdrop-blur-md h-[380px] shadow-lg p-5 pt-6 border border-gray-200 transition-all duration-300 hover:shadow-xl">

  {/* Header */}
           <div className="flex items-center gap-3  mb-7   px-4 py-2 rounded-xl w-fit shadow-sm">

              <FaBell size={23} className="text-cyan-600" />

              <p className="font-oswald font-semibold text-lg text-gray-800">
                Consultion Reminder
              </p>

            </div>

  {/* Appointment Alert */}
  <div className="flex items-start gap-3 bg-red-50  border-l-3 border-red-500 p-4 rounded-xl shadow-sm">
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


  )
}
