import React from "react";
import { GiMedicinePills } from "react-icons/gi";

export default function Medication({medicinesData}) {
  return (
    <div className="flex justify-start w-[40.5%] h-[380px]   shadow-2xl rounded-2xl">
      <div className=" flex flex-col gap-3  w-full px-10 overflow-y-auto         ">
        <div className="flex flex-col  gap-4 h-[70vh] mr-10 rounded-2xl pl-4 pt-4 ">
          <div className="mt-3 flex flex-col gap-4 ">
            <div className="flex items-center gap-3  px-4 py-2 mb-2 rounded-xl w-fit shadow-sm">
              <GiMedicinePills size={32} className="text-cyan-600" />

              <p className="font-oswald font-semibold text-lg text-gray-800">
                Current Medications
              </p>
            </div>

            <div className="flex flex-col gap-3">
              {medicinesData.map((vital) => (
                <div
                  key={vital.id}
                  className={`rounded-2xl border-l-4 min-w-[320px] ${vital.borderColor} h-20 bg-gray-100/60
        hover:scale-105 transition-transform duration-300 ease-in shadow-md
        hover:shadow-xl cursor-pointer flex justify-between items-center px-4`}
                >
                  {/* Left side */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col leading-tight">
                      <p className="font-oswald font-bold text-lg text-gray-800">
                        {vital.name}
                      </p>
                      <span className="text-sm text-gray-600">
                        {vital.dose}
                      </span>
                    </div>
                  </div>

                  {/* Right side badges */}
                  <div className="flex gap-2">
                    {vital.morning && (
                      <span className="px-2 py-1 text-xs rounded-md bg-amber-300 text-black font-semibold">
                        Morning
                      </span>
                    )}
                    {vital.day && (
                      <span className="px-2 py-1 text-xs rounded-md bg-sky-300 text-black font-semibold">
                        1/Day
                      </span>
                    )}
                    {vital.night && (
                      <span className="px-2 py-1 text-xs rounded-md bg-purple-300 text-black font-semibold">
                        Night
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
