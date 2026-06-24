import { useState, useEffect } from "react";
import axios from "axios";
import "../styles/staff.css";

function staff() {
  const [staffList, setStaffList] = useState([]);

  const [staff, setStaff] = useState({
    fullName: "",
    role: "",
    phone: "",
    email: "",
    salary: "",
    shift: "",
    address: "",
  });

  useEffect(() => {
    fetchStaff();
  }, []);

  const fetchStaff = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/staff");
      setStaffList(res.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setStaff({
      ...staff,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/staff", staff);

      alert("staff Added Successfully!");

      setstaff({
        fullName: "",
        role: "",
        phone: "",
        email: "",
        salary: "",
        shift: "",
        address: "",
      });

      fetchStaff();
    } catch (error) {
      alert("Error Adding staff");
      console.log(error);
    }
  };

  return (
    <div className="staff-container">

      <h1>staff Management</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="fullName"
          placeholder="Full Name"
          value={staff.fullName}
          onChange={handleChange}
          required
        />

        <select
          name="role"
          value={staff.role}
          onChange={handleChange}
          required
        >
          <option value="">Select Role</option>
          <option value="Doctor">Doctor</option>
          <option value="Nurse">Nurse</option>
          <option value="Caretaker">Caretaker</option>
          <option value="Admin">Admin</option>
        </select>

        <input
          type="text"
          name="phone"
          placeholder="Phone Number"
          value={staff.phone}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Email"
          value={staff.email}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={staff.salary}
          onChange={handleChange}
          required
        />

        <select
          name="shift"
          value={staff.shift}
          onChange={handleChange}
          required
        >
          <option value="">Select Shift</option>
          <option value="Morning">Morning</option>
          <option value="Evening">Evening</option>
          <option value="Night">Night</option>
        </select>

        <textarea
          name="address"
          placeholder="Address"
          value={staff.address}
          onChange={handleChange}
          required
        ></textarea>

        <button type="submit">Add staff</button>

      </form>

      <h2>staff List</h2>

      <table>

        <thead>
          <tr>
            <th>Name</th>
            <th>Role</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Salary</th>
            <th>Shift</th>
          </tr>
        </thead>

        <tbody>

          {staffList.map((member) => (
            <tr key={member._id}>
              <td>{member.fullName}</td>
              <td>{member.role}</td>
              <td>{member.phone}</td>
              <td>{member.email}</td>
              <td>₹{member.salary}</td>
              <td>{member.shift}</td>
            </tr>
          ))}

        </tbody>

      </table>

    </div>
  );
}

export default staff;