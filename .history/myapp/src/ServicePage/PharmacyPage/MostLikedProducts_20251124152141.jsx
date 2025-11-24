import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import Card from "../../components/Card";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default function MostLikedProducts({ slides }) {
  return (
    <div className="flex flex-col justify-center items-center h-[70%] gap-7 ">
      <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
      <p className="font-bold text-5xl">Our Most-liked Products</p>

      {/* 🌀 SWIPER START */}
      <Swiper
        modules={[Navigation, Autoplay, Pagination]}
        slidesPerView={3} // eyni anda 3 məhsul göstərir
        navigation
        loop
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        className="w-[90%] flex justify-center items-center relative"
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
