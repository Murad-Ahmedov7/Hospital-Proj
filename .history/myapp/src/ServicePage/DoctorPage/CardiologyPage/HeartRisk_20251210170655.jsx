import React from "react";

export default function HeartRisk() {
  return (
    <div className="w-[99%] h-[240px] bg-yellow-300/20 rounded-2xl p-4">
      <p className="font-bold mb-3">AI Approximate Heart Disease Risk</p>
      <div className="flex w-full items-center gap-4">
        <div className="border-1 rounded-2xl h-4 w-full">
          <div className="w-[40%] bg-amber-300 h-full rounded-2xl"></div>
        </div>
        <p className="w-[150px] font-oswald font-bold">40% (Moderate)</p>
      </div>
      <p className="mt-3 font-oswald text-sm">
        <span className="font-bold">Note:</span> This AI does not provide an exact heart disease risk assessment. Please consult a doctor.
      </p>
      <button className="mt-3 bg-blue-500 w-[200px] text-white font-oswald h-[50px] rounded-2xl hover:scale-105 transition-transform duration-300 ease-in shadow-md hover:shadow-xl">
        Ask AI for Approximate Risk
      </button>
    </div>
  );
}
