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

const handleClick = (e) => {
    if (location.pathname !== "/") {
       e.preventDefault(); //eventin default davranisini bloklayir(duzdu?)
      // Əgər path / deyilsə, /-a yönlendir
      navigate("/");
    } 
  };
  
    return (


        
        <div className="flex gap-1  justify-center font-bold font-oswald text-[#1F1534]   fixed   w-full pr-[8%] h-14 pt-5 rounded-[30px]  z-20   ">
           <div className=" lg:w-[24%] h-[200px] lg:mt-[-13px]   "><img className="w-[200px] h-[50px]" src="/images/mediflow-logo.png" alt="Image not found" /></div>
        {
            links.map((link)=>(
                <a
                    key={link.id}
                     href={`#${link.id}`}
                         onClick={(e) => handleClick(e)}
                    className={styles.navlink}
                >
                    {link.name}
                </a>
            ))
        }
        <div className="flex ml-20  "><p className="">Login</p></div>
        </div>
    )
}