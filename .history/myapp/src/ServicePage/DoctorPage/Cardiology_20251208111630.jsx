import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

export default function Cardiology() {
  return (
    <div className="min-h-screen w-screen pt-[72px] bg-blue-300/10">

      <div className=" flex flex-col gap-3 w-screen ml-10 ">

        <p className=" font-bold text-xl font-oswald">Hello, User 🖐</p>
        <p className="font-oswald">Here is your latest health update</p>


                {/* <div className="flex w-full gap-3">
            <div className="border-2 w-[200px] h-[100px] rounded-2xl flex flex-col items-center justify-center gap-1">
                <div className="flex items-center gap-2">
                <FaHeartPulse size={30} color="blue" />
                <p>Heart Rate</p>
                </div>
                <p>72 bpm</p>
            </div>
            </div> */}


            <div className="w-screen h-[50vh] bg-white rounded-2xl">
            
            </div>
      
      </div>

    </div>
  );
}
