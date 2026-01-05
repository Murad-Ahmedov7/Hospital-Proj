import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import Card from "../../../components/Card";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default function MostLikedProducts({ slides }) {
  return (
    <div className="flex flex-col justify-center items-center  gap-7 mb-10 ">
      <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
      <p className="font-bold text-5xl">Our Most-liked Products</p>

      {/* 🌀 SWIPER START */}
      <Swiper
        modules={[ Autoplay, Pagination]}
        slidesPerView={3} // eyni anda 3 məhsul göstərir
        navigation
        loop
        autoplay={{ 
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="lg:w-[1000px] xl:w-[1300px] 2xl:w-[1400px] flex justify-center items-center relative"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            <Card s={s} />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 🌀 SWIPER END */}
    </div>
  );
}
