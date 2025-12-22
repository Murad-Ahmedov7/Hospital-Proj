export default function SignUp() {
  return (
    <div className="relative w-screen min-h-screen overflow-hidden">
      
      {/* Background image */}
      <img
        src="/images/hospital-health-care-concept-image.jpg"
        alt="Hospital background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Right cyan panel */}
      <img
        src="/images/cyan-bg.jpg"
        alt="Cyan background"
        className="absolute right-0 top-0 h-full w-[600px]  opacity-80 object-cover"
      />



    </div>
  );
}
