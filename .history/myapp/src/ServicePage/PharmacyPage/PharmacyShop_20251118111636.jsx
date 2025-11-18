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

import React from "react";
import Card from "../../components/Card";

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

  return (
    <div className="w-screen h-screen flex items-center ">

      <div className="h-[70%] bg-red-800 w-[15%]">
        <p>Categories</p>
      </div>

      <div className="w-[85%]  mt-[920px] grid grid-cols-3 grid-rows-3 gap-5 p-4">
        {
          slides.map((s)=>(
          <Card s={s}/> 
          ))
        }
      </div>

    </div>
  );
}
