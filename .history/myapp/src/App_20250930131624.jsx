import { useState } from 'react'

import './App.css'
import Home from './HomePage/Home'
import Service from './ServicePage/Service';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Home/>
    <Service/>
    </>
  )
}

export default App
