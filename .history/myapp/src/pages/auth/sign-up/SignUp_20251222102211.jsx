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

      {/* Content */}
      <div className="relative z-10 flex justify-end min-h-screen pt-[70px]">
        <div className="w-[600px] px-10 py-12 text-white flex flex-col gap-6">

          <h1 className="text-3xl font-bold">Create an account</h1>
          <p className="text-white/80">
            Fill in the information below to get started
          </p>

          {/* Full Name */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/90">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="px-4 py-3 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Username */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/90">Username</label>
            <input
              type="text"
              placeholder="Choose a username"
              className="px-4 py-3 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1">
            <label className="text-sm text-white/90">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="px-4 py-3 rounded-lg bg-white/90 text-black focus:outline-none focus:ring-2 focus:ring-cyan-400"
            />
          </div>

          {/* Submit */}
          <button
            className="mt-4 bg-cyan-500 hover:bg-cyan-600 transition-colors text-white py-3 rounded-lg font-semibold"
          >
            Sign Up
          </button>

        </div>
      </div>

    </div>
  );
}
