import React from 'react'
import { FaChevronDown } from "react-icons/fa";


export default function Tracking() {
  return (
<div className="flex items-center justify-center pt-16 gap-2 cursor-pointer">
  <p className="text-xl font-medium mt-44">Patient History</p>
  <FaChevronDown size={24} />
</div>
  )
}
