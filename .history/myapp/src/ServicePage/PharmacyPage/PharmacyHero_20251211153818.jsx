
import { BsCircleFill } from "react-icons/bs";


export default function PharmacyHero() {
  return (
    <div className="w-full pt-[72px]">
      <div className="flex justify-center items-center relative">
        <img className="rounded-2xl w-[90%]" src="/images/cyan-bg.png"/>
        <div className=" inner-content flex justify-center  absolute w-[50%] h-[50%] ">

          <div className="row w-[700px]">
            <div className="outer-left max-w-[600px]">

              <div className="inner-left min-h-[400px]">

                <ul className="list-unstyled  flex items-center justify-center border-1 rounded-2xl gap-4 w-[230px] py-1 ">
                  <li className="flex items-center gap-1 text-white font-oswald">
                    <BsCircleFill color="white" size={6} />
                    Health
                  </li>
                  <li>                    <BsCircleFill color="white" size={6} />
</li>
                  <li>Online</li>
                </ul>

              </div>
            
            </div>

          </div>


        </div>
      </div>

    </div>
  )
}


// https://chatgpt.com/c/692f0b1d-7970-8331-a1ff-7e31cf9e913b
