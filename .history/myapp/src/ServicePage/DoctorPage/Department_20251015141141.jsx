import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Department() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Komponent render olunduqda scroll yuxarı
    window.scrollTo(0, 0);

    // 1.5 saniyə gecikmə ilə content göstər
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => clearTimeout(timer); // cleanup
  }, []);

  const departments = [
    { id: 1, title: "Cardiology", img: "/images/Heart.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 2, title: "Ophthalmology", img: "/images/Eye.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 3, title: "Pulmonary", img: "/images/Pulmonary.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 4, title: "Dental", img: "/images/Dental.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 5, title: "Diagnostics", img: "/images/Frame.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 6, title: "For disabled", img: "/images/Frame.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 7, title: "Traumotoligy", img: "/images/Frame.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
    { id: 8, title: "Laboratory", img: "/images/Frame.png", width: "w-[65px]", height: "h-[55px]", Link: "services/doctor" },
  ];

  if (loading) {
    // Sadə loading mesajı
    return (
      <div className="flex justify-center items-center h-screen text-2xl font-bold">
        Loading...
      </div>
    );
  }

  return (
    <div className="relative min-w-screen min-h-screen">
      <div className="absolute flex justify-center items-center font-bold text-white mt-20 text-4xl w-full z-10">
        <p className="font-bold">Departments</p>
      </div>

      <img src="/images/surgeryimg.jpg" alt="This picture is not found" className="w-full h-screen object-cover" />
      <div className="absolute inset-0 bg-[#3AA6B9]/90"></div>

      <div className="grid grid-cols-4 grid-rows-2 mt-20 xl:py-3 min-w-screen min-h-screen gap-22 absolute top-15 left-0">
        {departments.map((department) => (
          <Link
            key={department.id}
            className="text-3xl border rounded-2xl hover:shadow-2xl font-bold text-white flex items-center justify-center flex-col gap-6"
            to={department.Link}
          >
            <img
              className={`${department.width} ${department.height}`}
              src={department.img}
              alt={department.title}
            />
            <p className="font-mulish text-[25px] font-bold">{department.title}</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
