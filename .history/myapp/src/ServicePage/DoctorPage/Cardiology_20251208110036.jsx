import React from "react";
import { FaHeartPulse } from "react-icons/fa6";

export default function Cardiology() {
  return (
    <div className="min-h-screen w-screen pt-[72px]">

      <div className=" flex flex-col gap-3 w-screen ml-10 ">

        <p className=" font-bold text-xl font-oswald">Hello, User 🖐</p>
        <p className="font-oswald">Here is your latest health update</p>

        <div className="flex w-full gap-3">

          <div className="flex border-2 w-[200px] h-[100px] rounded-2xl  justify-center">

            <FaHeartPulse size={30} color="blue"/>
            <p>Heart Rate</p>
                  <div><p>72bpm</p></div>
          </div>

    
        
        </div>
      </div>

    </div>
  );
}
