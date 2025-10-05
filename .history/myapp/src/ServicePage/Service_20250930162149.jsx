import React from "react";

export default function FindDoctor() {
    return (
        <div id="services" className="flex flex-col gap-12 min-h-screen ">

              <div className=" flex flex-col items-center">
                <p className="text-[20px] font-molish font-bold">Our Services</p>
                <p className="w-[820px]">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
              </div>


            <div className="grid grid-cols-3 grid-rows-2 ml-40 px-60 ">
                <div className=" bg-red-200  h-[330px] w-[350px] flex flex-col gap-5">
                {/* <img className="   sm:w-[284px]   sm:h-[270px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px]  mt-25" src="/images/trafalgar-header illustration 1.png" alt="Picture not found " /> */}
                <img className="w-[100px] h-[100px] m-7" src="/images/Frame.png " alt="Picture not found " />
                <p >Search Doctor</p>

                </div>
                <div className=" bg-blue-200  h-[330px] w-[350px]">2</div>
                <div className=" bg-green-200  h-[330px] w-[350px]">3</div>
                <div className=" bg-yellow-200  h-[330px] w-[350px]">4</div>
                <div className=" bg-purple-200  h-[330px] w-[350px]">5</div>
                <div className=" bg-pink-200  h-[330px] w-[350px]">6</div>
            </div>

        </div>


    );
}
