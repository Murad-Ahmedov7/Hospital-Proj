<table className="w-[80vw] border border-gray-300">
  <thead>
    <tr>
      <th className="border p-2"></th>
      {dates.map((date) => (
        <th key={date} className="border p-2">{date}</th>
      ))}
    </tr>
  </thead>
  <tbody>
    {times.map((time) => (
      <tr key={time}>
        {/* Time hüceyrəsi */}
        <td className="border p-2 text-center h-[60px] font-bold">{time}</td>

        {/* Data hüceyrələri içində grid */}
        {dates.map((date, idx) => (
          <td key={idx} className="border p-0">
            <div className="grid grid-rows-[30px_30px]">
              <div className="border p-1 text-center">data üst</div>
              <div className="border p-1 text-center">data alt</div>
            </div>
          </td>
        ))}
      </tr>
    ))}
  </tbody>
</table>
