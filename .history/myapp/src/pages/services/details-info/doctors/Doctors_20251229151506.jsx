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
        <div className="  lg:w-[90%] xl:w-[85%] 2xl:w-[58%]">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Header Section */}

      {/* Main Content */}
<div className="main flex justify-center w-full">

  <div className="w-[90%] flex justify-center">

    <div className="header-row flex items-center w-full xl:w-[98%] 2xl:w-full">

      {/* Department Filter */}
      <div className="department-filter flex lg:w-[23%] xl:w-[17%]">
        <select className="border border-gray-500 w-full h-[55px] px-4">
          <option>All</option>
          <option>Pharmacy</option>
          <option>Laboratory</option>
        </select>
      </div>

      {/* Alphabet Sorting */}
      <div
        className="
          dt-sc-doctors-sorting
          flex
          lg:w-[77%]
          xl:w-[75%]
          2xl:w-[60%]
          lg:flex-wrap
          xl:flex-nowrap
          justify-start
          gap-2
          ml-4
        "
      >
        {alphabetList.map((item) => (
          <div
            key={item}
            className="border border-gray-500/40 px-3 py-3"
          >
            <a className="text-[#00bcd5] font-medium">
              {item}
            </a>
          </div>
        ))}
      </div>

    </div>

  </div>
</div>

    </div>
  );
}
