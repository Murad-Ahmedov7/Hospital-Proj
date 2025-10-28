import { ChevronLeft, ChevronRight } from "react-feather";
export default function Pharmacy() {
  const slides = [
        "/images/pexels-photo-691668.jpeg",
    "/images/pexels-christian-heitz-285904-842711.jpg",
    "/images/pexels-photo-1525041.jpeg",
  ];
  return (
    <div className="max-w-3xl  relative flex overflow-hidden top-22">
      {slides.map((s) => (
        <img src={s} alt="Image not available" />
      ))}
      <div className="flex absolute items-center justify-between w-full top-3/6 px-7">
        <button>
          <ChevronLeft size={40} className=" bg-white rounded-full border-cyan-50 "  />
        </button>
        <button>
          <ChevronRight size={40} className=" border-2 rounded-full  border-cyan-50 " />
        </button>
      </div>
    </div>
  );
}
