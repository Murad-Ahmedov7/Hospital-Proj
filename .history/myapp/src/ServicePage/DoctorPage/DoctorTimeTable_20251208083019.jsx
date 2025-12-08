export default function DoctorTimeTable() {
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
      <table className="w-[80vw] border border-gray-300">
        <thead>
          <tr>
            <th className="border p-2 "></th>
            {dates.map((date) => (
              <th key={date} className="border p-2  bg-[#3AA6B9] ">
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>

          <tr>
            <td className="border p-2 text-center h-[101px]">09:00</td>

            <td className="border p-2 text-center " rowSpan={2}>
              data
            </td>

          </tr>
            
          <tr>
            <td className="border p-2 text-center h-[101px]">10:00</td>
            
     
          </tr>

          <tr>
            <td className="border p-2 text-center h-[101px]">12:00</td>
          </tr>

          <tr>
            <td className="border p-2 text-center h-[101px]">13:00</td>
          </tr>

          <tr>
            <td className="border p-2 text-center h-[101px]">15:00</td>
          </tr>

          <tr>
            <td className="border p-2 text-center h-[101px]">16:00</td>
          </tr>

          <tr>
            <td className="border p-2 text-center h-[101px]">17:00</td>
          </tr>
        
        
        </tbody>

      </table>
    </div>
  );
}

//  {times.map((time) => (
//     <tr key={time} className="hover:bg-gray-100">
//       {/* Time sütunu hündürlük 60px */}
//       <td className="border p-2 text-center ">{time}</td>

//       {/* Digər data hüceyrələri default hündürlük */}
//       {/* {dates.map((_, idx) => (
//         <td key={idx} className="border p-2 text-center">

//         </td>
//       ))} */}
//       <td className="border p-2 text-center ">adsadsa</td>
//     </tr>
//   ))}
