// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May"],
    datasets: [
      {
        label: "Heart Rate",
        data: [72, 78, 95, 110, 85],
        borderColor: "blue",
        backgroundColor: "rgba(0,0,255,0.2)",
        fill: false,
      },
      {
        label: "Blood Pressure",
        data: [120, 130, 115, 125, 118],
        borderColor: "red",
        backgroundColor: "rgba(255,0,0,0.2)",
        fill: false,
      },
      {
        label: "Pulse Pressure",
        data: [50, 55, 48, 60, 52],
        borderColor: "green",
        backgroundColor: "rgba(0,255,0,0.2)",
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "Cardio Trends" },
    },
  };

  return (
  <div style={{ width: "100px", height: "400px" }}> {/* buradan ölçünü dəyiş */}
    <Line data={data} options={options} />
  </div>
);

};

export default LineChart;
