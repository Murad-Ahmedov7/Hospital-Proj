import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

export default function Service() {
    const {t} = useTranslation(); 

  const services = t("services.serviceList", { returnObjects: true });




  return (
    <div id="services" className="flex flex-col   min-h-screen bg-gradient-to-bl from-blue-300 to-white   ">
      <div className=" flex flex-col items-center h-[30%] pb-10 ml-5 mt-7 ">
        <p className="text-[20px] font-molish font-bold"> {t("services.headline")}</p>
        <p className="w-[820px]">
          {t("services.description")}
        </p>
      </div>

      <div className="  grid  grid-cols-3 grid-rows-2  xl:px-40 2xl:px-61  gap-11    ">
        {services.map((service) => (
          <Link to={service.link}
            key={service.id}
            className=" flex z-40 flex-col gap-5 py-7 px-10 border-1 border-white shadow-2xl shadow-blue-300  transition transform hover:scale-110"
          >
            <img
              className={`${service.width} ${service.height}`}
              src={service.img}
              alt={service.title}
            />
            <p className="font-mulish text-[25px] font-bold  ">
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

