import React from "react";

export default function Faq() {
  return (
    <div className="w-full h-screen"> 
      <div className="flex flex-col gap-4 items-center justify-center w-full h-full ">
        {/*content div*/}

        <p className="text-6xl  font-oswald font-semibold text-[#2d3549]">
          FAQ
        </p>

        <div className="border-2 w-[60px]  mr-2 justify-center border-[#446ccc]"></div>

        <p className="text-[#808080] text-2xl font-semibold w-[80%] text-center font-oswald">
          Everything you could want to know about bone marrow transplantation.
          If you still have any questions, you can sign up for a free
          consultation with an experienced doctor.
        </p>

        <div>{/*faq tabs div*/}
          
          <div className="flex gap-2 justify-between w-[67vw] text-[#2d3549] font-oswald">  {/*row  div*/}

            <div>          {/*row each element  div*/}
              <div className="flex">
                  <p className=" text-2xl   text-center font-oswald">Why is a bone marrow transplant needed?</p>
              <p>arrow</p>
              </div>
              <div className="border-1 border-black/15 "></div>
            </div>   {/*row each element  div*/}

             <div>          {/*row each element  div*/}
              <div className="flex">
                  <p className=" text-2xl   text-center font-oswald">Why is a bone marrow transplant needed?</p>
              <p>arrow</p>
              </div>
              <div className="border-1 border-black/15 "></div>
            </div>   {/*row each element  div*/}

          </div>         {/*row  div*/}      

        </div>{/*faq tabs div*/}
      </div>
    </div>
  );
}
