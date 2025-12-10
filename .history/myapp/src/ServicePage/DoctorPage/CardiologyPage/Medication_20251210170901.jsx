import React from "react";
import { GiMedicinePills } from "react-icons/gi";

export default function Medications({ medicinesData }) {
  return (
    <div className="flex flex-col w-[40.5%] shadow-2xl rounded-2xl p-4 h-[380px] overflow-y-auto">
      <div className="flex items-center gap-3 px-4 py-2 mb-2 rounded-xl w-fit shadow-sm">
        <GiMedicinePills size={32} className="text-cyan-600" />
        <p className="font-oswald font-semibold text-lg text-gray-800">
          Current Medications
        </p>
      </div>

      <div className="flex flex-col gap-3">
        {medicinesData.map((med) => (
          <div
            key={med.id}
            className={`rounded-2xl border-l-4 min-w-[320px] ${med.borderColor} h-20 bg-gray-100/60
              hover:scale-105 transition-transform duration-300 ease-in shadow-md
              hover:shadow-xl cursor-pointer flex justify-between items-center px-4`}
          >
            <div className="flex flex-col">
              <p className="font-oswald font-bold text-lg text-gray-800">{med.name}</p>
              <span className="text-sm text-gray-600">{med.dose}</span>
            </div>
            <div className="flex gap-2">
              {med.morning && <span className="px-2 py-1 text-xs rounded-md bg-amber-300 text-black font-semibold">Morning</span>}
              {med.day && <span className="px-2 py-1 text-xs rounded-md bg-sky-300 text-black font-semibold">1/Day</span>}
              {med.night && <span className="px-2 py-1 text-xs rounded-md bg-purple-300 text-black font-semibold">Night</span>}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
