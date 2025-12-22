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
        className="absolute right-0 top-0 pt-[72px] h-full w-[35%]  opacity-70 object-cover"
      />

        <div className=" absolute left-1/2 -translate-y-1/2 -translate-x-1/2 justify-center items-center  h-[70%] w-[100%]  flex  flex-col gap-16 overflow-hidden ">
        <Link to="/" className="w-40">
          <img
            src="/images/mediflow-logo/mediflow-logo.png"
            alt="Logo"
            className="w-full"
          />
        </Link>



      </div>

    </div>
  );
}




        // {/* <div className="text-white flex flex-col items-center gap-4 ">
        //   <p className="text-white text-4xl  font-bold ">Login Now!</p>
        //   <p className="text-white text-lg">Welcome back! Please enter your details</p>
        // </div>


        //   {/* Username */}
        //   <div className="flex flex-col gap-1 w-[40%] ">
        //     <label className="   text-white/90">Email</label>
        //     <input
        //       type="text"
        //       placeholder="Enter your email"
        //       className="px-4 py-3 rounded-lg bg-white/90 text-black shadow-sm border border-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400 "
        //     />
        //   </div>
