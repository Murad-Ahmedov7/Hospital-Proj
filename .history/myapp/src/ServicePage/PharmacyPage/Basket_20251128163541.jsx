import React from "react";

export default function Basket() {
  return (
    <div className=" flex min-h-screen w-screen justify-center items-center pt-[72px]  ">
      {" "}
      {/* main container */}
      <div className="flex  w-full justify-center">

        <div className=" flex h-[700px] w-full gap-10 justify-center  ">



          <div className="  w-[50%] flex flex-col gap-6  ">


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



            <div className="w-[800px] h-[400px]  bg-yellow-600">

              <div className="flexbg-red-700 w-full ">

                <div>

                </div>
              </div>

            
            
            </div>


          
          
          </div>

          <div className="bg-orange-300   h-[500px] w-[25%]"></div>



        </div>


      </div>
    </div>
  );
}
