export default function DoctorTable() {
  const dates = [
    "05December",
    "06December",
    "07December",
    "08December",
    "09December",
    "10December",
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
      <table className="table-auto  border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2"></th>
            {dates.map((_,idx) => (
              <th key={date} className="border p-2">
                {date}
              </th>
            ))}
          </tr>
        </thead>



        <tbody>
          {times.map((time) => (
            <tr key={time} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{time}</td>
              {dates.map((_, idx) => (
                <td key={idx} className="border p-2 text-center">
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
