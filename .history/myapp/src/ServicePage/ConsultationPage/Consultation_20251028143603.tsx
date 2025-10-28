import React from "react";

export default function Consultation() {
  return (
    <div className="relative w-screen min-h-screen  pt-10">
      <img
        src="/images/consultation.jpg"
        alt="This picture is not found"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/75"></div>

      <div className=" flex items-center justify-center absolute w-screen h-120 mt-5 overflow-hidden ">
        <div className="  absolute  bg-white w-[558px] h-[812px] "></div>

        <div className= " absolute bg-black w-[372px] h-[812px]"></div>
      </div>
    </div>
  );
}
