  import { useState } from 'react'

  import './App.css'
  import Home from './HomePage/Home'
  import Service from './ServicePage/Service';
  import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
  import Department from './ServicePage/DoctorPage/Department';

  function AppContent() {
  const location = useLocation();
  const hideHome = location.pathname.includes("/#home")
  return (
    <>
 
      
    
      <BrowserRouter>
      
      </BrowserRouter>
    </>
  );
}
