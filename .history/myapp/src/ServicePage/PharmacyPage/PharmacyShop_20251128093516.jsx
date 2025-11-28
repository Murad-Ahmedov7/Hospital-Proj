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

import React, { useState } from "react";
import Card from "../../components/Card";
import * as Slider from "@radix-ui/react-slider";
import { slides2 } from "../../data/data";
export default function PharmacyShop() {
  const [value, setValue] = useState([0, 100]); // min və max dəyərlər

  const MIN_DISTANCE = 10;
  const MAX_VALUE = 100;
  const MIN_VALUE = 0;

  const handleValueChange = (newValue) => {
    let [newMin, newMax] = newValue;
    const [oldMin, oldMax] = value;

    // Sol Thumb hərəkət edirsə
    if (newMin !== oldMin) {
      if (newMax - newMin < MIN_DISTANCE) {
        newMax = newMin + MIN_DISTANCE;
        if (newMax > MAX_VALUE) {
          newMax = MAX_VALUE;
          newMin = newMax - MIN_DISTANCE; // minimum məsafəni qoruyuruq
        }
      }
    }

    // newMin !== oldMin → sol Thumb hərəkət edib.

    // if (newMax - newMin < MIN_DISTANCE) → Thumb-lar minimum məsafədən yaxınlaşıb.

    // newMax = newMin + MIN_DISTANCE → sağ Thumb-u itələyirik, yəni sol Thumb yaxınlaşanda sağ Thumb da irəliləyir.

    // if (newMax > MAX_VALUE) → sağ Thumb max dəyəri keçməsin deyə yoxlayırıq:

    // Əgər keçirsə, sağ Thumb-u MAX_VALUE-də saxlayırıq.

    // Sol Thumb-u da uyğun olaraq itələyirik (newMin = newMax - MIN_DISTANCE), məsafəni qorumaq üçün.

    // Sağ Thumb hərəkət edirsə
    if (newMax !== oldMax) {
      if (newMax - newMin < MIN_DISTANCE) {
        newMin = newMax - MIN_DISTANCE;
        if (newMin < MIN_VALUE) {
          newMin = MIN_VALUE;
          newMax = newMin + MIN_DISTANCE; // minimum məsafəni qoruyuruq
        }
      }
    }

    setValue([newMin, newMax]);
  };

  return (
    <div className="w-screen min-h-screen flex   overflow-x-hidden ">

       {/* sol terefin containeri */}
      <div className=" lg:w-[28%] xl:w-[25%] flex flex-col  gap-10 items-end min-h-screen mt-[150px]     mr-5 "> 

        <div className="flex flex-col gap-7  items-center">

          <div className="flex flex-col gap-5 ">

            <p className="font-oswald font-bold text-2xl ">Categories: </p>
            {[...Array(5)].map((_, i) => (
              <div className="">
                <label className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" className="hidden peer" />

                  <div className="w-4 h-4 rounded-full border border-gray-500 peer-checked:bg-green-600"></div>

                  <p>Baby Care & Essentials</p>
                </label>
                
              </div>
              
            ))
            }
       
          <div className="border-1  opacity-10 w-70 "></div> 

          </div>






          
        </div>

  
      {/*men faiz ile bu divi yazanda niye islemedi*/}
      <div className="flex flex-col  w-[450px] items-end gap-4 "> 
      {/* <div className="flex flex-col  w-[76%] items-end gap-4 "> */}

         
      <p className="text-2xl font-oswald  font-bold w-[76%] text-start pl-15 ">Filter by Price</p>
        <Slider.Root
          className="relative flex items-center w-[63%] h-4"
          value={value}
          onValueChange={handleValueChange}
          step={5}
          aria-label="Price range"
        >
          <Slider.Track className="bg-gray-300 relative w-full rounded-full h-1">
            <Slider.Range className="absolute bg-cyan-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-cyan-500 rounded-full" />
          <Slider.Thumb className="block w-4 h-4 bg-cyan-500 rounded-full" />
        </Slider.Root>
        
          <div className="flex gap-2 justify-start items-center  w-[62%]">
          <p className="">Range:</p>
          <p className="text-cyan-500  text-xl font-bold">{`${value[0]}$-`}</p>
          
          <p className="text-cyan-500 text-xl font-bold">{`${value[1]}$`}</p>

          </div>



      </div>

      </div>

   

        {/* all cards */}
      <div className="w-[2000px] mt-14    grid 2xl:grid-cols-3 xl:grid-rows-3 lg:grid-cols-2   gap-5 p-4">
                {slides2.map((s) => ( 
          <Card s={s} />
        ))}
      </div>
    </div>
  );
}




// https://chatgpt.com/c/69283e36-6e48-8330-b82b-7e44ea7f4211(nece duzeltdim buradki responsivliyi)








    //  lg:mt-[2000px] xl:mt-[810px]


// Slider.Root → sliderın özü

// Slider.Track → arxa plan track (boz)

// Slider.Range → seçilmiş qiymət aralığı (yaşıl)

// Slider.Thumb → hərəkət edən düymələr (circle)



      {/* <Slider.Root
          defaultValue={[0, 1000]}
          min={0}
          max={10000}
          className="relative flex items-center w-80 h-4 bg-gray-100 rounded-full p-1 "
        >
          <Slider.Track className="bg-gray-300 relative grow rounded-full h-1">
            <Slider.Range className="absolute bg-green-500 rounded-full h-full" />
          </Slider.Track>
          <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
          <Slider.Thumb className="block w-4 h-4 bg-green-500 rounded-full" />
        </Slider.Root> */}


           {/* 
      newMax !== oldMax → sağ Thumb hərəkət edib.

      if (newMax - newMin < MIN_DISTANCE) → minimum məsafə pozulub?

      newMin = newMax - MIN_DISTANCE → sol Thumb-u itələyirik, yəni sağ Thumb yaxınlaşanda sol Thumb da gedir.

      if (newMin < MIN_VALUE) → sol Thumb 0-dan kiçik olmasın deyə yoxlayırıq.

      Əgər sol Thumb 0-dan kiçik olarsa, sol Thumb-u MIN_VALUE-də saxlayırıq.

      Sağ Thumb-u da buna uyğun itələyirik (newMax = newMin + MIN_DISTANCE). */}




