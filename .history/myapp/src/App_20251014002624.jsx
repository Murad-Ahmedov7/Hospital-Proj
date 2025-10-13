import { useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";
import Navbar from "./HomePage/Navbar";

function AppContent() {
  const location = useLocation();
  // const hideHome = location.hash === "#home";
  // const hideService = location.hash === "#service";

  return (
    <>
      <Navbar />

      <Routes>
              <Route path="services/doctor" element={<Department />} />
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
