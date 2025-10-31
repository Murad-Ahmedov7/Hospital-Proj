import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import baseApi from "../../api/baseApi";

export default function Department() {
  // const [loading, setLoading] = useState(true);

  //   useEffect(() => {
  //     // Komponent render olunduqda scroll yuxarı
  //     window.scrollTo(0, 0);

  //     // 1 saniyə gecikmə ilə content göstər
  //     const timer = setTimeout(() => {
  //       setLoading(false);
  //     }, 800);

  //     return () => clearTimeout(timer); // cleanup
  //   }, []);

  // const [department, setDepartment] = useState([]);

  const departments = [
    {
      id: 1,
      title: "Cardiology",
      img: "/images/Heart.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 2,
      title: "Ophthalmology",
      img: "/images/Eye.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 3,
      title: "Pulmonary",
      img: "/images/Pulmonary.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 4,
      title: "Dental",
      img: "/images/Dental.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 5,
      title: "Diagnostics",
      img: "/images/Diagnostics.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 6,
      title: "For disabled",
      img: "/images/For disabled.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 7,
      title: "Traumotoligy",
      img: "/images/Traumotoligy.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
    {
      id: 8,
      title: "Laboratory",
      img: "/images/Laboratory.png",
      width: "w-[65px]",
      height: "h-[55px]",
      Link: "services/doctor",
    },
  ];

  // const addtoState=()=>{
  //   departments.filter()
  //   addtoService()

  // }
  // const addtoService=async()=>{
  //   try{
  //      await baseApi.post(department)
  //   }
  //   catch{
  //     console.error(err)
  //   }

  // }


useEffect(() => {
  const sendDepartments = async () => {
    const titles = departments.map(d => d.title); // ["Cardiology", ...]

    try {
      await baseApi.post("/doctorService", titles); 
      // Birbaşa keysiz array göndərir
    } catch (err) {
      console.error(err);
    }
  };

  sendDepartments();
}, []);

  return (
 
 <div className="relative w-screen min-h-screen ">
  <div className="absolute inset-0">
    <img
      src="/images/surgeryimg.jpg"
      alt="This picture is not found"
      className="object-cover w-full h-full"
    />
    <div className="absolute inset-0 bg-[#3AA6B9]/90"></div>
  </div>

  {/* Başlıq */}
  <div className="absolute top-0 bottom-130 flex items-center justify-center  w-full text-center text-white text-4xl font-bold z-10">
    Departments
  </div>

{/* basliga top ve bottom elave etdim 
ve grid container pt-10 */}

{/* //kod yazdigin sayt ile bu gridi muqayise et  */}

{/* //realtive absolute ferqini de  */}

  {/* Grid container */}
  <div className="relative z-10 flex justify-center items-center min-h-screen px-10 pt-10">
    <div className="grid grid-cols-4 grid-rows-2 gap-7 w-full ">
      {departments.map((department) => (
        <Link
          key={department.id}
          className="border rounded-2xl hover:shadow-2xl hover:bg-gray-200/20  w-full h-[212px] flex flex-col items-center justify-center gap-7 text-white"
        >
          <img
            className={`${department.width} ${department.height}`}
            src={department.img}
            alt={department.title}
          />
          <p className="font-mulish text-[25px] font-bold">
            {department.title}
          </p>
        </Link>
      ))}
    </div>
  </div>
</div> 

  );
}


