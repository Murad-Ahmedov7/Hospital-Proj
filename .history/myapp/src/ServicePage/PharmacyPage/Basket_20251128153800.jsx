import React from 'react'

export default function Basket() {
  return (
      <div className=' flex h-screen w-screen justify-center items-center pt-[72px]  '>    {/* main container */}


        <div className=' flex h-[700px] w-full gap-10'>  {/* main content container */}


        <div className='  w-[71%] bg-red-600'> {/* left content container */}

          <div className='flex justify-between '>
          <p className='text-oswald text-2xl font-bold'> Shopping Cart</p>
          <p className='text-oswald text-2xl font-bold'>(04 Items)</p>
          </div>
          <div className='border h-0 mt-5'></div>

          <div className='flex'>
            <p className='text-oswald text-2xl w-[25%] '>Product Details</p>
            <p className='text-oswald text-2xl [10%] '>Price</p>
            <p className='text-oswald text-2xl '>Quantity</p>
            <p className='text-oswald text-2xl '>Total</p>

          </div>

        </div>

          
          <div className='bg-orange-300   h-[500px] w-[25%]'> {/* right content container */}

            
          </div>
        </div>
      </div>
  )
}



      
