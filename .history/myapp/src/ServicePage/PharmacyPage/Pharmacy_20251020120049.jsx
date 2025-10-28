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
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };
  return (
    <div className="max-w-3xl relative overflow-hidden top-20">
      <div
        className="flex transition-transform duration-500 ease-out"
        style={{ transform: `translateX(-${curr * 100}%)` }}
      >
        {slides.map((s, index) => (
          <img
            key={index}
            src={s}
            alt="Image not available"
            className="w-full"
          />
        ))}
      </div>

      {/* Buttons */}
      <div className="absolute inset-0 flex items-center justify-between p-4">
        <button
          onClick={prev}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronLeft size={40} />
        </button>
        <button
          onClick={next}
          className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
        >
          <ChevronRight size={40} />
        </button>
      </div>

      <div className="absolute bottom-4  right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => {
            <div className={`transition-all w-3 h-3 bg-white rounded-full ${curr===i?p-2:bg-op}`}>

            </div>;
          })}
        </div>
      </div>
    </div>
  );
}

//bu koda tam bax basa dus
