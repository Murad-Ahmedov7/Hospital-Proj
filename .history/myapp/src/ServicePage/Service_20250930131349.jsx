import React from "react";

export default function FindDoctor() {
  return (
    <div id="find-doctor" className="min-h-screen flex flex-col items-center justify-center bg-gray-50 py-20">
      <h2 className="text-3xl font-bold mb-6">Find a Doctor</h2>
      <p className="text-gray-600 text-center max-w-xl mb-10">
        Search and connect with professional healthcare providers quickly and easily.  
        Accessible on mobile and online for everyone.
      </p>

      {/* Simple input + button */}
      <div className="flex flex-col sm:flex-row gap-4 w-[90%] max-w-xl">
        <input
          type="text"
          placeholder="Search by specialty or name"
          className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400"
        />
        <button className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-600 transition-colors">
          Search
        </button>
      </div>
    </div>
  );
}
