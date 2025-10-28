import { useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";
import Navbar from "./HomePage/Navbar";
import { AllHash } from "../AllHash";

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
