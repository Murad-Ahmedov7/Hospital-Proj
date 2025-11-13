import React from "react";
import { Link } from "react-router-dom";

export default function Service() {

  const services = [
    {
      id: 1,
      title: "Search Doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link:"services/doctor"
    },
    {
      id: 2,
      title: "Online pharmacy",
      desc: "Buy your medicines with our mobile application with a simple delivery system",
      img: "/images/Group.png",
      width: "w-[80px]",
      height: "h-[100px]",
      Link:"services/pharmacy"
    },
    {
      id: 3,
      title: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
      img: "/images/Frame (1).png",
      width: "w-[80px]",
      height: "h-[100px]",
      Link:"services/consultation"
    },
    {
      id: 4,
      title: "Details Info",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
     
      img: "/images/Frame (2).png",
      width: "w-[80px]",
      height: "h-[100px]",
      Link:"services/info"
    },
    {
      id: 5,
      title: "Emergency care",
      desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
      img: "/images/Frame (3).png",
      width: "w-[95px]",
      height: "h-[100px]",
    },
    {
      id: 6,
      title: "Tracking",
      desc: "Track and save your medical history and health data",
      img: "/images/Frame (4).png",
      width: "w-[80px]",
      height: "h-[100px]",
      Link:"services/tracking"
    },
  ];



  return (
    <div id="services" className="flex flex-col  min-h-screen bg-gradient-to-bl from-blue-300 to-white   ">
      <div className=" flex flex-col items-center pb-10 ml-5">
        <p className="text-[20px] font-molish font-bold">Our Services</p>
        <p className="w-[820px]">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2  xl:px-40 2xl:px-61    gap-11  ">
        {services.map((service) => (
          <Link to={service.Link}
            key={service.id}
            className=" flex z-40 flex-col gap-5 py-7 px-10 border-1 border-white shadow-2xl shadow-blue-300  transition transform hover:scale-110"
          >
            <img
              className={`${service.width} ${service.height}`}
              src={service.img}
              alt={service.title}
            />
            <p className="font-mulish text-[25px] font-bold ">
              {service.title}
            </p>
            <p className="font-mulish text-[16px] text-[#7D7987] ">
              {service.desc}
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}

