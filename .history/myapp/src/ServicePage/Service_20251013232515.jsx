import React from "react";
import { Link } from "react-router-dom";

export default function Service() {
  const services = [
    {
      id: 1,
      title: "Search Doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-200",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link:"/doctor"
    },
    {
      id: 2,
      title: "Online pharmacy",
      desc: "Buy your medicines with our mobile application with a simple delivery system",
      color: "bg-red-200",
      img: "/images/Group.png",
      width: "w-[80px]",
      height: "h-[100px]",
    },
    {
      id: 3,
      title: "Consultation",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
      color: "bg-red-200",
      img: "/images/Frame (1).png",
      width: "w-[80px]",
      height: "h-[100px]",
    },
    {
      id: 4,
      title: "Details Info",
      desc: "Free consultation with our trusted doctors and get the best recomendations",
      color: "bg-red-200",
      img: "/images/Frame (2).png",
      width: "w-[80px]",
      height: "h-[100px]",
    },
    {
      id: 5,
      title: "Emergency care",
      desc: "You can get 24/7 urgent care for yourself or your children and your lovely family",
      color: "bg-red-200",
      img: "/images/Frame (3).png",
      width: "w-[95px]",
      height: "h-[100px]",
    },
    {
      id: 6,
      title: "Tracking",
      desc: "Track and save your medical history and health data",
      color: "bg-red-200",
      img: "/images/Frame (4).png",
      width: "w-[80px]",
      height: "h-[100px]",
    },
  ];

  return (
    <div id="services" className="flex flex-col  min-h-screen  ">
      <div className=" flex flex-col items-center pb-10 ml-5">
        <p className="text-[20px] font-molish font-bold">Our Services</p>
        <p className="w-[820px]">
          We provide to you the best choiches for you. Adjust it to your health
          needs and make sure your undergo treatment with our highly qualified
          doctors you can consult with us which type of service is suitable for
          your health
        </p>
      </div>

      <div className="grid grid-cols-3 grid-rows-2  xl:px-41 2xl:px-74    gap-11  ">
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

        {services.map((service) => (
          <div
            key={service.id}
            className={`${service} flex flex-col gap-5 py-7 px-10 border-1 border-white shadow-lg shadow-blue-300  transition hover:scale-115`}  //burda isleyir hove scaleeeeee
          >
            <img
              className={`${service.width} ${service.height}`}
              src={service.img}
              alt={service.title}
            />
            <Link to={service.Link} className="font-mulish text-[25px] font-bold ">
              {service.title}
            </Link>
            <p className="font-mulish text-[16px] text-[#7D7987] ">
              {service.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

