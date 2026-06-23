import { useState } from "react";
import axios from "axios";

function Appointment() {
  const [appointment, setAppointment] = useState({
    residentId: "",
    doctorName: "",
    appointmentDate: "",
    appointmentTime: "",
    hospital: "",
    purpose: "",
  });

  const handleChange = (e) => {
    setAppointment({
      ...appointment,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/appointments",
        appointment
      );

      alert("Appointment Added Successfully!");

      setAppointment({
        residentId: "",
        doctorName: "",
        appointmentDate: "",
        appointmentTime: "",
        hospital: "",
        purpose: "",
      });
    } catch (error) {
      console.error(error);
      alert("Error Saving Appointment");
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <h1>Appointment Management</h1>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="residentId"
          placeholder="Resident ID"
          value={appointment.residentId}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          name="doctorName"
          placeholder="Doctor Name"
          value={appointment.doctorName}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="date"
          name="appointmentDate"
          value={appointment.appointmentDate}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="time"
          name="appointmentTime"
          value={appointment.appointmentTime}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          name="hospital"
          placeholder="Hospital"
          value={appointment.hospital}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <input
          type="text"
          name="purpose"
          placeholder="Purpose"
          value={appointment.purpose}
          onChange={handleChange}
          required
        />
        <br />
        <br />

        <button type="submit">
          Save Appointment
        </button>
      </form>
    </div>
  );
}

export default Appointment;