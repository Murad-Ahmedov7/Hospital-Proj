
import { BsCircleFill } from "react-icons/bs";
import { GrFormUpload } from "react-icons/gr";


export default function PharmacyHero() {
  return (
    <div className="w-full pt-[72px]">
      <div className="flex justify-center items-center relative">
        <img className="rounded-2xl w-[90%]" src="/images/cyan-bg.png"/>
        <div className=" inner-content flex flex-col gap-17   absolute w-[86%] h-[80%] ">

          <div className="row-up flex w-[97%]">
            <div className="outer-left w-[65%]">

              <div className="inner-left   w-[95%] flex flex-col">

                <ul className="list-unstyled  flex items-center justify-center border-1 border-cyan-400 bg-cyan-300/30  rounded-2xl gap-4 w-[230px] py-1.5 ">

                  <li className="flex items-center gap-1 text-white font-oswald font-bold">
                    <BsCircleFill color="white" size={6} />
                    Health
                  </li>
                  <li className="flex items-center gap-1 text-white font-oswald  font-bold">
                    <BsCircleFill color="white" size={6} />
                    Truth
                  </li>

                  <li className="flex items-center gap-1 text-white font-oswald  font-bold">
                    <BsCircleFill color="white" size={6} />
                    Online
                  </li>
                </ul>

                <p className="text-8xl w-[987px] mt-7 text-white font-oswald  font-bold">Instant Pharmacy Access For You </p>
                
                

              </div>
            
            </div>

            <div className="outer-right flex flex-col gap-9 w-[35%]">
              <div className="user-box flex w-full gap-4">
                 <div className="flex -space-x-5">
                  <img className="w-12 h-12 rounded-full border-cyan-400" src="/images/user pics/user1.png" />
                  <img className="w-12 h-12 rounded-full border-cyan-400" src="/images/user pics/user2.png" />
                  <img className="w-12 h-12 rounded-full border-cyan-400" src="/images/user pics/user3.png" />
                  <img className="w-12 h-12 rounded-full border-cyan-400" src="/images/user pics/user4.png" />
                 </div>
                 


                <div className="user-text">
                  <p className="text-white font-bold font-oswald text-4xl">4K+</p>
                  <p className="text-white font-bold text-xl">Happy Clients</p>
                </div>

              </div>

              <p className="text-2xl text-white font-bold font-oswald ">Order prescription and over-the-counter medicines online with confidence. </p>

              <div className="w-full flex gap-4">
                <button className="bg-yellow-300/80 w-[170px] hover:scale-105 transition-all duration-500  rounded-4xl">Shop Now</button>
                <button className=" flex items-center border-dashed border-2 rounded-4xl px-4 py-2 border-white text-white font-bold">     <GrFormUpload size={30} />  Upload Prescription</button>
              </div>
            </div>


          </div>

         <div className="row-down flex w-[97%] gap-20">
            <img className="rounded-2xl w-[]" src="/images/banner-img1.jpg" alt="Picture not available" />
            <img className="rounded-2xl" src="/images/banner-img2.jpg" alt="Picture not available" />
          </div>

          
          
        </div>
      </div>

    </div>
  )
}


// https://chatgpt.com/c/692f0b1d-7970-8331-a1ff-7e31cf9e913b
