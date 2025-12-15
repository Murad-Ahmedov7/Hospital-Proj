import { FaHeartPulse } from "react-icons/fa6";
import { GiStethoscope } from "react-icons/gi";
import { WiThermometer } from "react-icons/wi";
import { FaBalanceScale, FaLungs, FaRegHeart } from "react-icons/fa";
import { RiShoppingBasketLine } from "react-icons/ri";
import { FcDepartment } from "react-icons/fc";

import { FaUserDoctor } from "react-icons/fa6";

import { TbPackage } from "react-icons/tb";


import { MdOutlineIntegrationInstructions } from "react-icons/md";

import { FcFaq } from "react-icons/fc";

export const slides = [
  { id: 1, src: "/images/pharmacy page/popular products/product1.png" },
  { id: 2, src: "/images/pharmacy page/popular products/product2.png" },
  { id: 3, src: "/images/pharmacy page/popular products/product3.png" },
  { id: 4, src: "/images/pharmacy page/popular products/product4.png" },
];

export const categories = [
  {
    id: 1,
    src: "/images/pharmacy page/popular categories/popular-category1.jpg",
    name: "Nutrition & Weight",
  },
  {
    id: 2,
    src: "/images/pharmacy page/popular categories/popular-category2.jpg",
    name: "Skin Essentials",
  },
  {
    id: 3,
    src: "/images/pharmacy page/popular categories/popular-category3.jpg",
    name: "Vitamins & Minerals",
  },
  {
    id: 4,
    src: "/images/pharmacy page/popular categories/popular-category4.jpg",
    name: "Cold & Flu Care",
  },
];

export const slides2 = [
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
  { id: "about-us" },
];

export const userMenuItems = [
  { id: 1, label: "Balance", icon: FaBalanceScale, link: "/my-shopping/balance" },
  { id: 2, label: "Favorites", icon: FaRegHeart, link: "/my-shopping/favorites" },
  { id: 3, label: "Basket", icon: RiShoppingBasketLine, link: "/my-shopping/basket" },
  { id: 4, label: "Compare", icon: FaBalanceScale, link: "/my-shopping/compare" },
];

export const departments = [
  {
    id: 1,
    title: "Cardiology",
    img: "/images/departments/Heart.png",
    Link: "/services/doctor/cardiology",
  },
  {
    id: 2,
    title: "Ophthalmology",
    img: "/images/departments/Eye.png",
    Link: "services/doctor",
  },
  {
    id: 3,
    title: "Pulmonary",
    img: "/images/departments/Pulmonary.png",
    Link: "services/doctor",
  },
  {
    id: 4,
    title: "Dental",
    img: "/images/departments/Dental.png",
    Link: "services/doctor",
  },
  {
    id: 5,
    title: "Diagnostics",
    img: "/images/departments/Diagnostics.png",
    Link: "services/doctor",
  },
  {
    id: 6,
    title: "For disabled",
    img: "/images/departments/For disabled.png",
    Link: "services/doctor",
  },
  {
    id: 7,
    title: "Traumotoligy",
    img: "/images/departments/Traumotoligy.png",
    Link: "services/doctor",
  },
  {
    id: 8,
    title: "Laboratory",
    img: "/images/departments/Laboratory.png",
    Link: "services/doctor",
  },
];

export const serviceList = [
  {
    img: "/images/servicess/Frame.png",
    width: "w-[100px]",
    link: "/services/doctor",
    titleKey: "services.serviceList.searchDoctor.title",
    descKey: "services.serviceList.searchDoctor.desc",
  },
  {
    img: "/images/servicess/Group.png",
    width: "w-[80px]",
    link: "/services/pharmacy",
    titleKey: "services.serviceList.onlinePharmacy.title",
    descKey: "services.serviceList.onlinePharmacy.desc",
  },
  {
    img: "/images/servicess/Frame (1).png",
    width: "w-[80px]",
    link: "/services/consultation",
    titleKey: "services.serviceList.consultation.title",
    descKey: "services.serviceList.consultation.desc",
  },
  {
    img: "/images/servicess/Frame (2).png",
    width: "w-[80px]",
    link: "/services/info",
    titleKey: "services.serviceList.detailsInfo.title",
    descKey: "services.serviceList.detailsInfo.desc",
  },
  {
    img: "/images/servicess/Frame (3).png",
    width: "w-[95px]",
    link: "/services/emergency",
    titleKey: "services.serviceList.emergencyCare.title",
    descKey: "services.serviceList.emergencyCare.desc",
  },
  {
    img: "/images/servicess/Frame (4).png",
    width: "w-[80px]",
    link: "/services/tracking",
    titleKey: "services.serviceList.tracking.title",
    descKey: "services.serviceList.tracking.desc",
  },
];



export const detailsInfoCards = [
  {
    id: 1,
    icon: FcDepartment,
    title: "Department",
    desc:
      "Get a quick insight into our department, including services offered, doctor profiles, and patient guidance.",
    buttonText: "View",
    link: "/services/info/overview",
  },
  {
    id: 2,
    icon:FaUserDoctor,
    title: "Doctors",
    desc:
      "Explore our doctors’ profiles, specialties, and availability to find the right care for you.",
    buttonText: "View",
    link: "/services/info/doctors",
  },
  {
    id: 3,
    icon: TbPackage,
    title: "Services & Packages",
    //  title: "Services & Packages",
    desc:
      "Browse available medical services and treatment packages tailored to your needs.",
    buttonText: "View",
    link: "/services/info/services",
  },
  {
    id: 4,
    icon: MdOutlineIntegrationInstructions,
    title: "Instructions",
    desc:
      "Learn how to prepare for your visit with clear patient instructions and guidelines.",
    buttonText: "View",
    link: "/services/info/instructions",
  },
  {
    id: 5,
    icon: FcFaq,
    title: "FAQ & Contact",
    desc:
      "Find answers to common questions and get in touch with our support team easily.",
    buttonText: "View",
    link: "/services/info/faq",
  },
];