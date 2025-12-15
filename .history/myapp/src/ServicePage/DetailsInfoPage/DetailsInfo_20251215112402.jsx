// font-oswald

import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsInfo() {
  return (
    // <div className='flex items-center justify-center w-full h-screen'>
    //     <Link to="/services/info/faq">Click to see FAQ</Link>
    // </div>

        <div className="flex flex-col lg:flex-row items-center bg-white rounded-2xl shadow-md p-6 lg:p-10 gap-6 lg:gap-12">
      
      {/* Sol tərəf: şəkil / icon */}
   <div className="flex flex-col lg:flex-row items-center bg-white rounded-3xl shadow-xl p-8 lg:p-12 gap-8 lg:gap-12">
      
      {/* Sol tərəf: modern circular image / icon */}
      <div className="flex-shrink-0 w-36 h-36 bg-cyan-50 rounded-full flex items-center justify-center shadow-inner">
        {/* Placeholder üçün */}
        <span className="text-cyan-500 font-extrabold text-3xl">🏥</span>
      </div>

      {/* Sağ tərəf: text */}
      <div className="flex flex-col gap-4 text-cyan-900 max-w-lg">
        <h1 className="text-3xl lg:text-4xl font-extrabold leading-tight">
          Plan your visit with ease
        </h1>
        <p className="text-base lg:text-lg text-cyan-800 leading-relaxed">
          Explore our hospital departments, services, and doctors. 
          Prepare for your visit with guidance and find answers to frequently asked questions.
        </p>
      </div>
      
    </div>

    </div>
  )
}
