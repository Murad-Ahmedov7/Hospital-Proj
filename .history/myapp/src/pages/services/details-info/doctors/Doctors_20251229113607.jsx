import React from "react";

export default function Doctors() {


    const letters=[
        {

        }
    ]

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
        <div className=" w-[68%] h-[100%] flex justify-center header-row ">
          <div className="w-full h-[10%] department-filter">
            <select className="border-1 border-gray-500 w-[22%] h-[55px]">
              <option>All</option>
              <option>Pharmacy</option>
              <option>Labarotory</option>
            </select>
          </div>

          <div className="dt-sc-doctors-sorting">

          </div>
        </div>
      </div>
    </div>
  );
}


<div class="dt-sc-doctors-sorting"><a href="#" class=""> * </a><a href="#" class="">A</a><a href="#" class="">B</a><a href="#" class="">C</a><a href="#" class="">D</a><a href="#" class="">E</a><a href="#" class="">F</a><a href="#" class="">G</a><a href="#" class="">H</a><a href="#" class="">I</a><a href="#" class="">J</a><a href="#" class="">K</a><a href="#" class="">L</a><a href="#" class="">M</a><a href="#" class="">N</a><a href="#" class="">O</a><a href="#" class="">P</a><a href="#" class="">Q</a><a href="#" class="">R</a><a href="#" class="">S</a><a href="#" class="">T</a><a href="#" class="">U</a><a href="#" class="">V</a><a href="#" class="">W</a><a href="#" class="">X</a><a href="#" class="">Y</a><a href="#" class="active-sort">Z</a>		</div>