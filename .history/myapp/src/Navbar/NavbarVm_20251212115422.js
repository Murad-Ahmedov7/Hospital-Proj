import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

export default function NavbarVm() {
  const [firstScrollDone, setFirstScrollDone] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState("");
  const { i18n } = useTranslation();

  // Scroll handler
  useEffect(() => {
    const handleScroll = () => {
      if (!firstScrollDone) {
        setFirstScrollDone(true);
        console.log("İlk dəfə scroll edildi!");
      }
      if (window.scrollY === 0) {
        console.log("scroll en basdadi");
        setFirstScrollDone(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [firstScrollDone]); //scrool ile navbar rengini deyisme

  // //handleScroll bitir → sonra React render edir

  // Bu səbəbdən console.log setState-dən sonra da çıxır

  // React render-i dayandırmır, yalnız gələcəkdə UI-i yeniləyir

  //niye depandancy bos olanda coxlu console.log() cixir

  //niye removu-isletdik???????



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


    return {
    firstScrollDone,
    isOpen,
    setIsOpen,
    currentLang,
    handleLanguageChange
  };

}
