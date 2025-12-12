import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState, useTransition } from "react";
import { IoIosLogIn } from "react-icons/io";
import { FaBalanceScale } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";



export default function Navbar() {

const links = [
  { id: "home" },
  { id: "services" },
  // { id: "apps" },
  { id: "testimonials" },
  { id: "about-us" }
];

  const options = [
    { id: 1, label: "Balance", icon: <FaBalanceScale size={18} /> },
    { id: 2, label: "Favorites", icon: <FaRegHeart size={18} /> },
    { id: 3, label: "Basket", icon: <RiShoppingBasketLine size={18} /> }
  ];

    const location=useLocation()
    const navigate=useNavigate()

const handleClick = (e) => {
    if (location.pathname !== "/") {
       e.preventDefault(); //eventin default davranisini bloklayir(duzdu?)
      navigate("/");
    }
  };
  

  const [firstScrollDone, setFirstScrollDone] = useState(false);

  const [isOpen,setIsOpen]=useState(false)

  const[currentLang,setCurrentLang]=useState("")


  useEffect(() => {
    const handleScroll = () => {
      if (!firstScrollDone) {
        setFirstScrollDone(true);
        console.log("İlk dəfə scroll edildi!");
      }
      if(window.scrollY===0){
        console.log("scroll en basdadi")
        setFirstScrollDone(false)
        
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [firstScrollDone]);   //scrool ile navbar rengini deyisme

// //handleScroll bitir → sonra React render edir

// Bu səbəbdən console.log setState-dən sonra da çıxır

// React render-i dayandırmır, yalnız gələcəkdə UI-i yeniləyir

//niye depandancy bos olanda coxlu console.log() cixir

//niye removu-isletdik???????


const { t, i18n } = useTranslation(); 



// 1️⃣ localStorage-də dil yoxdursa yaz
// useEffect(() => {
//   const lang = i18n.language || "en";
//   if (!localStorage.getItem("language")) {
//     localStorage.setItem("language", lang);
//   }
// }, [i18n.language]);

// // 2️⃣ state-i localStorage-dən mount zamanı oxu
// useEffect(() => {
//   const savedLang = localStorage.getItem("language");
//   if (savedLang) setCurrentLang(savedLang);
// }, []);



   useEffect(() => {
    const savedLang = localStorage.getItem("language") || i18n.language || "en";
    i18n.changeLanguage(savedLang);
  }, []);

    // Dropdown dəyişəndə həm i18n, həm localStorage update olunsun
    const handleLanguageChange = (e) => {
      const newLang = e.target.value;
      i18n.changeLanguage(newLang);
      localStorage.setItem("language", newLang);
  };



    return (
        // <div className={`flex gap-10 2xl:justify-between  ${firstScrollDone? "border-3 border-cyan-500 rounded-[111px] h-18 transition-all ease-in-out duration-800   bg-white":''}   justify-center  font-oswald text-[#1F1534]   fixed   w-full pr-[8%] lg:pl-[7%] lg:pr-[15%] 2xl:pr-[7%]  h-14 pt-6 rounded-[30px]  z-20 `}>
        //    <Link to='/' className=" w-[340px] lg:w-[170px] lg:ml-[80px] lg:mt-[-13px]  xl:w-[340px] 2xl:w-[22%]  flex-shrink-0 h-[100px] "><img className="w-[200px] h-[50px]" src="/images/mediflow-logo.png" alt="Image not found" /></Link>

        //    <div className="flex gap-10 lg:min-w-[420px]  xl:mr-5   2xl:w-[14%]   ">
        //             {   
        //     links.map((link)=>(
        //         <a
        //             key={link.id}
        //              href={`#${link.id}`}
        //                  onClick={(e) => handleClick(e)}
        //             className={styles.navlink}  
        //         >
        //              {t(`navbar.${link.id}`)}

        //         </a>    
        //     ))
        // }
        //    </div>

        //     <div className="flex gap-4 w-[400px] lg:min-w-[310px] xl:min-w-[350px]   ">
        //   <button className="flex gap-3   mt-[-6px] h-10 lg:w-26 xl:w-40 lg:px-1 px-5 justify-center   items-center    rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
        //       <IoIosLogIn  size={20}/>
        //       <p className="font-semibold">{t("navbar.signup")}</p>
        //   </button>

        //   {/* <button className="flex gap-3 mr-1 mt-[-6px] h-10 lg:w-30 xl:w-40  items-center justify-center       rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
        //       <IoIosLogIn  size={21}/>
        //       <p className="font-semibold ">Log In</p>
        //   </button> */}

        //   <select className=" h-8" name="Language"  onChange={(e) => i18n.changeLanguage(e.target.value)}>
        //     <option value="en">En</option>
        //    <option value="az">Az</option>
        //   </select>

        //   <div className="flex flex-col  mt-[5px]">
        //       <div className="" onClick={()=>setIsOpen(!isOpen)}>{t("navbar.myShopping.title")}</div>
        //       {
        //         isOpen &&(
        //     <div className="bg-white justify-center      px-5 flex flex-col gap-5 h-[160px] ">
        //     <div className="flex gap-2   ">  <FaBalanceScale  size={20} /> <span>{t("navbar.myShopping.balance")}</span></div>
        //     <div className="flex gap-2">  <FaBalanceScale  size={20} /> <span>{t("navbar.myShopping.balance")}</span></div>
        //     <div className="flex gap-2">  <RiShoppingBasketLine  size={20} /> <span>{t("navbar.myShopping.basket")}</span></div>
        //     <div className="flex gap-2">  <FaRegHeart  size={20} /> <span>{t("navbar.myShopping.favorites")}</span></div>
        //   </div>
        //         )
        //       }
        

        //   </div>
        
        //     </div>
        // </div>


        <div className={`fixed top-0    w-[100%]  z-20 flex justify-between gap  items-center px-6 lg:px-4 xl:px-9    py-4 bg-white transition-all duration-700 ease-in-out ${firstScrollDone ? "border-2 border-cyan-500 rounded-3xl shadow-lg" : ""}`}>
  <Link to="/" className="flex-shrink-0  w-32 lg:w-40   ">
    <img src="/images/mediflow-logo.png" alt="Logo" className="w-full"/>
  </Link>

{/* overflow-x-hidden */}
  <div className="lg:flex gap-8  2xl:w-[500px]  justify-end  xl:w-[500px] lg:w-[490px]     ">
    {links.map(link => (
      <a key={link.id} href={`#${link.id}`} onClick={handleClick} className={styles.navlink}>
        {t(`navbar.${link.id}`)}
      </a>
    ))}
  </div>

  <div className="flex items-center gap-4">
    <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
      <IoIosLogIn size={20} />
      <span>{t("navbar.signup")}</span>
    </button>

       <select value={i18n.language} onChange={handleLanguageChange} className="h-8">
      <option value="en">En</option>
      <option value="az">Az</option>
    </select>

    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)} className="cursor-pointer">{t("navbar.myShopping.title")}</div>
      {isOpen && (
        <div className="absolute top-full right-0 bg-white shadow-lg px-5 py-3 flex flex-col gap-2 z-30 ">
          <div className="flex items-center gap-2 hover:bg-gray-200"><FaBalanceScale size={20}/> {t("navbar.myShopping.balance",{ lng: currentLang })}</div>
          <div className="flex gap-2 hover:bg-gray-200">  <FaBalanceScale  size={20} /> Muqayise</div>
          <Link to='services/pharmacy/basket' className="flex items-center gap-2  hover:bg-gray-200 "><RiShoppingBasketLine size={20}/> {t("navbar.myShopping.basket",{ lng: currentLang })}</Link>
          <div className="flex items-center gap-2  hover:bg-gray-200"><FaRegHeart size={20}/> {t("navbar.myShopping.favorites",{ lng: currentLang })}</div>
 
        </div>
      )}
    </div>
  </div>
</div>

    )
}





// https://chatgpt.com/c/6926e3d2-3978-8332-99c3-f6b4bad182ab buna mutleq bax ferqlerine gorek nece oldu


//githubda olan numune bax gorek nece boyuyur ana sehifede dasboard adi ile navbar var e onu deyirem




// https://chatgpt.com/c/691d5666-80ec-8325-bdbd-808ed4961eb2

//lazim olsa bu my shoppingi relative absolute et cunki responsivlik problemi yaradir.(lazim olsa w-faiz ver mesleen 35%)


//tercumede useBackend ile de islemeye calis




// 2️⃣ event.target.value nə edir?

// event.target → dəyişən <select> elementini göstərir.

// .value → seçilmiş <option>-un value atributunu alır.

// Misal:

// <select onChange={handleChange}>
//   <option value="en">English</option>
//   <option value="az">Azerbaijani</option>
// </select>


// Əgər istifadəçi Azerbaijani seçsə → event.target.value === "az"

// Əgər English seçsə → event.target.value === "en"



// Parametr və ya əlavə əməliyyat yoxdursa → sadəcə onClick={handleClick}

// Parametr və ya əlavə əməliyyat varsa → onClick={() => handleClick(param)}