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
      </table>
    </div>
  );
}
