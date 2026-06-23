import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EditResident() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [resident, setResident] = useState({
    fullName: "",
    age: "",
    gender: "",
    bloodGroup: "",
    phone: "",
    address: "",
    healthStatus: "",
  });

  useEffect(() => {
    fetchResident();
  }, []);

  const fetchResident = async () => {
    try {
      const response = await axios.get(
        `http://localhost:5000/api/residents/${id}`
      );

      setResident(response.data.data);
    } catch (error) {
      console.log(error);
      alert("Error loading resident");
    }
  };

  const handleChange = (e) => {
    setResident({
      ...resident,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:5000/api/residents/${id}`,
        resident
      );

      alert("Resident Updated Successfully!");

      navigate("/residents");
    } catch (error) {
      console.log(error);
      alert("Error updating resident");
    }
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Edit Resident</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={resident.fullName}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="number"
          name="age"
          placeholder="Age"
          value={resident.age}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="gender"
          placeholder="Gender"
          value={resident.gender}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="bloodGroup"
          placeholder="Blood Group"
          value={resident.bloodGroup}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="phone"
          placeholder="Phone"
          value={resident.phone}
          onChange={handleChange}
        />

        <br /><br />

        <textarea
          name="address"
          placeholder="Address"
          value={resident.address}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="text"
          name="healthStatus"
          placeholder="Health Status"
          value={resident.healthStatus}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">
          Update Resident
        </button>

      </form>
    </div>
  );
}

export default EditResident;