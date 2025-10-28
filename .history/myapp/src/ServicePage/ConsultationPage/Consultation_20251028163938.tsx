import React from "react";
import { IoMdChatboxes } from "react-icons/io";

export default function Consultation() {
  return (
    <div className="relative w-screen min-h-screen  pt-10">
      <img
        src="/images/consultation.jpg"
        alt="This picture is not found"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/75"></div>

      <div className=" flex  justify-center  absolute    w-screen h-[700px] mt-20 overflow-hidden">
        <div className=" bg-white w-[558px] h-[812px] ">


        </div>


        <div className="bg-[#424242] w-[372px] h-[812px] "> {/* umumi col dic */}

          <div className="flex flex-col pl-10 gap-6">  {/* umumi content ici div */}



            <div className=" w-full  pt-10  ">
            <h1 className="text-white text-[25px] font-bold">Contact Info</h1>
          
          </div>
            <div className="border-1 border-[#14c9e0] bg-[#07afc5] w-12 h-[3px]"></div>


          <div className="flex   w-full h-12  ">
            <button className=" bg-cyan-500 w-60  rounded-[10px] flex items-center justify-center gap-3 hover:bg-blue-900   transition duration-1000 ease-in-out  ">
              <p className=" text-gray-100 font-semibold ">
                Talk to a consultant
              </p>
              <IoMdChatboxes size={17} color="white" />
            </button>
          </div>


          <div>
            <p className="text-xl font-bold text-white">Need to discuss before treatment?</p>
          </div>


          </div>
        
        
        
        
        </div>


      </div>
    </div>
  );
}
