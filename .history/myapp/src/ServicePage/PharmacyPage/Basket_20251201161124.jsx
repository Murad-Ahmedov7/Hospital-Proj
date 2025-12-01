import React from "react";


import { IoMdCloseCircleOutline } from "react-icons/io";

export default function Basket() {
  return (
    <div className=" flex min-h-screen w-screen justify-center items-center pt-[72px]  ">
      {" "}
      {/* main container */}
      <div className="flex  w-full justify-center">

        <div className=" flex h-[700px] w-full gap-10 justify-center  ">



          <div className="  lg:w-[70%] xl:w-[50%] flex flex-col gap-8  ">


            <div className="flex justify-between ">
              <p className="text-oswald text-xl font-bold"> Shopping Cart</p>
              <p className="text-oswald text-xl font-bold">(04 Items)</p>
            </div>
            <div className="border h-0  border-black/10"></div>




            <div className="flex">
              <p className="text-oswald text-[15px] text-[#4e4e4e] font-bold w-[35%] ">
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

              <div className="flex w-full items-center pt-[40px] "> {/*bir row*/}


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


                <div className="w-[22%]">
                  <p className="text-xl">48.00$</p>
                </div>
                
               <div className="w-[23%]">
                <div className=" flex items-center justify-center rounded-[18.5px] border-1 w-[107px] h-[40px] ">
                 <div className=" w-[20px] ">7</div>
                </div>
               </div>
               <div className="">
                  <p className="text-xl">144.00</p>
                </div>
                <div className="flex w-[15%] h-[100px] mt-[-10px]  justify-end ">
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

          <div className="bg-orange-300   h-[500px] w-[25%]"></div>



        </div>


      </div>
    </div>
  );
}
