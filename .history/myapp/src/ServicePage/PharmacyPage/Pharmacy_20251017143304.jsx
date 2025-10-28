import { Carousel } from "flowbite-react";  
export default function Pharmacy(){
    return(
        <div className="h-56 sm:h-34 xl:h-30 2xl:h-50">
      <Carousel>
        <img src="https://flowbite.com/docs/images/carousel/carousel-1.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-2.svg" alt="..." />
        <img src="https://flowbite.com/docs/images/carousel/carousel-3.svg" alt="..." />
      </Carousel>
    </div>
    )
}