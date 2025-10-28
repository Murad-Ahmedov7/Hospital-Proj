import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Department() {
  const departments = [
    {
      id: 1,
      title: "Cardiology",
      img: "/images/Heart.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },

    {
      id: 2,
      title: "Ophthalmology",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },

    {
      id: 3,
      title: "Pulmonary",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
    {
      id: 4,
      title: "Dental",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
    {
      id: 5,
      title: "Diagnostics",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
    {
      id: 6,
      title: "For disabled",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
    {
      id: 7,
      title: "Traumotoligy",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },

    {
      id: 8,
      title: "Laboratory",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
  ];
  return (
    <div className="relative w-screen h-screen overflow-hidden ">
      <img src="/images/surgeryimg.jpg" alt="This picture is not found" />
      <div className="absolute inset-0 bg-[#3AA6B9]/90  z-0"></div>

      <div className="grid grid-cols-4 grid-rows-2   w-screen h-screen overflow-hidden gap-22 absolute top-15 left-0 ">
        {departments.map((department) => (
          <Link key={department.id} className="text-3xl border-1 font-bold p-4  text-white flex items-center j">
              <img
             className={`${department.width} ${department.height} `}
              src={department.img}
              alt={department.title}
            />
             <p>
              {department.title}
             </p>
          </Link>
          
        ))}
      </div>
     
    </div>
  );
}
