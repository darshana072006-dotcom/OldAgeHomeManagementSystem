import { useEffect, useState } from "react";
import axios from "axios";

function MedicalHistory() {
  const [residents, setResidents] = useState([]);

  const [history, setHistory] = useState({
    residentId: "",
    disease: "",
    treatment: "",
    medicines: "",
    doctorName: "",
    visitDate: "",
  });

  useEffect(() => {
    fetchResidents();
  }, []);

  const fetchResidents = async () => {
    try {
      const response = await axios.get("http://localhost:5000/api/residents");
      setResidents(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setHistory({
      ...history,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/medical-history",
        history
      );

      alert("Medical History Added Successfully!");

      setHistory({
        residentId: "",
        disease: "",
        treatment: "",
        medicines: "",
        doctorName: "",
        visitDate: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error Saving Medical History");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Medical History</h1>

      <form onSubmit={handleSubmit}>

        <select
          name="residentId"
          value={history.residentId}
          onChange={handleChange}
          required
        >
          <option value="">Select Resident</option>

          {residents.map((resident) => (
            <option key={resident._id} value={resident._id}>
              {resident.fullName}
            </option>
          ))}
        </select>

        <br /><br />

        <input
          type="text"
          name="disease"
          placeholder="Disease"
          value={history.disease}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="treatment"
          placeholder="Treatment"
          value={history.treatment}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="medicines"
          placeholder="Medicines"
          value={history.medicines}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={history.doctorName}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="date"
          name="visitDate"
          value={history.visitDate}
          onChange={handleChange}
          required
        />

        <br /><br />

        <button type="submit">
          Save Medical History
        </button>

      </form>
    </div>
  );
}

export default MedicalHistory;