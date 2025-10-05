import React from "react";

export default function Service() {
    const services=[
  { id: 1, title: "Search Doctor", color: "bg-red-200", img: "/images/Frame.png" },
  { id: 2, title: "Online pharmacy", color: "bg-red-200", img: "/images/Frame.png" },
  { id: 1, title: "Consultation", color: "bg-red-200", img: "/images/Frame.png" },
  { id: 1, title: "Details Info", color: "bg-red-200", img: "/images/Frame.png" },
  { id: 1, title: "Emergency care", color: "bg-red-200", img: "/images/Frame.png" },
  { id: 1, title: "Tracking", color: "bg-red-200", img: "/images/Frame.png" },

    ]

    return (
        <div id="services" className="flex flex-col gap-12 min-h-screen ">

              <div className=" flex flex-col items-center">
                <p className="text-[20px] font-molish font-bold">Our Services</p>
                <p className="w-[820px]">We provide to you the best choiches for you. Adjust it to your health needs and make sure your undergo treatment with our highly qualified doctors you can consult with us which type of service is suitable for your health</p>
              </div>


            <div className="grid grid-cols-3 grid-rows-2 ml-40 px-60 ">
                 {/* <div className=" bg-red-200  h-[330px] w-[350px] flex flex-col gap-5 py-7 px-10">
                <img className="w-[100px] h-[100px] " src="/images/Frame.png " alt="Picture not found " />
                <p className="font-mulish text-[25px] font-bold">Search doctor</p>
                <p className="font-mulisg text-[16px] text-[#7D7987] ">Choose your doctor from thousands of specialist, general, and trusted hospitals</p>
                </div>
                <div className=" bg-blue-200  h-[330px] w-[350px]">2</div>
                <div className=" bg-green-200  h-[330px] w-[350px]">3</div>
                <div className=" bg-yellow-200  h-[330px] w-[350px]">4</div>
                <div className=" bg-purple-200  h-[330px] w-[350px]">5</div>
                <div className=" bg-pink-200  h-[330px] w-[350px]">6</div> */}

               {services.map(service => (
          <div
            key={service.id}
            className={`${service.color} h-[330px] w-[350px] flex flex-col items-center justify-center gap-4 rounded-lg p-4`}
          >
            <img className="w-[100px] h-[100px]" src={service.img} alt={service.title} />
            <p className="font-mulish text-[25px] font-bold text-center">{service.title}</p>
            <p className="font-mulish text-[16px] text-[#7D7987] text-center">{service.desc}</p>
          </div>
        ))}
            </div>

        </div>


    );
}
