import { useState, useEffect } from "react";
import axios from "axios";

function HealthRecords() {
  const [residents, setResidents] = useState([]);

  const [record, setRecord] = useState({
    residentId: "",
    bloodPressure: "",
    sugarLevel: "",
    temperature: "",
    pulseRate: "",
    weight: "",
    doctorNotes: "",
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
    setRecord({
      ...record,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/health", record);

      alert("Health Record Added Successfully!");

      setRecord({
        residentId: "",
        bloodPressure: "",
        sugarLevel: "",
        temperature: "",
        pulseRate: "",
        weight: "",
        doctorNotes: "",
      });
    } catch (error) {
      console.log(error);
      alert("Error Saving Health Record");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Health Records</h1>

      <form onSubmit={handleSubmit}>

        <select
          name="residentId"
          value={record.residentId}
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
          name="bloodPressure"
          placeholder="Blood Pressure"
          value={record.bloodPressure}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="sugarLevel"
          placeholder="Sugar Level"
          value={record.sugarLevel}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="temperature"
          placeholder="Temperature"
          value={record.temperature}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="pulseRate"
          placeholder="Pulse Rate"
          value={record.pulseRate}
          onChange={handleChange}
          required
        />

        <br /><br />

        <input
          type="text"
          name="weight"
          placeholder="Weight"
          value={record.weight}
          onChange={handleChange}
          required
        />

        <br /><br />

        <textarea
          name="doctorNotes"
          placeholder="Doctor Notes"
          value={record.doctorNotes}
          onChange={handleChange}
        ></textarea>

        <br /><br />

        <button type="submit">
          Save Health Record
        </button>

      </form>
    </div>
  );
}

export default HealthRecords;