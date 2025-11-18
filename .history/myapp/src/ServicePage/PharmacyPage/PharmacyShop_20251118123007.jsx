// import { useState, useEffect } from "react";

// function PriceCard() {
//   const [displayPrice, setDisplayPrice] = useState(0);

//   // Lokal qiymət
//   const price = 150; // buraya istədiyin qiyməti yaza bilərsən

//   useEffect(() => {
//     const targetPrice = Number(price) || 0; // NaN problemindən qaçırıq
//     let start = 0;
//     const duration = 2000; // animasiya müddəti ms ilə
//     const increment = targetPrice / (duration / 30); // hər 30ms-də artım

//     const interval = setInterval(() => {
//       start += increment;
//       if (start >= targetPrice) {
//         start = targetPrice;
//         clearInterval(interval);
//       }
//       setDisplayPrice(Math.floor(start));
//     }, 30);

//     return () => clearInterval(interval);
//   }, [price]);

//   return (
//     <div className="card p-4 border shadow rounded">
//       <h2>Product Name</h2>
//       <p className="text-xl font-bold transition-all duration-2000">${displayPrice}</p>
//     </div>
//   );
// }

// export default PriceCard;

import React, { useState } from "react";
import Card from "../../components/Card";
import * as Slider from "@radix-ui/react-slider";
export default function PharmacyShop() {
  const slides = [
    { id: 1, src: "/images/popular products/product1.png" },
    { id: 2, src: "/images/popular products/product2.png" },
    { id: 3, src: "/images/popular products/product3.png" },
    { id: 4, src: "/images/popular products/product4.png" },
    { id: 5, src: "/images/popular products/product5.png" },
    { id: 6, src: "/images/popular products/product6.png" },
    { id: 7, src: "/images/popular products/product7.png" },
    { id: 8, src: "/images/popular products/product8.png" },
    { id: 9, src: "/images/popular products/product9.png" },
  ];

  const [value, setValue] = useState([0, 100]); // min və max dəyərlər

  
const MIN_DISTANCE = 10;
const MAX_VALUE = 100;
const MIN_VALUE = 0;

const handleValueChange = (newValue) => {
  let [newMin, newMax] = newValue;
  const [oldMin, oldMax] = value;

  // Sol Thumb hərəkət edirsə
  if (newMin !== oldMin) {
    if (newMax - newMin < MIN_DISTANCE) {
      newMax = newMin + MIN_DISTANCE;
      if (newMax > MAX_VALUE) {
        newMax = MAX_VALUE;
        newMin = newMax - MIN_DISTANCE; // minimum məsafəni qoruyuruq
      }
    }
  }

// newMin !== oldMin → sol Thumb hərəkət edib.

// if (newMax - newMin < MIN_DISTANCE) → Thumb-lar minimum məsafədən yaxınlaşıb.

// newMax = newMin + MIN_DISTANCE → sağ Thumb-u itələyirik, yəni sol Thumb yaxınlaşanda sağ Thumb da irəliləyir.

// if (newMax > MAX_VALUE) → sağ Thumb max dəyəri keçməsin deyə yoxlayırıq:

// Əgər keçirsə, sağ Thumb-u MAX_VALUE-də saxlayırıq.

// Sol Thumb-u da uyğun olaraq itələyirik (newMin = newMax - MIN_DISTANCE), məsafəni qorumaq üçün.



  // Sağ Thumb hərəkət edirsə
  if (newMax !== oldMax) {
    if (newMax - newMin < MIN_DISTANCE) {
      newMin = newMax - MIN_DISTANCE;
      if (newMin < MIN_VALUE) {
        newMin = MIN_VALUE;
        newMax = newMin + MIN_DISTANCE; // minimum məsafəni qoruyuruq
      }
    }
  }

  setValue([newMin, newMax]);
};

  return (
    <div className="w-screen h-screen flex items-center overflow-x-hidden ">
      <div className="h-[70%] bg-red-800 w-[17%]">
        <p>Categories</p>


        {/* <Slider.Root
          defaultValue={[0, 1000]}
          min={0}
          max={10000}
          className="relative flex items-center w-80 h-4 bg-gray-100 rounded-full p-1 "
        >
          <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
            <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
          <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
        </Slider.Root> */}

    <div className="flex justify-between mb-4 text-sm">
        <span>Min: {value[0]}</span>
        <span>Max: {value[1]}</span>
      </div>
        <Slider.Root
        className="relative flex items-center w-full h-4"
        value={value}
         onValueChange={handleValueChange}
        min={0}
        max={100}
        step={5}

        aria-label="Price range"
      >
        <Slider.Track className="bg-gray-300 relative w-full rounded-full h-1">
          <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
        </Slider.Track>
        <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
        <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
      </Slider.Root>


      </div>

{/* 
      newMax !== oldMax → sağ Thumb hərəkət edib.

      if (newMax - newMin < MIN_DISTANCE) → minimum məsafə pozulub?

      newMin = newMax - MIN_DISTANCE → sol Thumb-u itələyirik, yəni sağ Thumb yaxınlaşanda sol Thumb da gedir.

      if (newMin < MIN_VALUE) → sol Thumb 0-dan kiçik olmasın deyə yoxlayırıq.

      Əgər sol Thumb 0-dan kiçik olarsa, sol Thumb-u MIN_VALUE-də saxlayırıq.

      Sağ Thumb-u da buna uyğun itələyirik (newMax = newMin + MIN_DISTANCE). */}

      <div className="w-[85%]  mt-[810px] grid grid-cols-3 grid-rows-3 gap-5 p-4">
        {slides.map((s) => (
          <Card s={s} />
        ))}
      </div>
    </div>
  );
}

// Slider.Root → sliderın özü

// Slider.Track → arxa plan track (boz)

// Slider.Range → seçilmiş qiymət aralığı (yaşıl)

// Slider.Thumb → hərəkət edən düymələr (circle)
