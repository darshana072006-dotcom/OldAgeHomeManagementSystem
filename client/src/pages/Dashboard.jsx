import CustomModal from "../components/CustomModal";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "../styles/Dashboard.css";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const COLORS = ["#4CAF50", "#F44336", "#FFC107"];

function Dashboard() {
  const navigate = useNavigate();
  const [showLogoutModal, setShowLogoutModal] = useState(false);

  const [dashboard, setDashboard] = useState({
  totalResidents: 0,
  criticalCases: 0,
  appointments: 0,
  medicines: 0,
});
  const [data, setData] = useState([]);

  useEffect(() => {
  fetchDashboard();
}, []);

const fetchDashboard = async () => {
  try {
    const res = await axios.get("http://localhost:5000/api/dashboard");

    setDashboard(res.data.data);

    setData([
      {
        name: "Healthy",
        value:
          res.data.data.totalResidents -
          res.data.data.criticalCases,
      },
      {
        name: "Critical",
        value: res.data.data.criticalCases,
      },
      {
        name: "Appointments",
        value: res.data.data.appointments,
      },
    ]);
  } catch (err) {
    console.log(err);
  }
};

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h2>🏡 SeniorCare</h2>

        <ul>
          <li onClick={() => navigate("/dashboard")}>🏠 Dashboard</li>
          <li onClick={() => navigate("/residents")}>👴 Residents</li>
          <li onClick={() => navigate("/health-records")}>❤️ Health Records</li>
          <li onClick={() => navigate("/medical-history")}>📋 Medical History</li>
          <li onClick={() => navigate("/medicines")}>💊 Medicines</li>
          <li onClick={() => navigate("/appointments")}>📅 Appointments</li>
          <li onClick={() => navigate("/staff")}>👨‍⚕️ Staff</li>
          <li onClick={() => navigate("/reports")}>📄 Reports</li>
          <li onClick={() => navigate("/settings")}>⚙️ Settings</li>
          <li onClick={() => setShowLogoutModal(true)}>
  🚪 Logout
</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="header">
          <h1>SeniorCare Admin Dashboard</h1>

          <div className="admin-info">
            🔔 Admin
          </div>
        </div>

        {/* Cards */}
<div className="cards">

  <div
    className="card"
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/residents")}
  >
    <h3>Total Residents</h3>
    <h1>{dashboard.totalResidents}</h1>
  </div>

  <div
    className="card"
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/health-records")}
  >
    <h3>Critical Cases</h3>
    <h1>{dashboard.criticalCases}</h1>
  </div>

  <div
    className="card"
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/appointments")}
  >
    <h3>Appointments</h3>
    <h1>{dashboard.appointments}</h1>
  </div>

  <div
    className="card"
    style={{ cursor: "pointer" }}
    onClick={() => navigate("/medicines")}
  >
    <h3>Medicines Today</h3>
    <h1>{dashboard.medicines}</h1>
  </div>

</div>

        {/* Quick Actions */}
        <div className="quick-actions">

          <button onClick={() => navigate("/add-resident")}>
            Add Resident
          </button>

          <button onClick={() => navigate("/health-records")}>
            Health Records
          </button>

          <button onClick={() => navigate("/appointments")}>
            Appointments
          </button>

          <button onClick={() => navigate("/reports")}>
            Generate Report
          </button>

        </div>

        {/* Pie Chart */}
        <div className="chart-card">

          <h2>Residents Health Status</h2>

          <ResponsiveContainer width="100%" height={350}>
            <PieChart>

              <Pie
                data={data}
                cx="50%"
                cy="50%"
                outerRadius={110}
                dataKey="value"
                label
              >
                {data.map((entry, index) => (
                  <Cell
                    key={index}
                    fill={COLORS[index]}
                  />
                ))}
              </Pie>

              <Tooltip />
              <Legend />

            </PieChart>
          </ResponsiveContainer>

        </div>
        <footer className="footer">
  © 2026 Old Age Home Management System | Developed by Darshana R
</footer>

      </div>
       <CustomModal
        show={showLogoutModal}
        message="Are you sure you want to logout?"
        onConfirm={() => {
          setShowLogoutModal(false);
          navigate("/");
        }}
        onCancel={() => setShowLogoutModal(false)}
      />
    </div>
    
  );
}

export default Dashboard;