  import { useState } from 'react'

  import './App.css'
  import Home from './HomePage/Home'
  import Service from './ServicePage/Service';
  import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
  import Department from './ServicePage/DoctorPage/Department';

 export default function App() {
 const useNavigation=useNavigate()
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
