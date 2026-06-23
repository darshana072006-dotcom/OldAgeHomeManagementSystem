import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addResident } from "../services/residentService";
import "../styles/AddResident.css";

function AddResident() {
  const navigate = useNavigate();

  const [resident, setResident] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    address: "",
    healthStatus: "Stable",
  });

  const handleChange = (e) => {
    setResident({
      ...resident,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await addResident(resident);

      alert("Resident Added Successfully!");

      setResident({
        fullName: "",
        age: "",
        gender: "",
        bloodGroup: "",
        phone: "",
        address: "",
        healthStatus: "Stable",
      });

      navigate("/residents");
    } catch (error) {
      alert("Error saving resident");
      console.error(error);
    }
  };

  return (
    <div className="add-resident-container">
      <div className="form-card">
        <h1>Add New Resident</h1>

        <form onSubmit={handleSubmit}>

          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="fullName"
              placeholder="Enter Full Name"
              value={resident.fullName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Age</label>
            <input
              type="number"
              name="age"
              placeholder="Enter Age"
              value={resident.age}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Gender</label>
            <select
              name="gender"
              value={resident.gender}
              onChange={handleChange}
              required
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
            </select>
          </div>

          <div className="form-group">
            <label>Blood Group</label>
            <select
              name="bloodGroup"
              value={resident.bloodGroup}
              onChange={handleChange}
              required
            >
              <option value="">Select Blood Group</option>
              <option value="A+">A+</option>
              <option value="A-">A-</option>
              <option value="B+">B+</option>
              <option value="B-">B-</option>
              <option value="AB+">AB+</option>
              <option value="AB-">AB-</option>
              <option value="O+">O+</option>
              <option value="O-">O-</option>
            </select>
          </div>

          <div className="form-group">
            <label>Phone Number</label>
            <input
              type="text"
              name="phone"
              placeholder="Enter Phone Number"
              value={resident.phone}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Address</label>
            <textarea
              name="address"
              placeholder="Enter Address"
              value={resident.address}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <div className="form-group">
            <label>Health Status</label>
            <select
              name="healthStatus"
              value={resident.healthStatus}
              onChange={handleChange}
            >
              <option value="Stable">Stable</option>
              <option value="Critical">Critical</option>
              <option value="Under Observation">Under Observation</option>
            </select>
          </div>

          <button type="submit" className="save-btn">
            Save Resident
          </button>

        </form>
      </div>
    </div>
  );
}

export default AddResident;