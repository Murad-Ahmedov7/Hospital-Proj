import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";
import { vitalsData } from "../../data/data";

export default function Cardiology() {
  return (
    <div className=" flex justify-center  h-screen w-screen pt-[72px]">
      <div className=" flex w-[80%] h-full     bg-gray-200/30 rounded-2xl items-center  ">
        <div className=" flex flex-col gap-3 w-screen px-10    ">
          <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4   ">

            <div className="mb-1">
              <h1 className="text-2xl font-oswald font-bold">Hello, User 🖐</h1>
              <p className="text-gray-600 text-sm font-oswald">
                Your latest health update
              </p>
            </div>
            <div className="flex items-center gap-3  px-4 py-2 rounded-xl w-fit shadow-sm">
              <GiStethoscope size={32} className="text-cyan-600" />
              <p className="font-oswald font-semibold text-lg text-gray-800">
                Current Vitals
              </p>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 justify-start pr-5">
              {vitalsData.map((vital) => (
                <div
                  key={vital.id}
                  className="flex flex-col justify-start p-4 gap-1 rounded-2xl bg-cyan-400  text-white hover:scale-105 transition-transform  duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer"
                >
                  <div className="flex items-center gap-2">
                    {vital.Icon}
                    <p className="font-bold font-oswald">{vital.title}</p>
                  </div>
                  <p className="font-bold text-lg  font-oswald">
                    {vital.value}
                  </p>
                </div>
              ))}
            </div>


            <div className="w-full bg-yellow-300">

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
