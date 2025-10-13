  import { useState } from 'react'

  import './App.css'
  import Home from './HomePage/Home'
  import Service from './ServicePage/Service';
  import { BrowserRouter, Routes, Route } from "react-router-dom";
  import Department from './ServicePage/DoctorPage/Department';

 export default function App() {
 
  return (
    <>
      <Home />
    
      <BrowserRouter>
      
        <Routes>
          <Route path='/services/doctor' element={<Department />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
