import { useEffect } from "react"
import { useTranslation } from "react-i18next";
import { useLocation, useNavigate } from "react-router-dom"

export default function Home() {

    const {t} = useTranslation(); 

    return (
        <div className="bg-gradient-to-bl from-blue-300 to-gray-100" id="home ">
   
            <div className="flex justify-between w-[95%] xl:w-[85%]  ">
                <div className=" flex flex-col mt-35 font-bold font-mulish ml-[10%] min-h-[30px] gap-6">
                    <p className="text-[clamp(1rem,calc(0.6053rem+1.5789vw),2.5rem)] w-[300px]">
                        {t("home.headline")}
                    </p>
                    <p
                     className=" w-70 font-mulish text-[#7D7987] mr-12]"
                      style={{ fontSize: 'clamp(1rem,calc(0.6053rem+1.5789vw),2.5rem)' }}
                     >
                        Mediflow provides progressive, and affordable
                        healthcare, accessible on mobile and online
                        for everyone
                    </p>                   
                </div>
                <img className="   sm:w-[284px]   sm:h-[270px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px]  mt-25" src="/images/trafalgar-header illustration 1.png" alt="Picture not found " />
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




// element content-ə görə böyüsün amma heç vaxt viewport-dan böyük olmasın max-h-screen
//  element content-ə görə böyüsün amma heç vaxt viewport-dan kicik olmasın min -h sceen
//h-screen → sabit, həm minimum, həm maksimum = viewport, content böyümür