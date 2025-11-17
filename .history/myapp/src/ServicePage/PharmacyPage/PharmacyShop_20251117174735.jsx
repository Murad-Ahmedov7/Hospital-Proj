import React from 'react'

export default function PharmacyShop() {
import { useState, useEffect } from "react";

function PriceCard({ price }) {
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animasiya müddəti ms ilə
    const increment = price / (duration / 30); // hər 30ms-də artım
    const interval = setInterval(() => {
      start += increment;
      if (start >= price) {
        start = price;
        clearInterval(interval);
      }
      setDisplayPrice(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="card p-4 border shadow rounded">
      <h2>Product Name</h2>
      <p className="text-xl font-bold">${displayPrice}</p>
    </div>
  );
}

;

function PriceCard({ price }) {
  const [displayPrice, setDisplayPrice] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000; // animasiya müddəti ms ilə
    const increment = price / (duration / 30); // hər 30ms-də artım
    const interval = setInterval(() => {
      start += increment;
      if (start >= price) {
        start = price;
        clearInterval(interval);
      }
      setDisplayPrice(Math.floor(start));
    }, 30);

    return () => clearInterval(interval);
  }, [price]);

  return (
    <div className="card p-4 border shadow rounded">
      <h2>Product Name</h2>
      <p className="text-xl font-bold">${displayPrice}</p>
    </div>
  );
}



}
