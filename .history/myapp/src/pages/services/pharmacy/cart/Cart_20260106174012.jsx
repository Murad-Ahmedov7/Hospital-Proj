



import { FaTicket } from "react-icons/fa6";

import CartHero from "./CartHero";
import CartItems from "./CartItems";





export default function Cart() {


  return (
    <div className=" flex  flex-col gap-[100px] min-h-screen w-screen justify-center items-center pt-[72px]  ">



      <CartHero/>

      {" "}
      {/* main container */}
      <div className="flex  w-full justify-center">

        <div className=" flex h-[700px] w-full gap-10 justify-center  ">


          <CartItems/>

          <div className="  bg-yellow-200/20   h-[500px] w-[23%] rounded-[30px] flex flex-col gap-4">

            <div className="flex  justify-center items-center h-[70px] w-full">
              <p className="text-[18px] font-bold font-oswald ">
                Order Summary
              </p>
            </div>

              <div className="border h-0 mx-[33px]  border-black/10"></div>

              <div className="flex justify-between px-8">
                <div className="flex items-center gap-4">
                  <FaTicket color="#5c45bf" />
                  <p className="font-bold font-oswald ">Apply Coupons</p>
                </div>
                <button className="bg-[#5c45bf] rounded-2xl w-[68px] h-[30px] font-oswald text-white">Apply</button>
              </div>

              <div className="border h-0 mx-[33px]  border-black/10"></div>



              <div className="flex flex-col gap-2">

              <p className="px-8 font-oswald font-bold text-[16px]">Product Details:</p>

              <div className=" flex justify-between px-8">  
                <p className="font-oswald">Sub total:</p> 
                <p className="font-oswald font-bold">$792.00</p>
              </div>

              
              <div className=" flex justify-between px-8">  
                <p className="font-oswald">Shipping</p>
                <p className="font-bold font-oswald">$08.00</p>
              </div>

              <div className="border h-0 mx-[33px] mt-7  border-black/10"></div> 

             <div className=" flex justify-between items-center h-[50px] px-8">  
                <p className="font-bold font-oswald">Grand Total</p>
                <p className="text-[#5c45bf] font-bold font-oswald">$800.00</p>
              </div>
              
              </div>

            <button className="w-[85%] mx-auto py-4  bg-yellow-200 rounded-full  font-oswald font-bold ">
              Proceed to checkout
            </button>

          </div>



        </div>


      </div>
    </div>
  );
}
