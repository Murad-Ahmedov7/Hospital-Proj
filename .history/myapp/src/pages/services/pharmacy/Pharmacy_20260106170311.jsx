// import { useEffect, useState } from "react";
// import { ChevronLeft, ChevronRight } from "react-feather";
// import styles from './Pharmacy.module.css';
// export default function Pharmacy() {
//   // const slides = [
//   //   "/images/popular products/product1.png",
//   //   "/images/popular products/product2.png",
//   //   "/images/popular products/product3.png",
//   //   "/images/popular products/product4.png",
//   // ];

  
// const [slides, setSlides] = useState([
//   { id: 1, src: "/images/popular products/product1.png",},
//   { id: 2, src: "/images/popular products/product2.png", },
//   { id: 3, src: "/images/popular products/product3.png", },
//   { id: 4, src: "/images/popular products/product4.png", },
// ]);



// const extendedSlides = [...slides, ...slides];
//   // const slides2 = [
//   //   "/images/popular products/product1.png",
//   //   "/images/popular products/product1.png",
//   // ];

//   const [curr, setCurr] = useState(0);

//   // const next = () => {
//   //   setCurr(prev => (prev === slides.length - 1 ? 0 : prev + 1));
//   // };

//   // const prev = () => {
//   //   setCurr(prev => (prev === 0 ? slides.length - 1 : prev - 1));
//   // };

//   // useEffect(() => {
//   //   const interval = setInterval(() => {
//   //     next(); // hər intervalda növbəti slide
//   //   }, 4000); // 3000ms = 3 saniyə

//   //   return () => clearInterval(interval); // komponent silinəndə intervalı dayandır
//   // }, []); // boş dependency → yalnız mount zamanı işləyir



//   return (
//     <div className="bg-gradient-to-bl w-screen h-screen overflow-hidden">

//       <div className="flex flex-col  justify-center items-center h-full gap-7 overflow-hidden">
//         <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
//         <p className="font-bold text-5xl">Our Most-liked Products</p>

//         <div
//           // style={{
//           //   transform:
        
//           //        `translateX(-${curr * 5}%)`
      
//           // }}
//           // className="flex transition-transform duration-500 ease-out gap-10  "
//          className={`flex gap-10  ${styles.animateScroll}`}>

//           {extendedSlides.map((s,i) => (
//             <div className="bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 w-110 min-h-130 rounded-xl ">

//               <div className="flex h-[68%] justify-center items-center">
//                 <img key={i} src={s.src} alt="Image not available" />
//               </div>

//               <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl  p-5 gap-1   items-start hover:bg-[#5c45bf]  ">
//                <div className="flex justify-between w-full">
//                 <p>Supplement</p>
//                 <p>⭐4.8/5</p>
//               </div>
//               <div className="flex justify-between w-full  ">
//                 <p className="font-bold text-xl">DermaGlow Skin Cream </p>
//               </div>

//                 <div className="flex justify-between w-full pt-3 items-center  ">
//                 <button className="border-2 rounded-2xl px-4 py-2 font-semibold">Add to cart</button>
//                 <p className="text-2xl text-[#5c45bf] font-bold">$42.00</p>

//               </div>
//               </div>
           

//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }




// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";

// import { useState } from "react";
// export default function Pharmacy() {

  
// const [slides, setSlides] = useState([
//   { id: 1, src: "/images/popular products/product1.png",},
//   { id: 2, src: "/images/popular products/product2.png", }, 
//   { id: 3, src: "/images/popular products/product3.png", },
//   { id: 4, src: "/images/popular products/product4.png", },
// ]);




// return(
    
//       <div className="bg-gradient-to-bl w-screen h-screen overflow-hidden">

//         <div className="flex flex-col  justify-center items-center h-full gap-7 overflow-hidden">
//           <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
//           <p className="font-bold text-5xl">Our Most-liked Products</p>

//         <Swiper
//             modules={[Navigation, Autoplay]}
//             // navigation
//             loop
//             autoplay={{ delay: 2500 }}
//             spaceBetween={40}
//             slidesPerView={3}
        
//           >
//               {slides.map((s,i) => (
//                 <SwiperSlide  key={i}>
//               <div className="bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5  w-[440px] min-h-130 rounded-xl ">

//                 <div className="flex h-[68%] justify-center items-center">
//                   <img key={i} src={s.src}  alt="Image not available" />
//                 </div>

//                 <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl  p-5 gap-1   items-start hover:bg-[#5c45bf]  ">
//                 <div className="flex justify-between w-full">
//                   <p>Supplement</p>
//                   <p>⭐4.8/5</p>
//                 </div>
//                 <div className="flex justify-between w-full  ">
//                   <p className="font-bold text-xl">DermaGlow Skin Cream </p>
//                 </div>

