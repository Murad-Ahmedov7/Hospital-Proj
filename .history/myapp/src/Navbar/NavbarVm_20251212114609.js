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
      if(window.scrollY===0){
        console.log("scroll en basdadi")
        setFirstScrollDone(false)
        
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [firstScrollDone]); //scroll ile navbar rengini deyisme

    //handleScroll bitir → sonra React render edir

    // Bu səbəbdən console.log setState-dən sonra da çıxır

    // React render-i dayandırmır, yalnız gələcəkdə UI-i yeniləyir

    //niye depandancy bos olanda coxlu console.log() cixir

    //niye removu-isletdik???????






}
