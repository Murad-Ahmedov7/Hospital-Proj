import { replace, useLocation, useNavigate } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useEffect } from "react";
import { IoIosLogIn } from "react-icons/io";
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


        
        <div className="flex gap-10 lg:ml-10    font-oswald text-[#1F1534]   fixed   w-full pr-[8%] h-14 pt-6 rounded-[30px]  z-20   ">
           <div className=" lg:w-[14%] h-[200px] lg:mt-[-13px]   "><img className="w-[200px] h-[50px]" src="/images/mediflow-logo.png" alt="Image not found" /></div>
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
        <button className="flex gap-3 ml-4 mt-[-6px] h-10 px-5 items-center   rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
            <IoIosLogIn  size={21}/>
            <p className="font-semibold ">Sign Up</p>
        </button>

           <button className="flex gap-3 mr-1 mt-[-6px] h-10 px-5 items-center   rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
            <IoIosLogIn  size={21}/>
            <p className="font-semibold ">Log In</p>
        </button>
        </div>
    )
}


