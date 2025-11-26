import { FaCircle } from "react-icons/fa6";
import { MdOutlineArrowRightAlt } from "react-icons/md";
import { Link } from "react-router-dom";
export default function PopularCategories({categories}) {
  return (
    <div className="flex flex-col justify-center items-center h-[500px] lg:h-[600px]     ">

      <div className="flex flex-col justify-center items-center lg:mt-[-px]   xl:mt-[-60px] 2xl:mt-5   ">
         <p className="text-gray-600 text-2xl font-bold">Top Choices</p>
         <p className="font-bold text-[clamp(1.875rem,1.125rem+1.1719vw,3rem)] font-oswald">Our Popular Categories</p> 
      </div>

      {/* font-size: clamp(0.75rem, 0.25rem + 0.7813vw, 1.5rem); */}

      <div className="flex gap-7 lg:max-w-[1000px]   xl:max-w-[1140px]  2xl:max-w-[1900px] ">
        {categories.map((c) => (
          <div className="relative flex justify-center group ">
            <img  
              className="w-[100%] rounded-2xl  "
              src={c.src}
              alt="Image not found"
            />

            <Link
              to="/services/pharmacy/shop"
              className="absolute inset-0 bg-black/50   rounded-2xl flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-1200 cursor-pointer"
            >
              <FaCircle size={60} color="white" />
              <MdOutlineArrowRightAlt className="absolute " size={35} />
            </Link>

            <div className=" absolute bottom-2  font-oswald font-bold  group-hover:bg-black/85 group-hover:text-white transition-all duration-400 ease-in  bg-white h-[15%] border-white w-[92%] flex items-center justify-center rounded-2xl ">
              <p className="text-xl">{c.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}



// | Ekran resolution (width × height) | Təxmini height (px) | Qeyd                       |
// | --------------------------------- | ------------------- | -------------------------- |
// | 640 × 360   (sm)                  | 48–50px             | Kiçik mobil                |
// | 768 × 1024  (md, tablet)          | 56–60px             | Tablet / portret           |
// | 1024 × 768  (lg, desktop)         | 64–70px             | Normal desktop             |
// | 1280 × 720  (xl, widescreen)      | 80px                | Böyük desktop / widescreen |
// | 1536 × 864  (2xl, extra-wide)     | 96px                | Extra-wide desktop         |
// | 1920 × 1080                       | 100–110px           | Full HD                    |
// | 2560 × 1440                       | 120–130px           | 2K                         |
// | 2960 × 1440 / 2960 × 1600         | 140–150px           | Ultra-wide / 4K            |


// https://chatgpt.com/c/691ed3d9-f504-832f-8355-758fc00b291e