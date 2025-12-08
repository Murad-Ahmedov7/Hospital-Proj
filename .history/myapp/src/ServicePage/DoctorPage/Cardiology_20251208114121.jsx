import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";

export default function Cardiology() {
  return (

    <div className=" flex justify-center h-screen w-screen">
    <div className=" flex w-[80%] h-full pt-[72px]   bg-gray-300">
      <div className=" flex flex-col gap-3 w-screen  ml-10 ">
        <p className=" font-bold text-xl font-oswald">Hello, User 🖐</p>
        <p className="font-oswald">Here is your latest health update</p>

        <div className="w-screen h-[50vh] bg-white rounded-2xl">

          <div className="flex p-4 gap-4">
            <GiStethoscope size={30} />
            <p className="font-bold font-oswald">Current Vitals</p>
          </div>


          <div className="flex w-full gap-3">
            <div className="border-2 w-[400px] h-[100px] rounded-2xl flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-2">
                <FaHeartPulse size={30} color="blue" />
                <p>Heart Rate</p>
                </div>
                <p>72 bpm</p>
            </div>
            </div>

            
        </div>
      </div>
    </div>
    </div>

  );
}
