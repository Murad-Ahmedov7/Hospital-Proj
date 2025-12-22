import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative w-screen min-h-screen pt-[72px] overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hospital-health-care-concept-image.jpg"
        alt="Hospital background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Right cyan panel */}
      <img
        src="/images/cyan-bg.jpg"
        alt="Cyan background"
        className="absolute right-0 top-0 h-full w-[700px]  opacity-70 object-cover"
      />

      <div className=" absolute right-0  justify-center h-[70%] w-[440px]  flex  flex-col gap-16">
        <Link to="/" className="  w-40    ">
          <img
            src="/images/mediflow-logo/mediflow-logo.png"
            alt="Logo"
            className="w-full"
          />
        </Link>

        <div className="text-white ml-4">
          <p className="text-white text-2xl">Login Now!</p>
          <p className="text-white text-xl">Welcome back! Please enter your details</p>
        </div>


      </div>

    </div>
  );
}
