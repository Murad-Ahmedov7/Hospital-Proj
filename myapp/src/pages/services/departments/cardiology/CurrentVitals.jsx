import React from "react";
import { GiStethoscope } from "react-icons/gi";
import HeartRisk from "./HeartRisk";

export default function CurrentVitals({vitalsData}) {
  return (

        <div className=" flex flex-col gap-3  w-screen px-10    ">
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

            <div className="w-[99%] h-[240px] bg-yellow-300/20  rounded-2xl ">

             <HeartRisk/>

              <div className="flex items-center h-[141px] mt-8">
                <div className="flex justify-center  max-h-[60px] w-[320px] mx-auto bg-gradient-to-r from-blue-400 to-blue-600 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer">
                  <button className="text-white font-semibold text-center py-4">
                    Get Consult to learn your vitals
                  </button>
                </div>
              </div>
              
            </div>
          </div>
          </div>

  );
}
    