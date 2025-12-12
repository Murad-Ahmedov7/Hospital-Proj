import { Link, replace, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect, useState, useTransition } from "react";
import { IoIosLogIn } from "react-icons/io";
import { FaBalanceScale } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { useTranslation } from "react-i18next";
import NavbarVm from "./NavbarVm";
import { navbarLinks, userMenuItems } from "../data/data";



export default function Navbar() {
    const location=useLocation()
    const navigate=useNavigate()
    const { t, i18n } = useTranslation();

    
  const { firstScrollDone, isOpen, setIsOpen, currentLang, handleLanguageChange } =NavbarVm();

  const handleClick = (e) => {
      if (location.pathname !== "/") {
      e.preventDefault(); //eventin default davranisini bloklayir(duzdu?)
        navigate("/");
      }
    };

    return (
  <div className={`fixed top-0    w-[100%]  z-20 flex justify-between gap  items-center px-6 lg:px-4 xl:px-9    py-4 bg-white transition-all duration-700 ease-in-out ${firstScrollDone ? "border-2 border-cyan-500 rounded-3xl shadow-lg" : ""}`}>
 
  <Link to="/" className="flex-shrink-0  w-32 lg:w-40   ">
    <img src="/images/mediflow-logo/mediflow-logo.png" alt="Logo" className="w-full"/>
  </Link>

{/* overflow-x-hidden */}
  <div className="lg:flex gap-8  2xl:w-[500px]  justify-end  xl:w-[500px] lg:w-[490px]     ">
    {navbarLinks.map(link => (
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
          <div className="absolute top-full right-0 bg-white shadow-lg px-5 py-3 flex flex-col gap-2 z-30">
            {userMenuItems.map(item => {
              const Icon = item.icon;
              return (
              <div key={item.id} className="flex items-center gap-2 hover:bg-gray-200">
                <Icon size={20} /> {t(`navbar.myShopping.${item.label.toLowerCase()}`, { lng: currentLang })}
              </div>
            )}
        )}

  </div>
      )}
      </div>
  </div>



</div>

    )
}




//#region  Edilecek 1 
// https://chatgpt.com/c/6926e3d2-3978-8332-99c3-f6b4bad182ab buna mutleq bax ferqlerine gorek nece oldu


//githubda olan numune bax gorek nece boyuyur ana sehifede dasboard adi ile navbar var e onu deyirem

//#endregion

//#region  Edilecek 2
// https://chatgpt.com/c/691d5666-80ec-8325-bdbd-808ed4961eb2

//tercumede useBackend ile de islemeye calis

//#endregion


// #region Event.target.value izahı
// event.target → dəyişən <select> elementini göstərir.
// .value → seçilmiş <option>-un value atributunu alır.

// Misal:

// <select onChange={handleChange}>
//   <option value="en">English</option>
//   <option value="az">Azerbaijani</option>
// </select>

// Əgər istifadəçi Azerbaijani seçsə → event.target.value === "az"
// Əgər English seçsə → event.target.value === "en"
// #endregion

// #region onClick istifadəsi
// Parametr və ya əlavə əməliyyat yoxdursa → sadəcə onClick={handleClick}
// Parametr və ya əlavə əməliyyat varsa → onClick={() => handleClick(param)}
// #endregion


// #region Nə üçün ViewModel-də?
// Reactive state, effect, async əməliyyatlar
// Backend ilə əlaqəli data / business logic
// #endregion

// #region Niyə komponentdə qalır?
// Statik data və UI-specific event handler
// Komponentə bağlı navigation və DOM əməliyyatları
// #endregion




//#region ✅ Flex Shrink + Min-Width + Flex-in Default Qaydaları (Tam Sual–Cavab Formatı)
// (BÜTÜN “büzülmə” sözləri “sıxılma” ilə əvəz olundu)
// 🔵 1) Sual: Flex elementlərinin default dəyərləri nədir?

// Cavab: display: flex verəndə flex itemlərin default dəyərləri belədir:

// flex-grow: 0      (böyümür)
// flex-shrink: 1    (sıxılır)
// flex-basis: auto  (kontentin ölçüsünə uyğun)


// Yəni default olaraq elementlər böyümür, amma lazım olanda sıxılır.

// 🔵 2) Sual: Flex konteyner daralanda default olaraq nə baş verir?

// Cavab:

// Bütün elementlər sıxılmağa başlayır → çünki flex-shrink: 1 defaultdur.

// Heç bir element öz ölçüsünü qorumağa çalışmır → çünki min-width verilməyib.

// Şəkillər də sıxıla bilər → çünki default flex-shrink: 1-dir.

// 🔵 3) Sual: Niyə şəkillər flexdə çox pozulur?

// Cavab: Çünki default olaraq flex-shrink: 1 gəlir və konteyner daralanda şəkil məcburi sıxılır, nəticədə deformasiya yaranır.

// 🔵 4) Sual: Default davranışı necə düzəltmək lazımdır?

// Cavab:

// Şəkillər üçün
// flex-shrink: 0;  // şəkil sıxılmasın

// Mətn, düymə və kartlar üçün
// min-width: Xpx;  // minimal ölçü qorunur, çox sıxılmır

// 🔵 5) Sual: Flex olduğu halda niyə min-width önəmlidir?

// Cavab:
// Çünki flex-shrink: 1 olduğu halda element sıxıla bilər,
// amma min-width sıxılmanın limitini təyin edir.

// 👉 flex-shrink = sıxılma davranışı
// 👉 min-width = sıxılmanın sərhədi

// 🔵 6) Sual: Flex-də ən ideal kombinasiyalar hansıdır?
// Şəkil:
// flex-shrink: 0;   // sıxılmasın

// Mətn və düymə:
// flex-shrink: 1;   // sıxıla bilər
// min-width: 120px; // amma çox sıxılmasın

// Kart və konteyner:
// flex: 1;     // boş yeri doldursun


//#endregion