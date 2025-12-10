import React from "react";
import { GiStethoscope } from "react-icons/gi";
import { vitalsData } from "../../../data/data";

export default function CurrentVitals({  }) {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-3 px-4 py-2 rounded-xl w-fit shadow-sm">
        <GiStethoscope size={32} className="text-cyan-600" />
        <p className="font-oswald font-semibold text-lg text-gray-800">
          Current Vitals
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 w-full gap-4 justify-start pr-5">
        {vitalsData.map((vital) => (
          <div
            key={vital.id}
            className={`flex flex-col justify-start p-4 gap-1 rounded-2xl ${vital.bgColor} hover:scale-105 transition-transform duration-300 ease-in shadow-md hover:shadow-xl cursor-pointer`}
          >
            <div className="flex items-center gap-2">
              <vital.Icon size={30} />
              <p className="font-bold font-oswald">{vital.title}</p>
            </div>
            <p className="font-bold text-lg font-oswald">{vital.value}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
