import React from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "./FaqData";
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

        <div className="mt-8 flex flex-col gap-8 ">

          {/* {[...Array(5)].map((_, i) => (
            <div className="flex gap-10 justify-start w-[71vw] text-[#2d3549] font-oswald">
       
              
     
                {[...Array(2)].map((_, j) => ( 
                <div>
                  <div className="flex justify-between">
                    <p className=" text-[24px]   text-center font-oswald text-black/70">
                      Why is a bone marrow transplant needed?
                    </p>
                    <FaChevronDown />
                  </div>
                  <div className="border-1 border-black/15 w-[660px] mt-6 "></div>
                </div>
              ))}
            </div>
          ))} */}


{/* 
            {data.map(item => (
        <div key={item.id} className="flex gap-4">
          {item.row.map((d, i) => (
            <p key={i}>{d}</p>
          ))}
        </div>
      ))} */}


      {
        faqData.map((item)=>(
          <div key={item.id} className="flex gap-10 justify-start w-[71vw] text-[#2d3549] font-oswald">
            {
              const data2=item.row.
              item.row.map((d,i)=>(
                <div key={i}>
                  <div className="flex justify-between">
                    <p className=" text-[24px]   text-center font-oswald text-black/70">
                     {d}
                    </p>
                    <p>
                      
                        <p></p>
                    </p>
                    <FaChevronDown />
                  </div>
                  <div className="border-1 border-black/15 w-[660px] mt-6 "></div>
                </div>
              ))
            }
          </div>
        ))
      }


        </div>
      </div>
    </div>
  );
}
