import { Carousel } from "flowbite-react";  
export default function Pharmacy(){
    return(
        <div className="min-h-screen min-w-screen flex items-center justify-center">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      </Carousel>
    </div>
    )
}