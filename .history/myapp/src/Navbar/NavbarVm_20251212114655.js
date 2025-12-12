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
      if (!firstScrollDone) setFirstScrollDone(true);
      if (window.scrollY === 0) setFirstScrollDone(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [firstScrollDone]);




}
