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

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     next(); // hər intervalda növbəti slide
  //   }, 4000); // 3000ms = 3 saniyə

  //   return () => clearInterval(interval); // komponent silinəndə intervalı dayandır
  // }, []); // boş dependency → yalnız mount zamanı işləyir
  return (

  );
}

//bu koda tam bax basa dus

//transionlari tam oyren

//https://www.youtube.com/watch?v=xdap5e3-DwM
