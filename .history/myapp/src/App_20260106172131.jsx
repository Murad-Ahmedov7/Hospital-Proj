

import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

import JsServer from "./MockBackend/JsServer";

import baseApi from "./api/baseApi";


import  Navbar  from "./components/Navbar/Navbar";


import Home from "./pages/home/Home";

import SignUp from "./pages/auth/sign-up/SignUp";

import Consultation from "./pages/services/consultation/Consultation";


import Departments from "./pages/services/departments/Departments";

import { departments } from "./data/data";

import Cardiology from "./pages/services/departments/cardiology/Cardiology";

import DoctorTimeTable from "./pages/services/departments/doctor-timetable/DoctorTimeTable";


import DetailsInfo from "./pages/services/details-info/DetailsInfo";

import Faq from "./pages/services/details-info/faq/Faq";


import Pharmacy from "./pages/services/pharmacy/Pharmacy";

import PharmacyShop from "./pages/services/pharmacy/PharmacyShop";

import Cart from "./pages/services/pharmacy/basket/Basket";


import Tracking from "./pages/services/tracking/Tracking";
import Login from "./pages/auth/login/Login";

import Doctors from "./pages/services/details-info/doctors/Doctors";






 
function AppContent() {
  const location = useLocation();
  // const hideHome = location.hash === "#home";
  // const hideService = location.hash === "#service";




 

    
  
    useEffect(() => {
      const sendDepartments = async () => {     //useQuery islet esl data olanda
        try {
          
        const titles = departments.map(d => d.title); // ["Cardiology", ...]
        const response = await baseApi.get('/doctorService');
          if(!response.data ||response.data.length===0) {
            await baseApi.post("/doctorService", titles); 
            console.log("Departments sent:", titles);
          }
          else {
          console.log("Departments already sended, skipping POST.");
          }
       
          
        } 
        catch (err) {
          console.error(err);
        }
      };
  
      sendDepartments();
    }, []);




  return (
    <>
     {!['/auth/login', '/auth/sign-up'].includes(location.pathname) && <Navbar />}

      <Routes>
       <Route path="/" element={<Home />} />
       <Route path="auth/sign-up"  element={<SignUp />} />
       <Route path="auth/login"  element={<Login/>} />
        <Route path="services/departments" element={<Departments />} />
        <Route path="services/departments/cardiology" element={<Cardiology />} />
        <Route path="services/departments/doctor-timetable" element={<DoctorTimeTable />} />
        <Route path="services/pharmacy" element={<Pharmacy />} />
        <Route path="services/pharmacy/shop" element={<PharmacyShop/>} />
        <Route path="services/pharmacy/cart" element={<Cart/>} />
        <Route path="services/consultation" element={<Consultation/>}/>
        <Route path="services/tracking" element={<Tracking/>} />
        <Route path="services/details-info" element={<DetailsInfo/>}/>
        <Route path="services/details-info/faq" element={<Faq/>}/>
        <Route path="services/details-info/doctors" element={<Doctors/>}/>
        <Route path="learnJsServer" element={<JsServer/>}/>
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

