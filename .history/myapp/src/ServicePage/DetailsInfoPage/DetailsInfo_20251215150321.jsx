// font-oswald

import React from "react";
import { Link } from "react-router-dom";
import { FcDepartment } from "react-icons/fc";

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
          Discover everything you need about this department at a glance. Read a
          short <strong>overview of the department</strong>, explore the{" "}
          <strong>profiles and availability of our doctors</strong>, and learn
          about the <strong>services and treatment packages</strong> we provide.
          Check the <strong>patient preparation guide</strong> to know how to
          get ready for your visit, and browse the{" "}
          <strong>FAQ & contact information</strong> for quick answers to your
          questions. Everything is designed to help you plan your visit smoothly
          and confidently.
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

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
  <div className="relative w-[290px] h-[354px] flex justify-center items-center group rounded-2xl overflow-hidden">
    {/* Gradient border */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#03a9f4] to-white"></div>
    {/* Glow */}
    <div className="absolute inset-0 bg-gradient-to-br from-[#03a9f4] to-white blur-[30px]"></div>
    {/* Dark overlay */}
    <div className="absolute inset-1 bg-black/10 rounded-2xl transition-colors duration-300 group-hover:bg-black/40"></div>

    {/* Card content */}
    <div className="absolute flex flex-col items-center gap-3  transition-transform duration-300 group-hover:scale-105">
      <FcDepartment size={70} />
      <p className="text-3xl lg:text-4xl font-semibold text-center text-white">
        Department Overview
      </p>
    </div>
  </div>
</div>

    </div>
  );
}

//bunun koduna bax bir de
