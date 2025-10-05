import Navbar from "./Navbar";

export default function Home() {

    return (
        <div className=" min-h-screen">
            <Navbar/>
            <div className=" flex flex-col mt-5 font-semibold font-mulish ml-[30%] gap-6 justify-center
            ">
            <p className="text-[clamp(1rem,calc(0.5965rem+1.5863vw),2.5rem)] w-[300px]">
                Virtual healthcare for you
            </p>
            <p className="w-70 font-mulish text-[#7D7987] mr-12">
                Trafalgar provides progressive, and affordable 
                healthcare, accessible on mobile and online 
                for everyone
            </p>
            <button className="w-[400px]  ml-[-150px]  text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 ">Consult Today</button>
            <button type="button" class="">Teal</button>

            </div>
        </div>
        // font-size: ;
    )
}

//min h max h h -scren lere bax

//block ve inline ve block inline oyren