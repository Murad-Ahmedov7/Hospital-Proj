import React from "react";
import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";
import { vitalsData } from "../../data/data";

export default function Cardiology() {
  return (
    <div className=" flex justify-center  h-screen w-screen pt-[72px] ">
      <div className=" flex w-[80%] h-full     bg-gray-600/30 rounded-2xl items-center  ">
        <div className=" flex flex-col gap-3 items-center w-screen px-10    ">
          <div className="flex flex-col gap-4 h-[70vh] mr-10 bg-white rounded-2xl pl-4 pt-4    ">

            <div className="mb-1 ">
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
                  className={`flex flex-col justify-start p-4 gap-1 rounded-2xl  ${vital.bgColor}  hover:scale-105 transition-transform  duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer`}
                >
                  <div className="flex items-center gap-2">
                    <vital.Icon size={30} /> 
                    <p className="font-bold font-oswald">{vital.title}</p>
                  </div>
                  <p className="font-bold text-lg  font-oswald">
                    {vital.value}
                  </p>
                </div>
              ))}
            </div>


            <div className="w-[99%] h-[30%] bg-yellow-300/20  rounded-2xl ">


                <div className="p-4">

                  <div className="flex flex-col w-[100%] gap-3 mb-3  ">
                      <p className="font-bold">Ai Approximete Heart Disease Risk</p>

                      <div className="flex w-full items-center gap-4">
                      <div className="border-1 rounded-2xl h-4 w-full ">
                        <div className="w-[40%]  bg-amber-300 h-full rounded-2xl"> </div>
                      </div>

                 
                        <p className="w-[10%] font-oswald font-bold">40%(Moderate)</p>
                 
                      </div>
                  </div>

                  <div className="flex flex-col gap-4">
                  <p className="font-oswald"><span className="font-bold">Note:</span> This AI does not provide an exact heart disease risk assessment. Please consult a doctor.</p>
                  <button className="bg-blue-500 w-[17%] text-white font-oswald  h-10 rounded-2xl text-[15px] hover:scale-105 transition-transform  duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer ">Ask AI for Approximete Risk </button>
                  </div>

                </div>


            <div className="mt-7 max-h-[60px] w-[320px] mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
              <p className="text-white font-semibold text-center py-4">
                Get Consult to learn your vitals
              </p>
            </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
