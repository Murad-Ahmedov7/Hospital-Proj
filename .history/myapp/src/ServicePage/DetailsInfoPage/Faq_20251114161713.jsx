import React, { useEffect, useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { faqData } from "./FaqData";

export default function Faq() {

  
    // const [openedElements,setOpenedElements]=useState([])

    const [faqItems, setFaqItems] = useState(faqData);


  const handleButton = (id) => {
 const updatedFaq = faqItems.map((f) => ({
    ...f,
    row: f.row.map((q) =>
      q.id === id ? { ...q, open: !q.open } : q
    ),
  }));
    // console.log(`${data1.row[0].question} :::element tapidi`)
     setFaqItems(updatedFaq);
  };


  

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
          {/* {[...Array(5)].map((_, i) => ( */}

          {faqItems.map((item) => (
            <div
              key={item.id}
              className="flex gap-10 justify-start w-[71vw] text-[#2d3549] font-oswald"
            >
              {item.row.map((qa, i) => (
                <div className="flex flex-col gap-4 " key={i}>
                  <div className="flex justify-between">
                    <p className="text-[24px] text-center font-oswald text-black/70">
                      {qa.question}
                    </p>
                    <div  onClick={() => handleButton(qa.id)}>
                        {qa.open ? <FaChevronUp /> : <FaChevronDown />}
                    </div>
                  </div>

                     
                <div
                  className={`overflow-hidden transition-all  duration-600 ease-in-out`}
                  style={{ maxHeight: qa.open ? "200px" : "0px" }}
                >
                  <p className="p-2">{qa.answer}</p>
                </div>

                        
                    {/* <div>
                      {
                        openedElements.map((item)=>(
                          item.row.map((q)=>(
                            q.open? <p key={q.id}>{q.answer}</p> : null
                          ))
                        ))
                      }
                    </div> */}
                  

                  <div className="border border-black/15 w-[660px]"></div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}



