import { useEffect, useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";
import Navbar from "./HomePage/Navbar";
import { AllHash } from "../AllHash";
import Pharmacy from "./ServicePage/PharmacyPage/Pharmacy";
import Consultation from "./ServicePage/ConsultationPage/Consultation";
import JsServer from "./MockBackend/JsServer";
import baseApi from "./api/baseApi";


   export const departments = [
      {
        id: 1,
        title: "Cardiology",
        img: "/images/Heart.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 2,
        title: "Ophthalmology",
        img: "/images/Eye.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 3,
        title: "Pulmonary",
        img: "/images/Pulmonary.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 4,
        title: "Dental",
        img: "/images/Dental.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 5,
        title: "Diagnostics",
        img: "/images/Diagnostics.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 6,
        title: "For disabled",
        img: "/images/For disabled.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 7,
        title: "Traumotoligy",
        img: "/images/Traumotoligy.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
      {
        id: 8,
        title: "Laboratory",
        img: "/images/Laboratory.png",
        width: "w-[65px]",
        height: "h-[55px]",
        Link: "services/doctor",
      },
    ];
 
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
       <Route path="/" element={<AllHash />} />
        <Route path="services/doctor" element={<Department />} />
        <Route path="services/pharmacy" element={<Pharmacy />} />
        <Route path="services/consultation" element={<Consultation/>}/>
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

