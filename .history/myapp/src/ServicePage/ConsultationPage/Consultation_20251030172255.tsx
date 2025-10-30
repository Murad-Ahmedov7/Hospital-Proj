
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
    <div className="relative w-screen min-h-screen flex items-center justify-center  overflow-hidden r  pb-4">
      <img
        src="/images/consultation.jpg"
        alt="This picture is not found"
        className="object-cover w-full h-full absolute inset-0"
      />
          <div className="absolute inset-0 bg-black/75"></div>

      <div className=" flex  justify-center   absolute    w-screen h-[640px] mt-20 overflow-hidden">


        <div className=" bg-white w-[658px] h-[812px] "> {/* umumi col div */}

          <div className="flex flex-col pl-10 gap-7">       {/* umumi content ici div */}
            
            <div className=" w-full  pt-10  ">
            <p className="text-black text-[25px] font-bold">Fix An Appointment</p>
          </div>

           <div className="border-1 border-[#14c9e0] bg-[#07afc5] w-12 h-[3px]"></div>

           <form>

        <div className="flex flex-col gap-6">
            
              <div className="flex gap-20">

              <div className="flex flex-col gap-2">
              <label className="font-semibold">NAME</label>
              <input className="border-b-1 border-gray-300  py-2 w-[240px]  outline-none  text-[#b4aab4]  focus:border-teal-500 focus:border-b-2 transition-all" type="text" placeholder="Your Name"></input>
              
              </div>

        
              <div className="flex flex-col gap-2">
              <label className="font-semibold">EMAIL ADDRESS</label>
              <input className="border-b-1 border-gray-300  py-2 w-[240px]  outline-none  text-[#b4aab4]   focus:border-teal-500 focus:border-b-2 transition-all" type="email" placeholder="Your Email"></input>                 
              </div>
                   
           
            </div>

            <div className="flex gap-20">

              <div className="flex flex-col gap-1">
              <label className="font-semibold">PHONE</label>
              <input type='text' className="border-b-1 border-gray-300 text-[#b4aab4]   py-2 w-[240px]   outline-none focus:border-teal-500 focus:border-b-2 transition-all" placeholder="Your Phone"></input>
              </div>

        
              <div className="flex flex-col gap-2">
              <label className="font-semibold">TYPE OF SERVICES</label>
                <select className="border-b-1 border-gray-300  text-[#b4aab4]   py-2 w-[240px]  outline-none">
              <option value="">Any Service</option>
              <option value="null1">Null1</option>
              <option value="null2">Null2</option>
              <option value="null3">Null3</option>
              <option value="null4">Null4</option>  {/*optiona hover ver */}
                </select>
              </div>

              
                   
           
            </div>


              <div className="flex gap-20">

              <div className="flex flex-col gap-2">
              <label className="font-semibold">STAFF</label>
            <select className="border-b-1 border-gray-300  py-2 w-[240px]  outline-none text-[#b4aab4]">
              <option value="">Select</option>
              <option value="null1">Null1</option>
              <option value="null2">Null2</option>
              <option value="null3">Null3</option>
              <option value="null4">Null4</option>  {/*optiona hover ver */}
                </select>
              
              </div>

        
              <div className="flex flex-col gap-2">
              <label className="font-semibold">Date</label>
              <input className="border-b-1 border-gray-300  py-2 w-[240px]  outline-none focus:border-teal-500 focus:border-b-2 transition-all text-[#b4aab4]" type="text" placeholder="Date cedveli yarat "></input>
             
                   
              </div>

              
                   
           
            </div>

                <div className="flex gap-20">

              <div className="flex flex-col gap-1">
              <label className="font-semibold">MESSAGE</label>
              <input type='text' className="border-b-1 border-gray-300 text-[#b4aab4]   py-23 w-[240px]   outline-none focus:border-teal-500 focus:border-b-2 transition-all" placeholder="Your Phone"></input>
              </div>

        


              
                   
           
            </div>





        </div>

           </form>


          </div> 
        
        </div>



        <div className="bg-[#424242] w-[412px] h-[812px] "> {/* umumi col div */}

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



// https://preview.themeforest.net/item/psychiatrist-medical-wordpress-theme/full_screen_preview/20068368

// https://react-icons.github.io/react-icons/search/#q=location


// https://chatgpt.com/c/6900739b-bc14-8329-bac4-e0ef6c7d4aa0 is kompu

// https://chatgpt.com/c/690074ed-6980-8327-a93b-b992a2cf9142 funksionalliq haqqinda consultionunun