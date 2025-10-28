import { Carousel } from "flowbite-react";  
export default function Pharmacy(){
    return(
<div className="w-full md:w-3/4 mx-auto mt-10">
      <Carousel slideInterval={3000}> {/* 3 saniyədən bir dəyişəcək */}
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
          alt="Slide 1"
          className="rounded-lg"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
          alt="Slide 2"
          className="rounded-lg"
        />
        <img
          src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
          alt="Slide 3"
          className="rounded-lg"
        />
      </Carousel>
    </div>
    )
}