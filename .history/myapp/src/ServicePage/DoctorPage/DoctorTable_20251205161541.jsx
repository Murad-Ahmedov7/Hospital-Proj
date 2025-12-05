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
    <div className="flex justify-center items-start min-h-screen w-full pt-[72px] overflow-auto">
      <div className="grid gap-1 border border-gray-300">
        {/* Başlıq */}
        <div className="grid grid-cols-[100px_repeat(6,1fr)] bg-blue-400 text-white font-bold">
          <div></div>
          {dates.map((date) => (
            <div key={date} className="p-2 text-center border">
              {date}
            </div>
          ))}
        </div>

        {/* Data */}
        {times.map((time) => (
          <div key={time} className="grid grid-cols-[100px_repeat(6,1fr)] hover:bg-gray-100">
            <div className="border p-2 text-center h-[60px]">{time}</div>
            {dates.map((date) => (
              <div key={date} className="border p-2 text-center h-[40px]">
                data
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
