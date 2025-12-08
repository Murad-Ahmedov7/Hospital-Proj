import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

export default function Cardiology() {
  return (
    <div className="min-h-screen w-screen pt-[72px] ">

      <div className=" flex flex-col gap-3 w-screen ml-10 justify-center ">

        <p className=" font-bold text-xl font-oswald">Hello, User 🖐</p>
        <p className="font-oswald">Here is your latest health update</p>

     <div className="flex w-full gap-4">
  <div className="flex items-center gap-4 p-4 border-2 rounded-2xl shadow-md hover:shadow-lg transition-shadow duration-300 w-[250px] bg-white">
    
    {/* Icon */}
    <div className="flex items-center justify-center bg-blue-100 w-14 h-14 rounded-full">
      <FaHeartPulse color="blue" size={28} />
    </div>

    {/* Text */}
    <div className="flex flex-col">
      <p className="font-oswald text-lg font-semibold text-gray-800">Heart Rate</p>
      <p className="text-sm text-gray-500">72 bpm</p> {/* optional, demo value */}
    </div>

  </div>
</div>

      </div>

    </div>
  );
}
