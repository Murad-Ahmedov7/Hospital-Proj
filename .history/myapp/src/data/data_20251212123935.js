import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi"; 
import { FaLungs } from "react-icons/fa";
  
  
  
  export const slides = [
    { id: 1, src: "/images/popular products/product1.png" },
    { id: 2, src: "/images/popular products/product2.png" },
    { id: 3, src: "/images/popular products/product3.png" },
    { id: 4, src: "/images/popular products/product4.png" },
  ];

   export const categories=[
    { id: 1, src: "/images/popular categories/popular-category1.jpg",name:"Nutrition & Weight" },
    { id: 2, src: "/images/popular categories/popular-category2.jpg",name:"Skin Essentials" },
    { id: 3, src: "/images/popular categories/popular-category3.jpg",name:"Vitamins & Minerals" },
    { id: 4, src: "/images/popular categories/popular-category4.jpg",name:"Cold & Flu Care" },

  ]

  export const  slides2 = [
      { id: 1, src: "/images/popular products/product1.png" },
      { id: 2, src: "/images/popular products/product2.png" },
      { id: 3, src: "/images/popular products/product3.png" },
      { id: 4, src: "/images/popular products/product4.png" },
      { id: 5, src: "/images/popular products/product5.png" },
      { id: 6, src: "/images/popular products/product6.png" },
      { id: 7, src: "/images/popular products/product7.png" },
      { id: 8, src: "/images/popular products/product8.png" },
      { id: 9, src: "/images/popular products/product9.png" },
    ];



  
export const vitalsData = [
  {
    id: 1,
    title: "Heart Rate",
    value: "72 bpm",
    Icon: FaHeartPulse, 
    bgColor: "bg-cyan-400/20",
  },
  {
    id: 2,
    title: "Blood Pressure",
    value: "120/80 mmHg",
    Icon: GiStethoscope,
    bgColor: "bg-green-400/20",
  },
  {
    id: 3,
    title: "Oxygen Level",
    value: "98%",
    Icon: FaHeartPulse,
    bgColor: "bg-purple-400/20",
  },
  {
    id: 4,
    title: "Temperature",
    value: "36.8 °C",
    Icon: WiThermometer,
    bgColor: "bg-red-400/20",
  },
  {
    id: 5,
    title: "Respiratory Rate",
    value: "16 breaths/min",
    Icon: FaLungs,
    bgColor: "bg-green-600/20",
  },
];


export const medicinesData = [
  {
    id: 1,
    name: "Paracetamol",
    dose: "500 mg",
    borderColor: "border-blue-400",
    morning: true,
    day: false,
    night: true,
  },
  {
    id: 2,
    name: "Ibuprofen",
    dose: "200 mg",
    borderColor: "border-purple-400",
    morning: true,
    day: true,
    night: false,
  },
  {
    id: 3,
    name: "Amoxicillin",
    dose: "250 mg",
    borderColor: "border-green-400",
    morning: true,
    day: true,
    night: true,
  },
  {
    id: 4,
    name: "Insulin",
    dose: "10 units",
    borderColor: "border-blue-400",
    morning: false,
    day: true,
    night: true,
  },
  {
    id: 5,
    name: "Omeprazole",
    dose: "20 mg",
    borderColor: "border-purple-400",
    morning: true,
    day: false,
    night: false,
  },
];


export const navbarLinks = [
  { id: "home" },
  { id: "services" },
  // { id: "apps" },
  { id: "testimonials" },
  { id: "about-us" }
];