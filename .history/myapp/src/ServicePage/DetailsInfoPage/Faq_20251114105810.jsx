import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
export default function Faq() {
  return (
    <div className="w-full h-screen"> 
      <div className="flex flex-col gap-6 items-center justify-center w-full h-full ">
        {/*content div*/}

        <p className="text-6xl  font-oswald font-semibold text-[#2d3549]">
          FAQ
        </p>

        <div className="border-2 w-[60px]  mr-2 justify-center border-[#446ccc]"></div>

        <p className="text-[#808080] text-xl font-semibold w-[71%] text-center font-oswald">
          Everything you could want to know about bone marrow transplantation.
          If you still have any questions, you can sign up for a free
          consultation with an experienced doctor.
        </p>

        <div className="mt-8 flex flex-col gap-8 ">{/*faq tabs div*/}
          
         
[...Array(5)].map((_, i) => (
  <p key={i}>{i}</p>
))
          
          

        </div>{/*faq tabs div*/}
      </div>
    </div>
  );
}
