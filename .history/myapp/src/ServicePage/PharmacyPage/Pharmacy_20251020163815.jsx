import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
export default function Pharmacy() {
  const slides = [
    "/images/pexels-photo-691668.jpeg",
    "/images/pexels-christian-heitz-285904-842711.jpg",
    "/images/pexels-photo-1525041.jpeg",
    "/images/popular products/product1.png",
  ];

  const [curr, setCurr] = useState(0);

  const prev = () => {
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));
  };

  const next = () => {
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      next(); // hər intervalda növbəti slide
    }, 4000); // 3000ms = 3 saniyə

    return () => clearInterval(interval); // komponent silinəndə intervalı dayandır
  }, []); // boş dependency → yalnız mount zamanı işləyir
  return (
    <div className="bg-gradient-to-bl from-blue-300 to-gray-100 w-screen h-screen">
      <div className="w-[40%] h-[20%] bg-red-600 relative  top-20 flex gap-14 ">
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
      </div>
      <div className="absolute bottom-4   right-0 left-0">
        <div className="flex items-center justify-center gap-2">
          {slides.map((_, i) => (
            <div
              key={i}
              className={`transition-all w-3 h-3 bg-white rounded-full ${
                curr === i ? "p-2" : "bg-opacity-50"
              }`}
            >

            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

//bu koda tam bax basa dus

//transionlari tam oyren

//https://www.youtube.com/watch?v=xdap5e3-DwM
