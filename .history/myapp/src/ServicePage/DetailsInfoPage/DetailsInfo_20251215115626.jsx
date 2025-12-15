// font-oswald

import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsInfo() {
  return (
    // <div className='flex items-center justify-center w-full h-screen'>
    //     <Link to="/services/info/faq">Click to see FAQ</Link>
    // </div>

<div className="relative flex flex-col xl:flex-row items-center bg-cyan-50 rounded-3xl shadow-xl p-8 lg:p-12 gap-8 lg:gap-12 overflow-hidden">
      
      {/* Sol tərəf: böyük vizual / şəkil */}
      <div className="flex-shrink-0 w-full  xl:w-[60%] 2xl:-w-[50%]  lg:h-[600px] relative">
        <img
          src="/images/cheerful-medics-team-hospital_23-2147763833.jpg" // buraya öz şəklini qoy
          alt="Hero Visual"
          className="w-full h-full  rounded-2xl shadow-md"
        />
        {/* optional: overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/50 to-transparent rounded-2xl"></div>
      </div>

      {/* Sağ tərəf: text və CTA */}
      <div className="flex flex-col gap-4 lg:gap-6 text-cyan-900   xl:w-[40%] 2xl:w-[50%]">
        <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
          Plan your visit with ease
        </h1>
        <p className="text-base lg:text-lg text-cyan-800 leading-relaxed">
          Explore our hospital departments, services, and doctors.
          Prepare for your visit with guidance and find answers to FAQs.
        </p>
        <div className="flex gap-4 mt-4">
          <button className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition">
            See Doctors
          </button>
          <button className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-100 transition">
            Book Appointment
          </button>
        </div>
      </div>
    </div>
  )
}
