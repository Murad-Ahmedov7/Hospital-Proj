import React from "react";

// <table> → table container

// <thead> → başlıq sətiri

// <tbody> → məlumat sətirləri

// <tr> → bir sətir

// <th> → header hüceyrəsi

// <td> → data hüceyrəsi

export default function DoctorTable() {
  return (
    <div className=" flex items-center justify-center min-h-screen w-full  pt-[72px] ">
      <table>
        <thead>
          <tr>
            <th className="bg-blue-400 border p-2"></th>
            <th className="border p-2">05December</th>
            <th className="border p-2">06December</th>
            <th className="border p-2">07December</th>
            <th className="border p-2">08December</th>
            <th className="border p-2">09December</th>
            <th className="border p-2">10December</th>

          </tr>
        </thead>

        <tbody>
          
          <tr className="hover:bg-gray-100">
            
            <td className="border p-2 text-center">09:00</td>
            <td className="border p-2 text-center">10:00</td>
            <td className="border p-2 text-center">11:00</td>
            <td className="border p-2 text-center">12:00</td>
            <td className="border p-2 text-center">13:00</td>
            <td className="border p-2 text-center">14:00</td>
            <td className="border p-2 text-center">15:00</td>



          </tr>

         <tr className="hover:bg-gray-100">
                 <td></td>
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
