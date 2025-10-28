import React from "react";

export default function Consultation() {
  return (
  <div className="relative w-screen min-h-screen">

    <img
      src="/images/consultation.jpg"
      alt="This picture is not found"
      className="object-cover w-full h-full absolute inset-0"
    />
    <div className="absolute inset-0 bg-black/75"></div>

    <div className=" flex items-center justify-center absolute  w-[500px] h-[300px] ">
      <div className="bg-white absolute  flex items-center justify-center  w-[200px] h-[100px]">
      </div>
    </div>
    
  </div>
  );
}
