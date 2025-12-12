
import React from 'react'

export default function NavbarVm() {
  return (
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

  // Init language
  useEffect(() => {
    const savedLang = localStorage.getItem("language") || i18n.language || "en";
    i18n.changeLanguage(savedLang);
    setCurrentLang(savedLang);
  }, []);

  const handleLanguageChange = (e) => {
    const newLang = e.target.value;
    i18n.changeLanguage(newLang);
    localStorage.setItem("language", newLang);
    setCurrentLang(newLang);
  };

  return {
    firstScrollDone,
    isOpen,
    setIsOpen,
    currentLang,
    handleLanguageChange
  };
  )
}
