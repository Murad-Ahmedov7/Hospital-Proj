
import { BsCircleFill } from "react-icons/bs";


export default function PharmacyHero() {
  return (
    <div className="w-full pt-[72px]">
      <div className="flex justify-center items-center relative">
        <img className="rounded-2xl w-[90%]" src="/images/cyan-bg.png"/>
        <div className=" inner-content flex justify-center  min-w-[1400px] absolute w-[50%] h-[50%] ">

          <div className="row min-w-[1400px]">
            <div className="outer-left max-w-[600px]">

              <div className="inner-left min-h-[400px] min-w-[1100px] flex flex-col">

                <ul className="list-unstyled  flex items-center justify-center border-1 border-cyan-400 bg-cyan-300/30  rounded-2xl gap-4 w-[230px] py-1 ">

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

                <p className="text-8xl w-[900px] mt-7 text-white font-oswald  font-bold">Instant Pharmacy Access For You </p>
                
                

              </div>
            
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}


// https://chatgpt.com/c/692f0b1d-7970-8331-a1ff-7e31cf9e913b
