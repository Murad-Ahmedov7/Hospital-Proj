<div className="max-w-3xl relative overflow-hidden">
  <div
    className="flex transition-transform duration-500 ease-out"
    style={{ transform: `translateX(-${curr * 100}%)` }}
  >
    {slides.map((s,index) => (
      <img key={index} src={s} alt="Image not available" className="w-full flex-shrink-0" />
    ))}
  </div>
  
  {/* Buttons */}
  <div className="flex absolute top-1/2 left-0 right-0 justify-between px-4 -translate-y-1/2">
    <button onClick={prev} className="bg-white/80 shadow rounded-full p-2 hover:bg-white">
      <ChevronLeft size={40}/>
    </button>
    <button onClick={next} className="bg-white/80 shadow rounded-full p-2 hover:bg-white">
      <ChevronRight size={40}/>
    </button>
  </div>
</div>
