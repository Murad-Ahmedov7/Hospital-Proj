import React from "react";

export default function Consultation() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      <div className="absolute  w-full h-full ">
        <img
          src="/images/consultation.jpg"
          alt="This picture is not found"
          className="object-cover w-full h-full"
        />
          <div className="absolute w-400 h-400 bg-black/75"></div>
      </div>
    
    </div>
  );
}
