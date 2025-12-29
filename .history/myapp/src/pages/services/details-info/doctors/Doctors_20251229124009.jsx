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
        <div className="w-[200px]">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Header Section */}

      {/* Main Content */}
      <div className="main  w-full px-[40px] h-full">


        <div className="w-[90%]">


        <div className=" w-[50%]  flex items-center justify-center   header-row  ">
          <div className="w-[30%] h-[10%] department-filter flex justify-start">
            <select className="border-1 border-gray-500 w-[92%] h-[55px] px-4">
              <option>All</option>
              <option>Pharmacy</option>
              <option>Labarotory</option>
            </select>
          </div>

          <div className="dt-sc-doctors-sorting flex w-[7%]   ">
            {alphabetList.map((item) => (
              <div className="border-1 border-gray-500/40 py-4 px-3 ">
                <a className="text-[#00bcd5]" key={item}>
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        <div className="doctor-div">
          <div className="doctor-img">
            <img src="/images/doctors/doctor1.jpg" alt="Image not found " />
          </div>
        </div>


        </div>
      </div>
    </div>
  );
}
