import React from "react";

// <table> → table container

// <thead> → başlıq sətiri

// <tbody> → məlumat sətirləri

// <tr> → bir sətir

// <th> → header hüceyrəsi

// <td> → data hüceyrəsi

export default function DoctorTable() {
  return (
    <div className="min-h-screen pt-[72px]">
      <table>
        <thead>
          <tr>
            <th className="border p-2">Day</th>
            <th className="border p-2">Month</th>
            <th className="border p-2">Year</th>
            <th className="border p-2">Hour</th>
          </tr>
        </thead>

         <tbody>
    {dates.map((date, idx) => (
      <tr key={idx} className="hover:bg-gray-100">
        <td className="border p-2 text-center">{date.getDate()}</td>
        <td className="border p-2 text-center">{date.getMonth() + 1}</td>
        <td className="border p-2 text-center">{date.getFullYear()}</td>
        <td className="border p-2 text-center">{date.getHours()}</td>
      </tr>
    ))}
  </tbody>
  
      </table>
    </div>
  );
}
