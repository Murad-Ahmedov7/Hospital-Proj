
import { BsCircleFill } from "react-icons/bs";


export default function PharmacyHero() {
  return (
    <div className="w-full pt-[72px]">
      <div className="flex justify-center items-center relative">
        <img className="rounded-2xl w-[90%]" src="/images/cyan-bg.png"/>
        <div className=" inner-content flex   absolute w-[86%] h-[80%] ">

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

            <div className="outer-right">
              <div className="user-box">
                <div className="images-box flex absolute">
                  <img src="/images/user pics/user1.png" alt="Image not available" />
                  <img src="/images/user pics/user1.png" alt="Image not available" />
                  <img src="/images/user pics/user1.png" alt="Image not available" />
                  <img src="/images/user pics/user1.png" alt="Image not available" />

                </div>

                <div className="user-text">
                  <p></p>
                </div>
              </div>
            </div>


          </div>


        </div>
      </div>

    </div>
  )
}


// https://chatgpt.com/c/692f0b1d-7970-8331-a1ff-7e31cf9e913b