//                   <div className="flex justify-between w-full pt-3 items-center  ">
//                   <button className="border-2 rounded-2xl px-4 py-2 font-semibold">Add to cart</button>
//                   <p className="text-2xl text-[#5c45bf] font-bold">$42.00</p>

//                 </div>
//                 </div>
            

//               </div>
//               </SwiperSlide>
//             ))}
            
//           </Swiper>
//         </div>
//       </div>
//   )
// }





// import React from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper/modules";
// import "swiper/css";
// import "swiper/css/navigation";
// import styles from "./Pharmacy.module.css";

// export default function Pharmacy() {
//   const slides = [
//     { id: 1, src: "/images/popular products/product1.png" },
//     { id: 2, src: "/images/popular products/product2.png" },
//     { id: 3, src: "/images/popular products/product3.png" },
//     { id: 4, src: "/images/popular products/product4.png" },
//   ];

//   return (
//     <div className="bg-gradient-to-bl w-screen h-screen overflow-hidden">
//       <div className="flex flex-col justify-center items-center h-full gap-7 overflow-hidden">
//         <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
//         <p className="font-bold text-5xl">Our Most-liked Products</p>

//         {/* 🌀 SWIPER START */}
//         <Swiper
//           modules={[Navigation, Autoplay]}
//           spaceBetween={30}
//           slidesPerView={3} // eyni anda 3 məhsul göstərir
//           navigation
//           loop
//           autoplay={{
//             delay: 3000,
//             disableOnInteraction: false,
//           }}
//           className="w-[90%] flex justify-center items-center"
//         >
//           {slides.map((s, i) => (
//             <SwiperSlide key={i}>
//               <div className="bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 w-140 min-h-130 rounded-xl shadow-lg">
//                 <div className="flex h-[68%] justify-center items-center pt-6 ">
//                   <img
//                     src={s.src}
//                     alt={`slide-${i}`}
//                     className="w-[80%] h-[320px] object-contain"
//                   />
//                 </div>

//                 <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl p-5 gap-1 items-start hover:bg-[#5c45bf] transition-all duration-300">
//                   <div className="flex justify-between w-full">
//                     <p>Supplement</p>
//                     <p>⭐4.8/5</p>
//                   </div>
//                   <div className="flex justify-between w-full">
//                     <p className="font-bold text-xl">
//                       DermaGlow Skin Cream
//                     </p>
//                   </div>

//                   <div className="flex justify-between w-full pt-3 items-center">
//                     <button className="border-2 rounded-2xl px-4 py-2 font-semibold">
//                       Add to cart
//                     </button>
//                     <p className="text-2xl text-[#5c45bf] font-bold">$42.00</p>
//                   </div>
//                 </div>
//               </div>
//             </SwiperSlide>
//           ))}
//         </Swiper>
//         {/* 🌀 SWIPER END */}
//       </div>
//     </div>
//   );
// }




import PopularCategories from "./PopularCategories";
import MostLikedProducts from "./MostLikedProducts";
import FeaturedProducts from "./FeaturedProducts";

import { useState } from "react";
import PharmacyHero from "./PharmacyHero";
import { categories, productSlides } from "../../../data/data";
import { Toaster } from "react-hot-toast";


export default function Pharmacy() {



  return (
    <div className="bg-gradient-to-bl  min-h-screen ">
      
      <PharmacyHero/>
      
      <PopularCategories categories={categories}/>

      <MostLikedProducts productSlides={productSlides}/>

      <FeaturedProducts productSlides={productSlides}/> 

      <Toaster 
           // ekranın sağ üstündə göstər
  toastOptions={{
    style: {
      marginRight: "20px", // sağdan məsafə
      right: 0,
      top: "50%",          // ekranın orta hündürlüyü
      transform: "translateY(-50%)", // mərkəzləşdirmək üçün
    },
  }}
      />

    </div>


    
//     <div class="group pt-33">
//   <div class="px-4 py-2 bg-blue-200 cursor-pointer">
//     Hover burada
//   </div>
  
//   <div class="mt-4 px-4 py-2 bg-gray-200 transition-colors group-hover:bg-green-300">
//     Bu div dəyişəcək
//   </div>
// </div>
  );
}





//2-ci design ile 3-cu desgin qarsilasdir ve nece oldu ki yan yana problmi getdi

// https://chatgpt.com/c/69086806-fe74-832b-890c-e0357c458b82

//ve designi yene de duzelt problemi var


//pharmcyde yazdiqlaraimi yaxisca arasdir

//mutleq email ile hesab tesdiqleme yaz.....


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



//ilk 4nu gorunmesini et ve site mentqi uygun bu scroolu duzelt


// Əgər sən yalnız transition-all yazırsansa və duration və easing göstərmirsənsə, Tailwind default olaraq bunları istifadə edir:

// Xassə	Default dəyər
// Duration	150ms
// Timing function (ease)	ease (yəni browser default easing)


//transion ile transionAll ferqi

//https://www.youtube.com/watch?v=jsB3_yI6p-0