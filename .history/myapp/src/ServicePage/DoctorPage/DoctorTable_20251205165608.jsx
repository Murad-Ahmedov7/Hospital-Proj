export default function DoctorTableGrid() {
  const dates = [
    "05 December",
    "06 December",
    "07 December",
    "08 December",
    "09 December",
    "10 December",
  ];

  const times = [
    "09:00",
    "10:00",
    "11:00",
    "12:00",
    "14:00",
    "15:00",
    "16:00",
    "17:00",
  ];

  return (
    <div className="flex justify-center items-start min-h-screen w-full pt-[72px] overflow-auto p-4">
      <div className="inline-grid border border-gray-300">
        {/* Başlıq */}
        <div className="grid grid-cols-[100px_repeat(6,1fr)] bg-[#3AA6B9] text-white font-bold">
          <div className="border p-2"></div>
          {dates.map((date) => (
            <div key={date} className="border p-2 text-center">
              {date}
            </div>
          ))}
        </div>

        {/* Data */}
        {times.map((time) => (
          <div key={time} className="grid grid-cols-[100px_repeat(6,1fr)] hover:bg-gray-100">
            {/* Time sütunu */}
            <div className="border p-2 text-center h-[60px] font-bold">
              {time}
            </div>

            {/* Data hüceyrələri */}
            {dates.map((date, idx) => (
              <div key={idx} className="border p-2 text-center h-[90px]">
                data
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
