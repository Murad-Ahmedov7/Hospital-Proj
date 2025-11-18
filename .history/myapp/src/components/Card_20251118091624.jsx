
import React from 'react'

export default function Card() {
  return (

                <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl p-5 gap-1 items-start transition-colors group-hover:bg-[#3AA6B9]  "> 
                  {/* transition-all duration-300 */}
                  
                  
                  <div className="flex justify-between w-full group-hover:text-white">
                    <p>Supplement</p>
                    <p>⭐4.8/5</p>
                  </div>
                  <div className="flex justify-between w-full group-hover:text-white">
                    <p className="font-bold text-xl">
                      DermaGlow Skin Cream
                    </p>
                  </div>

                  <div className="flex justify-between w-full pt-3 items-center">
                    <button className="border-2 border-black rounded-2xl px-4 py-2 font-semibold group-hover:bg-[#ff5555] group-hover:text-white ">
                      Add to cart
                    </button>
                    <p className="text-2xl text-[#5c45bf] font-bold group-hover:text-white">$42.00</p>
                  </div>
                </div>
  

 )
}
