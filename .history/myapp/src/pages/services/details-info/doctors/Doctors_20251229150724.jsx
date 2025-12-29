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
        <div className="  lg:w-[85%] 2xl:w-[58%]">
          <p className="font-bold text-4xl">Doctors</p>
        </div>
      </div>

      {/* Header Section */}

      {/* Main Content */}
      <div className="main flex justify-center  w-[100%] h-[100%]">


        <div className=" flex  w-[90%] h-[80%] justify-center items-start">

        <div className="  xl:w-[98%] 2xl:w-[100%]    flex items-center justify-center 2xl:pr-22   header-row  ">
          <div className=" lg:w-[23%] xl:w-[17%]   h-[10%] department-filter flex ">
            <select className="border-1 border-gray-500 w-[92%] h-[55px] px-4">
              <option>All</option>
              <option>Pharmacy</option>
              <option>Labarotory</option>
            </select>
          </div>

          <div className="dt-sc-doctors-sorting  flex lg:w-[77%] xl:w-[75%] 2xl:w-[45%] lg:flex-wrap xl:flex-nowrap lg:justify-center lg:pt-2 xl:justify-start   ">
            {alphabetList.map((item) => (
              <div className="border-1 border-gray-500/40 py-4 px-[10px] ">
                <a className="text-[#00bcd5]" key={item}>
                  {item}
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* <div className="doctor-div">
          <div className="doctor-img">
            <img src="/images/doctors/doctor1.jpg" alt="Image not found " />
          </div>
        </div> */}


        </div>
      </div>
    </div>
  );
}
