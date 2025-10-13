  import { useState } from 'react'

  import './App.css'
  import Home from './HomePage/Home'
  import Service from './ServicePage/Service';
  import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
  import Department from './ServicePage/DoctorPage/Department';

 export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Home />
      <Service />
      <BrowserRouter>   {/* Router burada başlanır */}
        <Routes>
          <Route path='/services/doctor' element={<Department />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
