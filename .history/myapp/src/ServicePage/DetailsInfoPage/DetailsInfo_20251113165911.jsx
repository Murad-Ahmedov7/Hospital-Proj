// font-oswald

import React from 'react'
import { Link } from 'react-router-dom'

export default function DetailsInfo() {
  return (
    <div className='flex items-center justify-center w-full h-screen'>
        <Link to="/services/info/faq">Click to see FAQ</Link>
    </div>
  )
}
