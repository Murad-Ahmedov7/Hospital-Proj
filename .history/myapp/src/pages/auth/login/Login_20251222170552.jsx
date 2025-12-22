import React from "react";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <div className="relative w-screen min-h-screen  overflow-hidden">
      {/* Background image */}
      <img
        src="/images/hospital-health-care-concept-image.jpg"
        alt="Hospital background"
        className="absolute w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Right cyan panel */}
      <div className="absolute right-0 top-0 h-full w-[35%] opacity-90 overflow-hidden">
        <img
          src="/images/cyan-bg.jpg"
          alt="Cyan background"
          className="w-full h-full object-cover "
        />

        {/* Panelin ortasındakı content */}
        <form className="absolute inset-0 flex flex-col gap-10   justify-center items-center">
          <Link to="/" className="w-40">
            <img
              src="/images/mediflow-logo/mediflow-logo.png"
              alt="Logo"
              className="w-full"
            />
          </Link>

          <div className="text-white flex flex-col items-center gap-4 ">
            <p className="text-white text-4xl  font-bold ">Login Now!</p>
            <p className="text-white text-[16px]">
              Welcome back! Please enter your details
            </p>
          </div>

          
          <div className="flex flex-col gap-1 sm:w-[80%] xl:w-[70%] ">
            <label className="   text-white/90 font-bold">Email</label>
            <input
              type="text"
              placeholder="Enter your email"
              className=" px-4 py-3 rounded-lg bg-white/90

      text-black text-base font-medium
      placeholder:text-gray-400 placeholder:text-md

      focus:outline-none
      focus:ring-2 focus:ring-cyan-400
      focus:placeholder:text-transparent

      shadow-xl border border-white/20 "
            />
          </div>

       
          <div className="flex flex-col gap-1 sm:w-[80%] xl:w-[70%]">
            <label className="text-white/90 font-bold">Password</label>

            <input
              type="text"
              placeholder="Enter your password"
              className="
      px-4 py-3 rounded-lg bg-white/90

      text-black text-base font-medium
      placeholder:text-gray-400 placeholder:text-md

      focus:outline-none
      focus:ring-2 focus:ring-cyan-400
      focus:placeholder:text-transparent

      shadow-xl border border-white/20
    "
            />
          </div>

          <div className="flex  lg:w-[80%] sm:w-[80%] xl:w-[70%] justify-between">

            <div className="flex gap-3">
                  <input type="checkbox" />
            <label className="text-white lg:text-sm xl:text-base font-bold">Remember me</label>
            </div>

            <Link className=" lg:text-sm  xl:text-base font-bold">Forgot password?</Link>

          </div>


         <div className="button-wrapper  sm:w-[80%] xl:w-[70%]">
          <button
            type="submit"
            className="w-full py-3 bg-cyan-500 hover:bg-cyan-600 transition-colors duration-800 text-white font-semibold rounded-2xl"
          >
            Login
          </button>
        </div>

        <div className="text-white text-lg flex gap-2 ">
          Don't have an account? 
          <Link to="/auth/signup" className="text-cyan-400 underline">
            Sign Up
          </Link>
        </div>


        {/* <div className="sm:w-[80%] xl:w-[70%] flex items-center  text-white">
          <div className="border  h-0 w-[50%]  ">
          </div>
            <p className="text-sm    text-nowrap ">Or Continue With</p>
          <div className="border h-0 w-[43%]  ">
          </div>
      
        </div> */}
        <div className="sm:w-[80%] xl:w-[70%] flex items-center text-white">
      <div className="flex-1 border-t border-white/50"></div>
      <p className="text-sm whitespace-nowrap px-2">Or Continue With</p>
      <div className="flex-1 border-t border-white/50"></div>
      </div>

         <div className="sm:w-[80%] xl:w-[70%] flex items-center  text-white">    

         </div>



        </form>
      </div>
    </div>
  );
}

// login ve register smartTour dan tam bax responsivliyine bax

//object-cover menasi
