import React from "react";

export default function Doctors() {
  const alphabetList = [
    "*",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
  ];

  return (
    <div className="pt-[72px] flex flex-col gap-14 w-screen h-screen ">
      {/* Header Section */}
      <div className=" flex items-center justify-center  mt-6 bg-gray-200 h-[180px]">
        <div className="w-[68%]">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Header Section */}

      {/* Main Content */}
    <div className="main flex justify-center w-full h-full">
  <div className="w-[90%] h-full flex justify-center">

    <div className="w-[93%] flex items-center justify-center header-row">

      {/* Department Filter */}
      <div className="department-filter w-[20%] h-[10%] flex">
        <select className="border border-gray-500 w-[92%] h-[55px] px-4">
          <option>All</option>
          <option>Pharmacy</option>
          <option>Laboratory</option>
        </select>
      </div>

      {/* Alphabet Sorting */}
      <div className="dt-sc-doctors-sorting flex w-[78%] gap-2">
        {alphabetList.map((item) => (
          <div key={item} className="border border-gray-500/40 py-4 px-3">
            <a className="text-[#00bcd5]">{item}</a>
          </div>
        ))}
      </div>

    </div>

  </div>
</div>

    </div>
  );
}
