import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "../pages/services/pharmacy/Pharmacy.module.css";
import { useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";

export default function Card({ s }) {
  const location = useLocation();
  const isPharmacyShopPage = ["/services/pharmacy/shop"].includes(
    location.pathname
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const  HeartIcon = isFavorite ? FaHeart : FaRegHeart;

  return (
    <div
      className={` relative bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 lg:w-80 xl:w-100 2xl:w-[450px]  min-h-130 rounded-xl shadow-lg group   ${
        isPharmacyShopPage ? `${styles.customW355} ${styles.customW500}` : ""
      } `}
    >
      <div className="flex h-[68%] justify-center items-center pt-6 ">
        <img
          src={s.src}
          // alt={`slide-${i}`}
          className="w-[80%] h-[320px] object-contain transition-all ease-in-out duration-1000 group-hover:-translate-y-3"
        />
        <div className=" absolute top-7 right-6 border border-white bg-white rounded-full   p-2">
          <HeartIcon
            color={isFavorite ? "red" : ""}
            size={20}
            onClick={handleFavorite}
            className="cursor-pointer"
          />
        </div>
      </div>


      {
        
      }
    </div>
  );
}
