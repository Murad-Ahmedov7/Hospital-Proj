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

// Chart.js modulunu qeyd et
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
    labels: ["Jan", "Feb", "Mar", "Apr", "May"], // X oxu
    datasets: [
      {
        label: "Heart Rate",
        data: [72, 75, 78, 70, 74], // Y oxu
        borderColor: "blue",
        backgroundColor: "rgba(0, 0, 255, 0.2)",
      },
      {
        label: "Blood Pressure",
        data: [120, 125, 130, 118, 122],
        borderColor: "red",
        backgroundColor: "rgba(255, 0, 0, 0.2)",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Cardio Trends",
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
