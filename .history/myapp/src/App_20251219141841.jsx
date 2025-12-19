import { useEffect, useState } from "react";

import "./App.css";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Departments from "./pages/services/departments/Departments";
import  Navbar  from "./components/Navbar/Navbar";

import Pharmacy from "./pages/services";
import PharmacyShop from "./ServicePage/PharmacyPage/PharmacyShop";
import Consultation from "./ServicePage/ConsultationPage/Consultation";
import JsServer from "./MockBackend/JsServer";
import baseApi from "./api/baseApi";

import Tracking from "./ServicePage/TrackingPage/Tracking";
import DetailsInfo from "./ServicePage/DetailsInfoPage/DetailsInfo";
import Faq from "./ServicePage/DetailsInfoPage/Faq";

import Basket from "./ServicePage/PharmacyPage/Basket/Basket";
import DoctorTimeTable from "./pages/services/departments/DoctorTimeTable";
import { departments } from "./data/data";
import Home from "./pages/home/Home";
import Cardiology from "./pages/services/departments/cardiology/Cardiology";



 
 
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
      <Navbar />

      <Routes>
       <Route path="/" element={<Home />} />
        <Route path="services/departments" element={<Departments />} />
        <Route path="services/departments/cardiology" element={<Cardiology />} />
        <Route path="services/departments/doctor-timetable" element={<DoctorTimeTable />} />
        <Route path="services/pharmacy" element={<Pharmacy />} />
        <Route path="services/pharmacy/shop" element={<PharmacyShop/>} />
        <Route path="services/pharmacy/basket" element={<Basket/>} />
        <Route path="services/consultation" element={<Consultation/>}/>
        <Route path="services/tracking" element={<Tracking/>} />
        <Route path="services/info" element={<DetailsInfo/>}/>
        <Route path="services/info/faq" element={<Faq/>}/>
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

