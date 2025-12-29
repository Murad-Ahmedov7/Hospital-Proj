import React from "react";

export default function Doctors() {
  return (
    <div className="pt-[72px] flex flex-col gap-10 w-screen h-screen ">

      {/* Header Section */}
      <div className=" flex items-center justify-center  mt-6 bg-gray-200 h-[180px]">
        <div className="w-[72%]">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Header Section */}

      {/* Main Content */}
      <div className="main flex items-center justify-center w-full h-full">
        <div className=" w-[78%] h-[100%] flex justify-center ">
          <div className="w-full h-[10%]">
            <select className="bg-gray-00 w-[20%] h-[60px]">
              <option>All</option>
              <option>Pharmacy</option>
              <option>Labarotory</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}
