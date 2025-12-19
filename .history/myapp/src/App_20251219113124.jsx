import { useEffect, useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";
import  Navbar  from "./Navbar/Navbar";


// import { AllHash } from "./AllHash";
import Pharmacy from "./ServicePage/PharmacyPage/Pharmacy";
import Consultation from "./ServicePage/ConsultationPage/Consultation";
import JsServer from "./MockBackend/JsServer";
import baseApi from "./api/baseApi";

import Tracking from "./ServicePage/TrackingPage/Tracking";
import DetailsInfo from "./ServicePage/DetailsInfoPage/DetailsInfo";
import Faq from "./ServicePage/DetailsInfoPage/Faq";
import PharmacyShop from "./ServicePage/PharmacyPage/PharmacyShop";
import Basket from "./ServicePage/PharmacyPage/Basket/Basket";
import DoctorTimeTable from "./ServicePage/DoctorPage/DoctorTimeTable";
import Cardiology from "./ServicePage/DoctorPage/CardiologyPage/Cardiology";
import { departments } from "./data/data";
import HomeSection from "./pages/home/HomeSection";



 
 
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
       <Route path="/" element={<HomeSection />} />
        <Route path="services/doctor" element={<Department />} />
        <Route path="services/doctor/cardiology" element={<Cardiology />} />
        <Route path="services/doctor/timetable" element={<DoctorTimeTable />} />
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

