import React from 'react'

export default function Basket() {
  return (
      <div className=' flex min-h-screen w-screen justify-center items-center pt-[72px]  '>    {/* main container */}


        <div className=' flex h-[700px] w-full gap-10 ml-4'>  {/* main content container */}


        <div className='  w-[71%]'> {/* left content container */}

          <div className='flex justify-between '>
          <p className='text-oswald text-xl font-bold'> Shopping Cart</p>
          <p className='text-oswald text-xl font-bold'>(04 Items)</p>
          </div>
          <div className='border h-0 mt-5'></div>

          <div className='flex gap-10 mt-4'>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[25%] '>Product Details</p>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[15%]  '>Price</p>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[15%]  '>Quantity</p>
            <p className='text-oswald text-[15px] text-[#4e4e4e] font-bold w-[15%]  '>Total</p>

          </div>

          <div className='border h-0 mt-5 border-black/10'></div>

        </div>

          
          <div className='bg-orange-300   h-[500px] w-[25%]'> {/* right content container */}

            
          </div>
        </div>
      </div>
  )
}



      
