import { useTranslation } from "react-i18next";

export default function HomeSection() {
    
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
                        {t("home.description")}
                    </p>                   
                </div>
                <img className="  sm:w-[284px]   sm:h-[270px] md:w-[340px] md:h-[340px] lg:w-[500px] lg:h-[500px]  mt-25" src="/images/home page/trafalgar-header illustration 1.png" alt="Picture not found " />
            </div>
            
        </div>

    )
}
