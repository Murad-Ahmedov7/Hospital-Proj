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
import Card from "../../../components/Card";
import * as Slider from "@radix-ui/react-slider";
import { slides2 } from "../../../data/data";

export default function PharmacyShop() {
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