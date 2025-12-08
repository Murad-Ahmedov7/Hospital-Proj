import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";

export default function Cardiology() {
  return (
    <div className=" flex justify-center  h-screen w-screen pt-[72px]">
      <div className=" flex w-[80%] h-full     bg-gray-300 items-center  ">
        <div className=" flex flex-col gap-3 w-screen px-10    ">
        

          <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4   ">

         <p className=" font-bold text-xl font-oswald  ">Hello, User 🖐</p>
          <p className="font-oswald  ">Here is your latest health update</p>
            <div className="flex items-center  gap-4">
              <GiStethoscope size={40} />
              <p className="font-bold font-oswald">Current Vitals</p>
            </div>

            <div className="flex w-full gap-4 items-center ">

              <div
                className="w-[400px] h-[100px] rounded-2xl flex flex-col justify-start p-4 gap-1
                  border border-cyan-300 
                  bg-cyan-400
                  hover:bg-gradient-to-b hover:from-cyan-400 hover:to-black/20
                  hover:text-white
                  transition-all duration-300 ease-in-out
                  shadow-md hover:shadow-xl
                  cursor-pointer">

                <div className="flex items-center gap-2">
                  <FaHeartPulse  size={30} />
                  <p className="font-semibold">Heart Rate</p>
                </div>

                <p className="font-bold text-lg">72 bpm</p>

              </div>


                    <div
                className="w-[400px] h-[100px] rounded-2xl flex flex-col justify-start p-4 gap-1
                  border border-cyan-300 
                  bg-cyan-400
                  hover:bg-gradient-to-b hover:from-cyan-400 hover:to-black/20
                  hover:text-white
                  transition-all duration-300 ease-in-out
                  shadow-md hover:shadow-xl
                  cursor-pointer">

                <div className="flex items-center gap-2">
                  <FaHeartPulse  size={30} />
                  <p className="font-semibold">Heart Rate</p>
                </div>

                <p className="font-bold text-lg">72 bpm</p>

              </div>



      <div
                className="w-[400px] h-[100px] rounded-2xl flex flex-col justify-start p-4 gap-1
                  border border-cyan-300 
                  bg-cyan-400
                  hover:bg-gradient-to-b hover:from-cyan-400 hover:to-black/20
                  hover:text-white
                  transition-all duration-300 ease-in-out
                  shadow-md hover:shadow-xl
                  cursor-pointer">

                <div className="flex items-center gap-2">
                  <FaHeartPulse  size={30} />
                  <p className="font-semibold">Heart Rate</p>
                </div>

                <p className="font-bold text-lg">72 bpm</p>

              </div>
    

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
