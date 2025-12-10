import React from 'react'

export default function DoctorTips() {
  return (
        <div className="w-[80%] bg-white/80 backdrop-blur-md rounded-2xl shadow-lg border border-gray-200 p-6 mr-1">

  {/* Header */}
           <div className="flex items-center gap-3  px-4 py-2 mb-5 rounded-xl w-fit shadow-sm">

              <CiCircleList size={32} className="text-cyan-600" />

              <p className="font-oswald font-semibold text-lg text-gray-800">
                Doctor Recommendation
              </p>

            </div>  

  {/* Tips Grid */}
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
        className="bg-gradient-to-br from-gray-50 to-gray-100 
                   border border-gray-200 
                   rounded-xl p-4 
                   shadow-sm hover:shadow-md 
                   hover:bg-gray-50 
                   transition-all duration-300 ease-out"
      >
        <p className="font-oswald font-semibold text-gray-700 text-sm leading-relaxed">
          • {tip}
        </p>
      </div>
    ))}

  </div>
</div>
  )
}
