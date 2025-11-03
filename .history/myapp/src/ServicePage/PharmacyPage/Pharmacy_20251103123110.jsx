import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "react-feather";
import styles from './Pharmacy.module.css';
export default function Pharmacy() {
  // const slides = [
  //   "/images/popular products/product1.png",
  //   "/images/popular products/product2.png",
  //   "/images/popular products/product3.png",
  //   "/images/popular products/product4.png",
  // ];

  
const [slides, setSlides] = useState([
  { id: 1, src: "/images/popular products/product1.png",},
  { id: 2, src: "/images/popular products/product2.png", },
  { id: 3, src: "/images/popular products/product3.png", },
  { id: 4, src: "/images/popular products/product4.png", },
]);



const extendedSlides = [...slides, ...slides];
  // const slides2 = [
  //   "/images/popular products/product1.png",
  //   "/images/popular products/product1.png",
  // ];

  const [curr, setCurr] = useState(0);

  // const next = () => {
  //   setCurr(prev => (prev === slides.length - 1 ? 0 : prev + 1));
  // };

  // const prev = () => {
  //   setCurr(prev => (prev === 0 ? slides.length - 1 : prev - 1));
  // };

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     next(); // hər intervalda növbəti slide
  //   }, 4000); // 3000ms = 3 saniyə

  //   return () => clearInterval(interval); // komponent silinəndə intervalı dayandır
  // }, []); // boş dependency → yalnız mount zamanı işləyir



  return (
    <div className="bg-gradient-to-bl w-screen h-screen overflow-hidden">

      <div className="flex flex-col  justify-center items-center h-full gap-7 overflow-hidden">
        <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
        <p className="font-bold text-5xl">Our Most-liked Products</p>

        <div
          // style={{
          //   transform:
        
          //        `translateX(-${curr * 5}%)`
      
          // }}
          // className="flex transition-transform duration-500 ease-out gap-10  "
         className={`flex gap-10  ${styles.animateScroll}`}>

          {extendedSlides.map((s,i) => (
            <div className="bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 w-100 min-h-140 rounded-xl ">

              <div className="flex h-[72%] justify-center items-center">
                <img key={i} src={s.src} alt="Image not available" />
              </div>

              <div className="w-full flex flex-col border-1 border-white bg-white rounded-xl  p-7 gap-2     items-start ">
               <div className="flex gap-27">
                <p>Supplement</p>
                <p>⭐4.8/5</p>
              </div>
              <div className="flex">
                <p className="font-bold">DermaGlow Skin Cream </p>
              </div>

                <div className="flex justify-between w-full">
                <button className="bg-red-400 rounded-2xl ">Add to cart</button>
                <p>42 dollar</p>

              </div>
              </div>
           

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



//ilk 4nu gorunmesini et ve site mentqi uygun bu scroolu duzelt


//https://www.youtube.com/watch?v=jsB3_yI6p-0