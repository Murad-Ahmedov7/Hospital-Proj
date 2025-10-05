import Navbar from "./Navbar";

export default function Home() {

    return (
        <div className=" min-h-screen">
            <Navbar/>
            <div className=" flex flex-col mt-5 font-semibold font-mulish ml-auto gap-3">
            <p className="text-[clamp(1rem,calc(0.5965rem+1.5863vw),2.5rem)] w-[300px]">
                Virtual healthcare for you
            </p>
            <p className="w-70 font-mulish text-[#7D7987] mr-12">
                Trafalgar provides progressive, and affordable 
                healthcare, accessible on mobile and online 
                for everyone
            </p>
            </div>
        </div>
        // font-size: ;
    )
}

//min h max h h -scren lere bax