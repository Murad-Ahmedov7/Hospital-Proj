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
  { id: "about-us", name: "About" }
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


        
        <div className="flex gap-9 lg:ml-3   justify-center font-oswald text-[#1F1534]   fixed   w-full pr-[8%] h-14 pt-6 rounded-[30px]  z-20   ">
           <div className=" lg:w-[350px] h-[2400px] lg:mt-[-13px] w-[33%]"><img className="w-[200px] h-[50px]" src="/images/mediflow-logo.png" alt="Image not found" /></div>
        {
            links.map((link)=>(
                <a
                    key={link.id}
                     href={`#${link.id}`}
                         onClick={(e) => handleClick(e)}
               className={`${styles.navlink} w-[33%]`}
                >
                    {link.name}
                </a>    
            ))
        }
        <button className="flex gap-3 ml-30 w-[]  mt-[-6px] h-10 lg:w-50 lg:px-1 px-5 justify-center   items-center    rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
            <IoIosLogIn  size={21}/>
            <p className="font-semibold   ">Sign Up</p>
        </button>

           <button className="flex gap-3 mr-1 mt-[-6px] h-10 lg:w-50  items-center justify-center       rounded-2xl border-1 text-white bg-gradient-to-br from-white to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-white dark:focus:ring-green-800 ">
            <IoIosLogIn  size={21}/>
            <p className="font-semibold ">Log In</p>
        </button>
        </div>
    )
}


