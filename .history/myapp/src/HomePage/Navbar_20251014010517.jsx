import { replace, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";

export default function Navbar() {

 const links = [
  { id: "home", name: "Home" },
//   { id: "find-doctor", name: "Find a doctor" },
  { id: "services", name: "Services" }, 
  { id: "apps", name: "Apps" },
  { id: "testimonials", name: "Testimonials" },
  { id: "about-us", name: "About us" }
];
    const location=useLocation()
    const navigate=useNavigate()

const handleClick = (id, e) => {
    e.preventDefault(); // href-in default davranışını bloklayır

    if (location.pathname !== "/") {
      // Əgər path / deyilsə, /-a yönlendir
      navigate("/");
    } 
  };
  
    return (


        
        <div className="flex gap-10  justify-end font-bold text-[#1F1534] font-mulish  fixed  right-0 border-2 w-full pr-[8%] h-14 pt-3 rounded-[30px] border-blue-200 shadow-lg  ">
        {
            links.map((link)=>(
                <a
                    key={link.id}
                     href={`#${link.id}`}
                         onClick={(e) => handleClick(link.id, e)}
                    className={styles.navlink}
                >
                    {link.name}
                </a>
            ))
        }
        </div>
    )
}