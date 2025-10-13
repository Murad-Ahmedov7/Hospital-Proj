import { useState } from 'react'

import './App.css'
import Home from './HomePage/Home'
import Service from './ServicePage/Service';


 export default function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Service/>
    </>
  )
}


//Hostpiral sira gozleme progrmai
//cofee shop (gloria progrmia)
//isleri bolusdmdurme progmai yaz