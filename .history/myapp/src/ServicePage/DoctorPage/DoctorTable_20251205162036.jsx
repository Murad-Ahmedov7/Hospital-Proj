export default function DoctorTable() {
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
    <div className="flex items-center justify-center min-h-screen w-full pt-[72px] overflow-auto">
      <table className=" w-[80vw] border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2"></th>
            {dates.map((date) => (
              <th key={date} className="border  p-2">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time} className="hover:bg-gray-100">
              <td className="border p-2 text-center  ">{time}</td>
              {dates.map((_, idx) => (
                <td key={idx} className="border p-2 text-center max-h-[40px]">
                  data
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
