import Navbar from "./Navbar";

export default function Home() {

    return (
        <div className=" min-h-screen ">
            <Navbar />

            <div className="flex justify-between w-[90%] md:w-[95%] ">
                <div className=" flex flex-col mt-35 font-bold font-mulish ml-[10%] min-h-[30px] gap-6  ">
                    <p className="text-[clamp(1rem,calc(0.6053rem+1.5789vw),2.5rem)] w-[300px]">
                        Virtual healthcare for you
                    </p>
                    <p
                     className=" w-70 font-mulish text-[#7D7987] mr-12]"
                      style={{ fontSize: 'clamp(1rem,calc(0.6053rem+1.5789vw),2.5rem)' }}
                     >
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online
                        for everyone
                    </p>
                    <button className="w-[200px]   rounded-3xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 ">Consult Today</button>
                </div>
                <img className="w-[284px] md:w-[300px] xl:w-[500px] h-[270px] mt-25" src="/images/trafalgar-header illustration 1.png" alt="Picture not found " />
            </div>


        </div>

    )
}










// | Breakpoint | Minimum Width (px) | Tailwind sinfi |
// | ---------- | ------------------ | -------------- |
// | `sm`       | 640px              | `sm:`          |
// | `md`       | 768px              | `md:`          |
// | `lg`       | 1024px             | `lg:`          |
// | `xl`       | 1280px             | `xl:`          |
// | `2xl`      | 1536px             | `2xl:`         |




// Bəli, düz dedin 😄

// min-h qaydası yalnız bu konkret div üçün deyil, Tailwind-də hər hansı element üçün keçərlidir.

// Hər element üçün prinsip eynidir:

// Elementin ən az hündürlüyünü təyin edir

// İçindəki content daha böyükdürsə → element avtomatik böyüyür

// Element heç vaxt minimumdan kiçik olmur

// 💡 Qısa yaddaş formulu hər element üçün:

// “min-h = element heç vaxt minimum hündürlükdən kiçik olmayacaq, lazım olsa content-ə görə böyüyəcək” ✅

// min-w → eyni qayda en üçün

// h-[...] → sabit hündürlük, content daşarsa overflow yaranır




// Bəli, düz başa düşdün 😄

// Sabit height (h-[300px]) → element həmişə 300px, heç vaxt artmır, content böyük olsa → daşır/overflow yaranır.

// Max height (max-h-[300px]) → element içindəki content-ə görə arta bilər, amma heç vaxt 300px-dən yüksək olmur, content böyükdürsə → overflow və ya scroll yaranır.

// 💡 Qısaca:

// Sabit = həmişə eyni, Max = lazım olsa artar, amma limit var ✅

