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

      <div className=" flex items-center justify-center absolute    w-screen h-170 mt-20   ">
        <div className=" bg-white w-[558px] h-[812px] "></div>



        <div className="bg-[#424242] w-[372px] h-[812px] flex items-center justify-center ">
              <h1 className="text-white text-2xl ">Contact Info</h1> 
        </div>
      </div>
    </div>
  );
}
