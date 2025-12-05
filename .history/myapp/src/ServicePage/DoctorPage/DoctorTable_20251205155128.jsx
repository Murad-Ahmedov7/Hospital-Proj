import React from "react";

// <table> → table container

// <thead> → başlıq sətiri

// <tbody> → məlumat sətirləri

// <tr> → bir sətir

// <th> → header hüceyrəsi

// <td> → data hüceyrəsi

export default function DoctorTable() {
  const dates = [
    "05December",
    "06December",
    "07December",
    "08December",
    "09December",
    "10December",
  ];

  const times = ["09:00", "10:00", "11:00", "12:00", "14:00", "15:00", "16:00", "17:00"];

  return (
    <div className="flex items-center justify-center min-h-screen w-full pt-[72px]">
      <table>
        <thead>
          <tr>
            <th></th>
            {dates.map((date) => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {times.map((time) => (
            <tr key={time}>
              <td>{time}</td>
              {dates.map((_, idx) => (
                <td key={idx}>data</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
