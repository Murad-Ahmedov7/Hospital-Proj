import React from "react";

export default function Doctors() {


const alphabetList = [
  "*","A","B","C","D","E","F","G","H","I","J","K","L",
  "M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"
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
      <div className="main flex items-center justify-center w-full h-full">
        <div className=" w-[68%] h-[100%] flex  header-row ">


          <div className="w-[20%] h-[10%] department-filter flex justify-start">
            <select className="border-1 border-gray-500 w-[82%] h-[55px]">
              <option>All</option>
              <option>Pharmacy</option>
              <option>Labarotory</option>
            </select>
          </div>

          <div className="dt-sc-doctors-sorting flex gap-4 ">
            {
                alphabetList.map((item)=>(
                    <a className="text-[#00bcd5] " key={item}>
                        <div className="border-1 ">{item}</div>
                    </a>
                ))
            }
          </div>
        </div>
      </div>
    </div>
  );
}


