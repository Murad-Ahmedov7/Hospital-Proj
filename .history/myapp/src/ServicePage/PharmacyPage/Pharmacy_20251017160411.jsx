import { ChevronLeft, ChevronRight } from "react-feather";
export default function Pharmacy() {
  const slides = [
    "/images/pexels-christian-heitz-285904-842711.jpg",
    "/images/pexels-photo-691668.jpeg",
    "/images/pexels-photo-1525041.jpeg",
  ];
  return (
    <div className="max-w-3xl  relative flex">
      {slides.map((s) => (
        <img src={s} alt="Image not available" />
      ))}
      <div className="flex absolute">
        <button>
          <ChevronLeft size={140} />
        </button>
        <button>
          <ChevronRight size={140} />
        </button>
      </div>
    </div>
  );
}
