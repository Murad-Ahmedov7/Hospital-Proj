  // font-oswald

  import React from 'react'
  import { Link } from 'react-router-dom'

  export default function DetailsInfo() {
    return (
      // <div className='flex items-center justify-center w-full h-screen'>
      //     <Link to="/services/info/faq">Click to see FAQ</Link>
      // </div>

<div className="flex flex-col  rounded-3xl shadow-xl p-12 gap-12">

  {/* Hero şəkil */}
  <div className="flex items-center justify-center w-full h-screen relative">
    <img
      src="/images/cheerful-medics-team-hospital_23-2147763833.jpg"
      alt="Hero Visual"
      className="w-[100%] h-full rounded-2xl shadow-md  bg-gradient-to-t"
    />
    {/* Overlay gradient */}
    <div className="absolute inset-0 bg-gradient-to-t  from-cyan-400/30 to-transparent rounded-2xl"></div>
  </div>

  {/* Text və CTA */}
  <div className="flex flex-col gap-4 lg:gap-6 text-cyan-900 w-full max-w-3xl mx-auto">
    <h1 className="text-3xl lg:text-5xl font-extrabold leading-tight text-center">
      Plan your visit with ease
    </h1>

    <p className="text-base lg:text-lg text-cyan-800 leading-relaxed text-center">
      Discover everything you need about this department at a glance. 
      Read a short <strong>overview of the department</strong>, explore the <strong>profiles and availability of our doctors</strong>, and learn about the <strong>services and treatment packages</strong> we provide. 
      Check the <strong>patient preparation guide</strong> to know how to get ready for your visit, and browse the <strong>FAQ & contact information</strong> for quick answers to your questions. 
      Everything is designed to help you plan your visit smoothly and confidently.
    </p>

    <div className="flex gap-4 mt-4 justify-center flex-wrap">
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


  <div className='grid grid-cols-3'>
<div class="relative w-[190px] h-[254px] flex justify-center items-center group">
  {/* <!-- Gradient Background --> */}
  <div class="absolute inset-0 bg-gradient-to-br from-[#03a9f4] to-[#ff0058]"></div>
  <!-- Blur Effect -->
  <div class="absolute inset-0 bg-gradient-to-br from-[#03a9f4] to-[#ff0058] blur-[30px]"></div>
  <!-- Overlay -->
  <div class="absolute inset-1 bg-black/60 z-20 rounded-sm"></div>

  <!-- Image -->
  <img src="your-image.png" alt="card image"
       class="absolute z-30 scale-80 opacity-25 transition-all duration-500 group-hover:scale-50 group-hover:opacity-90 group-hover:-translate-y-16" />

  {/* <!-- Content --> */}
  <div class="absolute z-30 bottom-0 flex flex-col items-center transform scale-0 transition-all duration-500 group-hover:scale-100 group-hover:bottom-6">
    <div class="text-white font-medium text-center uppercase text-[1em] tracking-widest">
      Title
      <span class="font-light text-[0.7em]">Subtitle</span>
    </div>
    {/* <!-- Social Icons --> */}
    <ul class="flex justify-center items-center gap-2 mt-1">
      <li>
        <a href="#" class="w-7 h-7 flex justify-center items-center rounded-sm bg-black/20 text-white/50 hover:text-white transition-colors duration-500">
          <i class="fa-brands fa-facebook w-2.5"></i>
        </a>
      </li>
      <li>
        <a href="#" class="w-7 h-7 flex justify-center items-center rounded-sm bg-black/20 text-white/50 hover:text-white transition-colors duration-500">
          <i class="fa-brands fa-twitter w-3.5"></i>
        </a>
      </li>
      <!-- Daha çox icon əlavə edə bilərsən -->
    </ul>
  </div>
</div>

  </div>
</div>


    )
  }


  //bunun koduna bax bir de 