import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomModal from "../components/CustomModal";

function Residents() {
  const navigate = useNavigate();

  const [residents, setResidents] = useState([]);
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [selectedResident, setSelectedResident] = useState(null);

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

  const deleteResident = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/api/residents/${selectedResident}`
      );

      alert("Resident Deleted Successfully!");

      setShowDeleteModal(false);
      fetchResidents();
    } catch (error) {
      console.error(error);
      alert("Error deleting resident");
    }
  };

  const filteredResidents = residents.filter((resident) => {
    const matchesSearch = resident.fullName
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" ||
      resident.healthStatus === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div style={{ padding: "20px" }}>
      <h1>Residents List</h1>

      <button
        onClick={() => navigate("/add-resident")}
        style={{
          background: "#28a745",
          color: "white",
          padding: "10px 20px",
          border: "none",
          borderRadius: "5px",
          cursor: "pointer",
          marginBottom: "20px",
        }}
      >
        ➕ Add Resident
      </button>

      <div
        style={{
          display: "flex",
          gap: "15px",
          marginBottom: "20px",
        }}
      >
        <input
          type="text"
          placeholder="Search by Name"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            padding: "10px",
            width: "250px",
            borderRadius: "8px",
          }}
        />

        <select
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: "10px",
            borderRadius: "8px",
          }}
        >
          <option value="All">All</option>
          <option value="Stable">Stable</option>
          <option value="Critical">Critical</option>
          <option value="Under Observation">
            Under Observation
          </option>
        </select>
      </div>

      <table
        border="1"
        cellPadding="10"
        style={{
          width: "100%",
          borderCollapse: "collapse",
        }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Gender</th>
            <th>Blood Group</th>
            <th>Phone</th>
            <th>Health Status</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {filteredResidents.length === 0 ? (
            <tr>
              <td
                colSpan="7"
                style={{
                  textAlign: "center",
                  padding: "20px",
                  fontWeight: "bold",
                }}
              >
                No Residents Found
              </td>
            </tr>
          ) : (
            filteredResidents.map((resident) => (
              <tr key={resident._id}>
                <td>{resident.fullName}</td>
                <td>{resident.age}</td>
                <td>{resident.gender}</td>
                <td>{resident.bloodGroup}</td>
                <td>{resident.phone}</td>
                <td>{resident.healthStatus}</td>

                <td>
                  <button
                    onClick={() =>
                      navigate(`/edit-resident/${resident._id}`)
                    }
                    style={{
                      background: "#007bff",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      marginRight: "10px",
                      cursor: "pointer",
                    }}
                  >
                    Edit
                  </button>

                  <button
                    onClick={() => {
                      setSelectedResident(resident._id);
                      setShowDeleteModal(true);
                    }}
                    style={{
                      background: "#dc3545",
                      color: "white",
                      border: "none",
                      padding: "6px 12px",
                      borderRadius: "5px",
                      cursor: "pointer",
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>

      <CustomModal
        show={showDeleteModal}
        message="Are you sure you want to delete this resident?"
        onConfirm={deleteResident}
        onCancel={() => setShowDeleteModal(false)}
      />
    </div>
  );
}

export default Residents;