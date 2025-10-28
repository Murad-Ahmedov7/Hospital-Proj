// src/components/PharmacyCarousel.jsx
import React from "react";
import Carousel from "react-bootstrap/Carousel"; // React Bootstrap Carousel

export default function () {
  return (
    <div className="w-full md:w-3/4 mx-auto mt-10">
      <Carousel interval={3000}>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://flowbite.com/docs/images/carousel/carousel-1.svg"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://flowbite.com/docs/images/carousel/carousel-2.svg"
            alt="Second slide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100 rounded"
            src="https://flowbite.com/docs/images/carousel/carousel-3.svg"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}
