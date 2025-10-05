import React from "react";

export default function FindDoctor() {
    return (
        <div id="services" className="flex flex-col gap-12 min-h-screen ">

              <div className=" flex flex-col items-center">
                <p>Our Services</p>
                <p className="w-20">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
              </div>


            <div className="grid grid-cols-3 grid-rows-2 ">
                <div className=" bg-red-200">1</div>
                <div className=" bg-blue-200">2</div>
                <div className=" bg-green-200">3</div>
                <div className=" bg-yellow-200">4</div>
                <div className=" bg-purple-200">5</div>
                <div className=" bg-pink-200">6</div>
            </div>

        </div>


    );
}
