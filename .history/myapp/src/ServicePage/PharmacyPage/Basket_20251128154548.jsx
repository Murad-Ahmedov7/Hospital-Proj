import React from 'react'

export default function Basket() {
  return (
      <div className=' flex min-h-screen w-screen justify-center items-center pt-[72px]  '>    {/* main container */}


        <div className=' flex h-[700px] w-full gap-10'>  {/* main content container */}


        <div className='  w-[71%]'> {/* left content container */}

          <div className='flex justify-between '>
          <p className='text-oswald text-2xl font-bold'> Shopping Cart</p>
          <p className='text-oswald text-2xl font-bold'>(04 Items)</p>
          </div>
          <div className='border h-0 mt-5'></div>

          <div className='flex'>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[200px] '>Product Details</p>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[190px]  '>Price</p>
            <p className='text-oswald text-[15px] w-[150px]  '>Quantity</p>
            <p className='text-oswald yext-[15px] w-[150px]  '>Total</p>

          </div>

        </div>

          
          <div className='bg-orange-300   h-[500px] w-[25%]'> {/* right content container */}

            
          </div>
        </div>
      </div>
  )
}



      
