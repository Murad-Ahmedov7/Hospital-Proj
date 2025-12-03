import React, { useState } from "react";


import { IoMdCloseCircleOutline } from "react-icons/io";
import { FaTicket } from "react-icons/fa6";





export default function Basket() {


  const [productQuantity,setProductQuantity]=useState(7)
  const [itemsCount,setItemsCount]=useState(1)

const increaseCount=()=>{
  setProductQuantity(prev=>prev+1)
}

const decreaseCount=()=>{
  setProductQuantity(prev=>{
    if(prev===0) return 0
    return prev-1
  })
 
}


  return (
    <div className=" flex min-h-screen w-screen justify-center items-center pt-[72px]  ">
      {" "}
      {/* main container */}
      <div className="flex  w-full justify-center">

        <div className=" flex h-[700px] w-full gap-10 justify-center  ">



          <div className="  lg:w-[70%] xl:w-[50%] flex flex-col gap-8  ">


            <div className="flex justify-between ">
              <p className="text-oswald text-xl font-bold"> Shopping Cart</p>
              <p className="text-oswald text-xl font-bold">({`0${itemsCount}items`})</p>
            </div>
            <div className="border h-0  border-black/10"></div>




            <div className="flex">
              <p className="text-oswald text-[15px] text-[#4e4e4e] font-bold w-[35.6%] ">
                Product Details
              </p>
              <p className="text-oswald text-[15px] text-[#4e4e4e] font-bold w-[22%]  ">
                Price
              </p>
              <p className="text-oswald text-[15px] text-[#4e4e4e] font-bold w-[22%]  ">
                Quantity
              </p>
              <p className="text-oswald text-[15px] text-[#4e4e4e] font-bold   ">
                Total
              </p>
            </div>
            <div className="border h-0  border-black/10"></div>



            <div className=" lg:w-[70vw] xl:w-[50vw] h-[400px] ">

              <div className="flex w-full items-center  "> {/*bir row*/}


                <div className="flex gap-5 w-[35%]  ">   {/*sekil ve aciqlamalari*/} 

                 <div className="bg-[#f1f5f9] w-[100px] h-[93px] flex items-center justify-center  rounded-2xl ">
                  <img className="w-[60px] h-[56px]" src="/images/popular products/product1.png " alt="image not found" />
                </div>

                <div className="flex flex-col ">
                  <p>MetaboTrim</p>
                  <p>Type: Schet</p>
                  <p>Size: L</p>

                </div>

             


                </div>


                <div className="w-[21%]">
                  <p className="text-xl">48.00$</p>
                </div>
                
               <div className="w-[23%]">
                <div className=" flex items-center justify-center rounded-[18.5px] border-1  border-black/30 w-[107px] h-[40px] ">
                       
                      <div className=" flex justify-center   w-[17%] ">
                         <button onClick={decreaseCount} className="font-bold text-xl pb-1 ">-</button>
                      </div>

                      <div className=" border-l-1 border-r-1 border-black/30  h-full w-[50px] flex justify-center items-center  ">
                        <p>{productQuantity}</p>
                        </div>

                      <div className="flex justify-center  w-[25%]  ">
                         <button onClick={increaseCount} className="font-bold text-xl">+</button>
                      </div>

                </div>
               </div>
               <div className="">
                  <p className="text-xl">144.00</p>
                </div>
                <div className="flex w-[15%] h-[100px] pt-[24px]  justify-end ">
                  <IoMdCloseCircleOutline  size={50} color="red" />
                </div>
               
{/* 
                <div className="w-[27%]">
                    <p className=" text-oswald text-xl text-[#4e4e4e] font-bold ">48.00$</p>
                </div>

                 <div className="w-[15%]">
                    <p className=" text-oswald text-xl text-[#4e4e4e] font-bold ">48.00$</p>
                </div>

                <div className="w-[20%]">
                    <p className=" text-oswald text-xl text-[#4e4e4e] font-bold ">144.00</p>
                </div> */}


                  {/* <IoMdCloseCircleOutline className="flex w-[15%]" size={50} color="red" /> */}
                 
            
              </div>


              {/* <div className="border h-0  border-black/10"></div> */}
            </div>


          
          
          </div>

          <div className="  bg-[rgb(250,247,207)]   h-[500px] w-[23%] rounded-[30px] flex flex-col gap-4">

            <div className="flex  justify-center items-center h-[70px] w-full">
              <p className="text-[18px] font-bold font-oswald ">
                Order Summary
              </p>
            </div>

              <div className="border h-0 mx-[33px]  border-black/10"></div>

              <div className="flex justify-between px-8">
                <div className="flex items-center gap-4">
                  <FaTicket color="#32b9d1" />
                  <p className="font-bold font-oswald ">Apply Coupons</p>
                </div>
                <button className="bg-[#32b9d1] rounded-2xl w-[68px] h-[30px]">Apply</button>
              </div>

              <div className="border h-0 mx-[33px]  border-black/10"></div>



              <div className="flex flex-col gap-2">

              <p className="px-8 font-oswald font-bold text-[16px]">Product Details:</p>

              <div className=" flex justify-between px-8">  
                <p>Sub total:</p> 
                <p>$792.00</p>
              </div>

              
              <div className=" flex justify-between px-8">  
                <p>Shipping:</p>
                <p>$08.00</p>
              </div>

              <div className="border h-0 mx-[33px] mt-7  border-black/10"></div> 

             <div className=" flex justify-between items-center h-[60px] px-8">  
                <p className="font-bold">Grand Total</p>
                <p>$800.00</p>
              </div>
              
              </div>


          </div>



        </div>


      </div>
    </div>
  );
}
