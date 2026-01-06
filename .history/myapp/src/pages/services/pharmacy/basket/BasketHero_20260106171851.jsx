import React from 'react'
import { BsCircleFill } from "react-icons/bs";
export default function BasketHero() {
  return (
          <div className="flex w-screen px-11   relative">
          <img className="rounded-4xl w-full h-[500px]" src="/images/pharmacy page/cyan-bg.png"/>
    
    
            <div className=" flex  flex-col gap-7  w-[90%] 2xl:w-[95%] h-full items-center justify-center  absolute ">
            <p className="text-white font-bold lg:text-6xl xl:text-7xl 2xl:text-8xl">Shopping Cart </p>
            <p className="text-white text-[22px] w-[700px] text-center">Almost there! Review your items and get ready for fast, safe delivery  right to your door. </p>
    
            
                            <ul className="list-unstyled  flex items-center justify-center border-1 border-cyan-400 bg-cyan-300/30  rounded-2xl gap-4 w-[170px] py-2 ">
            
                              <li className="flex items-center gap-1 text-white font-oswald font-bold">
                                <BsCircleFill color="white" size={6} />
                                Home 
                              </li>
                              <li className="flex items-center gap-1 text-white font-oswald  font-bold">
                                <BsCircleFill color="white" size={6} />
                                Cart
                              </li>
                            </ul>
        
          </div>
          </div>
  )
}
