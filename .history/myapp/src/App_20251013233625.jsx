import { useState } from "react";

import "./App.css";
import Home from "./HomePage/Home";
import Service from "./ServicePage/Service";
import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Department from "./ServicePage/DoctorPage/Department";

function AppContent() {
  const location = useLocation();
  const hideHome = location.pathname.includes("/#home");
  return (
    <>
      <Home/>
      <Service />
      <Routes>
        <Route path="services/doctor" element={<Department />} />
      </Routes>
    </>
  );
}

export default function App() {
  <BrowserRouter>
    <AppContent />
  </BrowserRouter>;
}
