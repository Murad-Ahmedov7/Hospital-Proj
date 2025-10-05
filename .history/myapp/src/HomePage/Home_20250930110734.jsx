import Navbar from "./Navbar";

export default function Home() {

    return (
        <div className=" min-h-screen ">
            <Navbar />

            <div className="flex justify-between w-[84%]">
                <div className=" flex flex-col mt-35 font-bold font-mulish ml-[10%] h-[270px]   justify-between">
                    <p className="text-[clamp(1rem,calc(0.5965rem+1.5863vw),2.5rem)] w-[300px]">
                        Virtual healthcare for you
                    </p>
                    <p className=" w-70 font-mulish text-[#7D7987] mr-12 [clamp(1.5625rem,calc (1.3158rem + 0.9868vw, 2.5rem);">
                        Trafalgar provides progressive, and affordable
                        healthcare, accessible on mobile and online
                        for everyone
                    </p>
                    <button className="w-[200px]   rounded-3xl text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium  text-sm px-5 py-2.5 text-center me-2 mb-2 ">Consult Today</button>
                </div>
                <img className="w-[500px] h-[450px] mt-10" src="/images/trafalgar-header illustration 1.png" alt="Picture not found " />
            </div>


        </div>

    )
}

//min h max h h -scren lere bax

//block ve inline ve block inline oyren


//sekli positon abslotue ile et ve ya basqa usl iles