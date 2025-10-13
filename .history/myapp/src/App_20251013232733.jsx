  import { useState } from 'react'

  import './App.css'
  import Home from './HomePage/Home'
  import Service from './ServicePage/Service';
  import { BrowserRouter, Routes, Route, useNavigate, useLocation } from "react-router-dom";
  import Department from './ServicePage/DoctorPage/Department';

 export default function App() {
  const location = useLocation();
  const hideSidebar = location.pathname.includes("/#home") || location.pathname.includes("/register") ||location.pathname===("/");
  return (
    <>
      <Home />
    
      <BrowserRouter>
        <Service />
        <Routes>
          <Route path='/doctor' element={<Department />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
