import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";

import { Pie } from "react-chartjs-2";

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
);

function DashboardChart({ total, critical }) {
  const data = {
    labels: ["Healthy", "Critical"],

    datasets: [
      {
        data: [total - critical, critical],
        backgroundColor: [
          "#4CAF50",
          "#F44336",
        ],
      },
    ],
  };

  return (
    <div
      style={{
        width: "350px",
        marginTop: "30px",
      }}
    >
      <h2>Resident Health Overview</h2>

      <Pie data={data} />
    </div>
  );
}

export default DashboardChart;