import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function ResidentDetails() {
  const { id } = useParams();

  const [resident, setResident] = useState(null);

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
    }
  };

  if (!resident) {
    return <h2 style={{ padding: "20px" }}>Loading...</h2>;
  }

  return (
    <div style={{ padding: "30px" }}>
      <h1>Resident Details</h1>

      <hr />

      <h3>👤 Personal Information</h3>

      <p><b>Name:</b> {resident.fullName}</p>
      <p><b>Age:</b> {resident.age}</p>
      <p><b>Gender:</b> {resident.gender}</p>
      <p><b>Blood Group:</b> {resident.bloodGroup}</p>
      <p><b>Phone:</b> {resident.phone}</p>
      <p><b>Address:</b> {resident.address}</p>

      <hr />

      <h3>❤️ Health Information</h3>

      <p><b>Health Status:</b> {resident.healthStatus}</p>
    </div>
  );
}

export default ResidentDetails;