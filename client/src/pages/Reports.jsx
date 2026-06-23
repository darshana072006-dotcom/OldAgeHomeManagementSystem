import { useEffect, useState } from "react";
import axios from "axios";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

function Reports() {
  const [residents, setResidents] = useState([]);

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/residents"
      );

      setResidents(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const downloadPDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text("Old Age Home Management System", 14, 20);

    doc.setFontSize(12);
    doc.text("Resident Report", 14, 30);

    autoTable(doc, {
      startY: 40,
      head: [[
        "Name",
        "Age",
        "Gender",
        "Blood Group",
        "Phone",
        "Health Status",
      ]],
      body: residents.map((resident) => [
        resident.fullName,
        resident.age,
        resident.gender,
        resident.bloodGroup,
        resident.phone,
        resident.healthStatus,
      ]),
    });

    doc.save("Resident_Report.pdf");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Resident Reports</h1>

      <button
        onClick={downloadPDF}
        style={{
          padding: "10px 20px",
          background: "#8B5E3C",
          color: "white",
          border: "none",
          borderRadius: "6px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        Download PDF
      </button>

      <table border="1" cellPadding="10">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Phone</th>
            <th>Health Status</th>
          </tr>
        </thead>

        <tbody>
          {residents.map((resident) => (
            <tr key={resident._id}>
              <td>{resident.fullName}</td>
              <td>{resident.age}</td>
              <td>{resident.gender}</td>
              <td>{resident.bloodGroup}</td>
              <td>{resident.phone}</td>
              <td>{resident.healthStatus}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Reports;