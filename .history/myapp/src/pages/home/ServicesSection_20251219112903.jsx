

import React from 'react'

export default function ServicesSection() {
  <div id="services" className="flex flex-col min-h-screen   bg-gradient-to-bl from-blue-300 to-white  2xl:min-h-[900px] 2xl:justify-center  ">
      <div className=" flex flex-col items-center  pb-10 ml-5 2xl:mb-10 mt-10 ">
        <p className="text-[20px] font-molish font-bold"> {t("services.headline")}</p>
        <p className="w-[820px]">
          {t("services.description")}
        </p>
      </div>

      <div className="  grid  grid-cols-3 grid-rows-2  xl:px-40 2xl:px-61 2xl:pb-8  gap-11 h-[20%]    ">
        {serviceList.map((service) => (
          <Link to={service.link}
            key={service.id}
            className=" flex z-40 flex-col gap-5 py-7 px-10 border-1 border-white shadow-2xl shadow-blue-300  transition transform hover:scale-110"
          >
            <img
              className={`${service.width} h-[100px]`}
              src={service.img}
              alt={service.titleKey}
            />
            <p className="font-mulish text-[25px] font-bold  ">
              {t(service.titleKey)}
            </p>
            <p className="font-mulish text-[16px] text-[#7D7987] ">
              {t(service.descKey)}
            </p>
          </Link>
        ))}
      </div>
    </div>
}
