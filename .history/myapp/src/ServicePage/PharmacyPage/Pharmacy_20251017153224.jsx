

export default function Pharmacy() {

  const slides=[
    "/images/pexels-christian-heitz-285904-842711.jpg",
    "/images/pexels-photo-691668.jpeg",
    "/images/pexels-photo-1525041.jpeg",
  ]
  return (
    <div className="max-w-3xl over">
      <div className="flex">
           {
        slides.map((s)=>(
          <img src={s} alt="Image not available" />
        ))
      }
      </div>  
    </div>
  );
}
