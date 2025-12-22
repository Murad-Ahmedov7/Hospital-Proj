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
      <div className="absolute right-0 top-0 pt-[72px] h-full w-[35%] opacity-90 overflow-hidden">
        <img
          src="/images/cyan-bg.jpg"
          alt="Cyan background"
          className="w-full h-full "
        />

        {/* Panelin ortasındakı content */}
        <div className="absolute inset-0 flex flex-col gap-10  justify-center items-center">
          <Link to="/" className="w-40">
            <img
              src="/images/mediflow-logo/mediflow-logo.png"
              alt="Logo"
              className="w-full"
            />
          </Link>

          <form >

            
          </form>


        </div>
      </div>
    </div>
  );
}

// login ve register smartTour dan tam bax responsivliyine bax

//object-cover menasi
