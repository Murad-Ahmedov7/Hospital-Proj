import { useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
export default function Pharmacy() {
  const slides = [
    "/images/pexels-photo-691668.jpeg",
    "/images/pexels-christian-heitz-285904-842711.jpg",
    "/images/pexels-photo-1525041.jpeg",
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides - length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="max-w-3xl  relative flex overflow-hidden top-22">
      {slides.map((s) => (
        <img src={s} alt="Image not available" />
      ))}
      <div className="flex absolute items-center justify-between w-full top-[50%] px-7">
        <button
          onClick={() => prev}
          className=" bg-white/80 shadow rounded-full  text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={() => next}
          className=" bg-white/80 shadow rounded-full  text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>
    </div>
  );
}
