import React from 'react'

export default function Basket() {
  return (
      <div className=' flex h-screen w-screen justify-center items-center pt-[72px]  '>    {/* main container */}


        <div className=' flex h-[700px] w-full'>  {/* main content container */}


        <div className='  w-[75%]'> {/* left content container */}

          <div className='flex justify-between w-[700px]'>
          <p className='text-oswald text-2xl font-bold'> Shopping Cart</p>
          <p className='text-oswald text-2xl font-bold'>(04 Items)</p>
          </div>
        </div>

          
          <div className='bg-orange-300   h-[400px] w-[25%]'> {/* right content container */}

            
          </div>
        </div>
      </div>
  )
}



      
