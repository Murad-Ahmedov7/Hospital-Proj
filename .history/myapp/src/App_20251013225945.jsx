import { useState } from 'react'

import './App.css'
import Home from './HomePage/Home'
import Service from './ServicePage/Service';
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

 export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Service/>
    <BrowserRouter>
    <Routes>
      <Route
    </Routes>
    </BrowserRouter>
    </>
  )
}


