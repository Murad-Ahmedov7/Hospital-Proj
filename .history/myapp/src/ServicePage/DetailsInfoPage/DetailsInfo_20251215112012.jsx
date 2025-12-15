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
      <div className="flex-shrink-0 w-32 h-32 bg-cyan-100 rounded-lg flex items-center justify-center">
        {/* Buraya istədiyin şəkili yerləşdirə bilərsən */}
        <span className="text-cyan-500 font-bold text-2xl">Icon</span>
      </div>

      {/* Sağ tərəf: text */}
      <div className="flex flex-col gap-3 text-cyan-900">
        <h1 className="text-2xl lg:text-3xl font-bold">
          Plan your visit with ease
        </h1>
        <p className="text-sm lg:text-base text-cyan-800">
          Learn about our departments, services, doctors, and preparation guides. 
          Find answers to FAQs and contact info.
        </p>
      </div>

    </div>
  )
}
