
import { IoMdChatboxes} from "react-icons/io";
import { FaPhoneAlt } from "react-icons/fa";
import { IoLocationOutline } from "react-icons/io5";
import { useForm } from "react-hook-form";

export default function Consultation() {

  const{ register , handleSubmit , formState : {errors} } = useForm();

  // const onSubmit = (data) => {
  //   console.log(data);
  // };
  return (
    <div className="relative w-screen min-h-screen  pt-10">
      <img
        src="/images/consultation.jpg"
        alt="This picture is not found"
        className="object-cover w-full h-full absolute inset-0"
      />
      <div className="absolute inset-0 bg-black/75"></div>

      <div className=" flex  justify-center  absolute    w-screen h-[700px] mt-20 overflow-hidden">


        <div className=" bg-white w-[558px] h-[812px] "> {/* umumi col div */}

          <div className="flex flex-col pl-10 gap-7">       {/* umumi content ici div */}
            
            <div className=" w-full  pt-10  ">
            <p className="text-black text-[25px] font-bold">Fix An Appointment</p>
          </div>

           <div className="border-1 border-[#14c9e0] bg-[#07afc5] w-12 h-[3px]"></div>

           <form>
            <div className="flex gap-4">

              <div className="flex flex-col gap-3">
              <label className="font-semibold">NAME</label>
              <input type="text" placeholder="Your Name"></input>
              </div>

              <div>
                   <label className="font-semibold">EMAIL ADDRESS</label>
              <input type="email" placeholder="Your Email"></input>
              </div>
           
            </div>
           </form>


          </div> 
        
        </div>



        <div className="bg-[#424242] w-[372px] h-[812px] "> {/* umumi col div */}

          <div className="flex flex-col pl-10 gap-7">  {/* umumi content ici div */}



            <div className=" w-full  pt-10  ">
            <p className="text-white text-[25px] font-bold">Contact Info</p>
            </div>

            <div className="border-1 border-[#14c9e0] bg-[#07afc5] w-12 h-[3px]"></div>


          <div className=" w-full h-12  ">
            <button className=" bg-cyan-500 w-60 h-12  rounded-[10px] flex items-center justify-center gap-3 hover:bg-blue-900   transition duration-1000 ease-in-out  ">
              <p className=" text-gray-100 font-semibold ">
                Talk to a consultant
              </p>
              <IoMdChatboxes size={17} color="white" />
            </button>
          </div>

            <p className="text-[15px] font-bold text-white">Need to discuss before treatment?</p>

            <div className="flex flex-col gap-10">

              <div className="flex gap-5 ">
              <FaPhoneAlt  size={20} color="#07afc5"  />
              <div className=" border-[#14c9e0] border-l-1  w-12 h-[50px] -mt-1"></div>
              <div className="text-white font-bold">
                     <p>055-342-34-12</p>
                    <p>(012)-888-122</p>  
              </div>


              </div>

              <div className="flex gap-3   ">
                 <IoLocationOutline  size={28} color="#07afc5"    />
                  <div className=" border-[#14c9e0] border-l-1  w-12 h-[50px] -mt-1 "></div>

                   <div className="text-white font-bold ml-2">
                     <p>3524 Deerfield Drive</p>
                     <p>Valdosta GA 31601</p>  
              </div>
              </div>




            </div>

              <p className="text-white font-bold">lOREM IPUSM NESE YAZ SIPSUM</p>

          </div>
        
        
        
        
        </div>


      </div>
    </div>
  );
}
