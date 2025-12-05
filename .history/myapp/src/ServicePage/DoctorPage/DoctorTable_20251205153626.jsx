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
          <tr  className="hover:bg-gray-100">
            <td className="border p-2 text-center">data 1</td>
            <td className="border p-2 text-center">data2</td>
            <td className="border p-2 text-center">data3</td>
            <td className="border p-2 text-center">data4</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
