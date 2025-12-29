
import React from 'react'

export default function Doctors() {
  return (
    <div className='pt-[72px] w-screen h-screen '>
        <div className='header  flex items-center justify-center  mt-6 bg-gray-200 h-[180px]'>
            <div className='w-[72%]'>
                <p className='font-bold text-4xl'>Doctors</p>
            </div>
        </div>

        <div className='main flex items-center justify-center w-full h-full'>
            <div className='bg-red-700 w-full justify-center '>
                <select>
                    <option>Az</option>
                    <option>Ru</option>
                    <option>En</option>
                </select>
            </div>
        </div>
    </div>
  )
}
