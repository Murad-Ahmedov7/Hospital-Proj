import { useEffect } from "react";

export default function Department() {
  const Departments = [
    {
      id: 1,
      title: "Cardiology",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },

    {
      id: 2,
      title: "Ophthalmology",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
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
      title: "Search Doctor",
      desc: "Choose your doctor from thousands of specialist, general, and trusted hospitals",
      color: "bg-red-600",
      img: "/images/Frame.png",
      width: "w-[100px]",
      height: "h-[100px]",
      Link: "services/doctor",
    },
  ];
  return (
    <div className="relative">
      <img src="/images/surgeryimg.jpg" alt="This picture is not found" />
      <div className="absolute inset-0 bg-[#3AA6B9]/90  z-0"></div>

      <div></div>
      <div className="bg-red-400"></div>
    </div>
  );
}
