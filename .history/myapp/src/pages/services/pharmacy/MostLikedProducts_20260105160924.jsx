import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination"; 
import Card from "../../../components/Card";
import { Navigation, Autoplay, Pagination } from "swiper/modules";

export default function MostLikedProducts({ slides }) {
  return (
    <div className="flex flex-col justify-center items-center  gap-7 ">
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
        className="w-[1400px] flex justify-center items-center relative"
      >
        {slides.map((s, i) => (
          <SwiperSlide key={i}>
            {/* <Card s={s} /> */}

            <div className={`  bg-gradient-to-bl from-gray-200/90 to-gray-400/10 px-5 flex-shrink-0 lg:w-80 xl:w-100 2xl:w-[450px]  min-h-130 rounded-xl shadow-lg group ${styles.customW355} ${styles.customW500}`}>
                  <div className="flex h-[68%] justify-center items-center pt-6 ">
                    <img
                      src={s.src}
                      // alt={`slide-${i}`}
                      className="w-[80%] h-[320px] object-contain transition-all ease-in-out duration-1000 group-hover:-translate-y-3"
                    />
                  </div>
            
                  <div className="w-full flex flex-col border-1 border-white bg-white rounded-2xl p-5 gap-1 items-start transition-colors group-hover:bg-[#3AA6B9]">
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
                </div>
          </SwiperSlide>
        ))}
      </Swiper>
      {/* 🌀 SWIPER END */}
    </div>
  );
}
