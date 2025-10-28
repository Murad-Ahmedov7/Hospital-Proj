import { useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";
import Navbar from "./HomePage/Navbar";
import { AllHash } from "../AllHash";
import Pharmacy from "./ServicePage/PharmacyPage/Pharmacy";


function AppContent() {
  const location = useLocation();
  // const hideHome = location.hash === "#home";
  // const hideService = location.hash === "#service";

  return (
    <>
      <Navbar />

      <Routes>
       <Route path="/" element={<AllHash />} />
        <Route path="services/doctor" element={<Department />} />
        <Route path="services/pharmacy" element={<Pharmacy />} />
        <Route path="services/"

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
