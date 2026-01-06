import React, { useState } from "react";
import { SwiperSlide } from "swiper/react";
import styles from "../pages/services/pharmacy/Pharmacy.module.css";
import { useLocation } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import { products } from "../data/data";

export default function Card({ s }) {
  const location = useLocation();
  const isPharmacyShopPage = ["/services/pharmacy/shop"].includes(
    location.pathname
  );

  const [isFavorite, setIsFavorite] = useState(false);

  const handleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  const HeartIcon = isFavorite ? FaHeart : FaRegHeart;

  return (
 
          <div
         
      className={` relative bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 lg:w-80 xl:w-100 2xl:w-[450px]  min-h-130 rounded-xl shadow-lg group   ${
        isPharmacyShopPage ? `${styles.customW355} ${styles.customW500}` : ""
      } `}
    >
      
       
    </div>
 
  );
}
