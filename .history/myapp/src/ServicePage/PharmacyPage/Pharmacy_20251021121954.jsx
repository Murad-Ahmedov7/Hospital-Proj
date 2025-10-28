import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
export default function Pharmacy() {
  const slides = [
    "/images/popular products/product1.png",
    "/images/popular products/product2.png",
    "/images/popular products/product3.png",
    "/images/popular products/product4.png",
    "/images/popular products/product1.png",
    "/images/popular products/product2.png",
    "/images/popular products/product3.png",
    "/images/popular products/product4.png",
  ];

  const slides2 = [
    "/images/popular products/product1.png",
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
    <div className="bg-gradient-to-bl from-blue-300 to-gray-100 w-screen h-screen overflow-hidden">
      <div className="flex flex-col  justify-center items-center h-full gap-7">
        <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
        <p className="font-bold text-5xl">Our Most-liked Products</p>

        <div
          style={{
            transform:
              curr === 0 || curr === 1
                ? `translateX(-${curr * 50}%)`
                : setCurr(0),
          }}
          className="flex transition-transform duration-500 ease-out gap-17   w-full"
        >
          {slides.map((s, index) => (
            <div className="bg-red-400 w-20">
              <img
                key={index}
                src={s}
                alt="Image not available"
              />
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

// <div className="bg-gradient-to-bl from-blue-300 to-gray-100 w-screen h-screen flex overflow-hidden   justify-start ">
//   <div className="w-[60%] h-[20%] relative  top-50  ">
//     <div
//       className="flex transition-transform duration-500 ease-out gap-17  w-full"
//       style={{
//         transform:
//           curr === 0 || curr === 1
//             ? `translateX(-${curr * 82}%)`
//             : setCurr(0),
//       }}
//     >
//       {slides.map((s, index) => (
//         <img
//           key={index}
//           src={s}
//           alt="Image not available"
//           className=" bg-gray-200 p-20 w-[50%] "
//         />
//       ))}
//     </div>

//     {/* Buttons */}
//     <div className="absolute inset-0 flex items-center justify-between p-6  ">
//       <button
//         onClick={prev}
//         className="p-1 rounded-full shadow bg-red/80 text-gray-800 hover:bg-white"
//       >
//         <ChevronLeft size={40} />
//       </button>
//       <button
//         onClick={next}
//         className="p-1 rounded-full shadow bg-white/80 text-gray-800 hover:bg-white"
//       >
//         <ChevronRight size={40} />
//       </button>

//       <div className="absolute   top-[190%] bottom-0 left-170 right-0  -translate-x-1/2  -translate-y-1/2   ">
//         <div className="flex items-center justify-center gap-2">
//           {slides2.map((_, i) => (
//             <div
//               key={i}
//               className={`transition-all w-3 h-3 bg-black/45 rounded-full ${
//                 curr === i ? "p-2" : "bg-opacity-50"
//               }`}
//             ></div>
//           ))}
//         </div>
//       </div>
//     </div>
//   </div>
// </div>
