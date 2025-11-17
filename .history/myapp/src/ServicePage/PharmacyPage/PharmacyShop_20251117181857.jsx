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

export default function PharmacyShop() {
  const slides = [
    { id: 1, src: "/images/popular products/product1.png" },
    { id: 2, src: "/images/popular products/product2.png" },
    { id: 3, src: "/images/popular products/product3.png" },
    { id: 4, src: "/images/popular products/product4.png" },
  ];

  return (
    <div className="w-screen h-screen flex items-center ">
      <div className="h-[70%] bg-red-800 w-[25%]">
        <p>Categories</p>
      </div>

      <div className="w-[75%] grid grid-cols-3 grid-rows-3 gap-4 p-4">


        <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl p-5 gap-1 items-start transition-colors group-hover:bg-[#3AA6B9]  ">
          {/* transition-all duration-300 */}


              <div className="flex h-[68%] justify-center items-center pt-6 ">
                  <img
                    src={s.src}
                    alt={`slide`}
                    className="w-[80%] h-[320px] object-contain transition-all ease-in-out duration-1000 group-hover:-translate-y-3"
                  />
                </div>

          <div className="flex justify-between w-full group-hover:text-white">
            <p>Supplement</p>
            <p>⭐4.8/5</p>
          </div>
          <div className="flex justify-between w-full group-hover:text-white">
            <p className="font-bold text-xl">DermaGlow Skin Cream</p>
          </div>

          <div className="flex justify-between w-full pt-3 items-center">
            <button className="border-2 border-black rounded-2xl px-4 py-2 font-semibold group-hover:bg-[#ff5555] group-hover:text-white ">
              Add to cart
            </button>
            <p className="text-2xl text-[#5c45bf] font-bold group-hover:text-white">
              $42.00
            </p>
          </div>
        </div>
        <div className="bg-green-200 p-4">2</div>
        <div className="bg-red-200 p-4">3</div>
        <div className="bg-yellow-200 p-4">4</div>
        <div className="bg-purple-200 p-4">5</div>
        <div className="bg-pink-200 p-4">6</div>
        <div className="bg-yellow-200 p-4">7</div>
        <div className="bg-purple-200 p-4">8</div>
        <div className="bg-pink-200 p-4">9</div>
      </div>
    </div>
  );
}
