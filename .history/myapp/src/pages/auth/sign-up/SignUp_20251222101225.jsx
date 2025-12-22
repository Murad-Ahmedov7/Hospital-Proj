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
        className="absolute right-0 top-0 h-full w-[600px] object-cover opacity-80"
      />

      {/* Content area */}
      <div className="relative z-10 flex justify-end min-h-screen pt-[70px]">
        <div className="w-[600px] px-10 py-12 text-white">
          <h1 className="text-3xl font-bold mb-4">Create an account</h1>
          <p className="text-white/80 mb-8">
            Sign up to access SmartTour services
          </p>

          {/* buraya form gələcək */}
        </div>
      </div>

    </div>
  );
}
