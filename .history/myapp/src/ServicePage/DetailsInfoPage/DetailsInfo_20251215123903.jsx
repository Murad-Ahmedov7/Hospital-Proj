  // font-oswald

  import React from 'react'
  import { Link } from 'react-router-dom'

  export default function DetailsInfo() {
    return (
      // <div className='flex items-center justify-center w-full h-screen'>
      //     <Link to="/services/info/faq">Click to see FAQ</Link>
      // </div>

 <div className="flex flex-col  bg-cyan-50  rounded-3xl shadow-xl px- gap-12 ">

      {/* Hero şəkil */}
      <div className="flex-shrink-0  w-full h-[820px]  relative">
        <img
          src="/images/cheerful-medics-team-hospital_23-2147763833.jpg" // buraya öz şəkilini qoy
          alt="Hero Visual"
          className="w-full h-full  rounded-2xl shadow-md  "
        />
        {/* Overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-cyan-400/50 to-transparent rounded-2xl"></div>
      </div>

      {/* Text və CTA */}
      <div className="flex flex-col gap-4 lg:gap-6 text-cyan-900 w-full">
        <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight">
          Plan your visit with ease
        </h1>

        <p className="text-base lg:text-lg text-cyan-800 leading-relaxed">
          Discover everything you need about this department at a glance. 
          Read a short <strong>overview of the department</strong>, explore the <strong>profiles and availability of our doctors</strong>, and learn about the <strong>services and treatment packages</strong> we provide. 
          Check the <strong>patient preparation guide</strong> to know how to get ready for your visit, and browse the <strong>FAQ & contact information</strong> for quick answers to your questions. 
          Everything is designed to help you plan your visit smoothly and confidently.
        </p>

        <div className="flex gap-4 mt-4 ">
          <Link
            to="/"
            className="bg-cyan-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-cyan-600 transition flex items-center gap-2"
          >
            🏠 Back Home
          </Link>
          <Link
            to="/services/consultation"
            className="border border-cyan-500 text-cyan-500 px-6 py-2 rounded-lg font-semibold hover:bg-cyan-100 transition"
          >
            Book Appointment
          </Link>
        </div>
      </div>
    </div>
    )
  }
