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

      <div className=" flex  justify-center  absolute    w-screen h-[700px] mt-20 overflow-hidden">
        <div className=" bg-white w-[558px] h-[812px] "></div>



        <div className="bg-[#424242] w-[372px] h-[812px] ">
          <div className=" w-full pl-10 pt-10 gap-10">
                 <h1 className="text-white text-[25px] font-bold">Contact Info</h1>
                 <div className="border-1 border-blue-300 w-12 h-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
