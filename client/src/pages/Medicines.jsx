import { useEffect, useState } from "react";
import axios from "axios";
import "../styles/Medicine.css";

function Medicine() {
  const [medicines, setMedicines] = useState([]);

  const [medicine, setMedicine] = useState({
    medicineName: "",
    quantity: "",
    expiryDate: "",
    supplier: "",
    price: "",
    location: "",
  });

  useEffect(() => {
    fetchMedicines();
  }, []);

  const fetchMedicines = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5000/api/medicines"
      );
      setMedicines(response.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setMedicine({
      ...medicine,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(
        "http://localhost:5000/api/medicines",
        medicine
      );

      alert("Medicine Added Successfully!");

      setMedicine({
        medicineName: "",
        quantity: "",
        expiryDate: "",
        supplier: "",
        price: "",
        location: "",
      });

      fetchMedicines();
    } catch (error) {
      alert("Error Adding Medicine");
      console.log(error);
    }
  };

  return (
    <div className="medicine-container">
      <h1>Medicine Management</h1>

      <form onSubmit={handleSubmit}>

        <input
          type="text"
          name="medicineName"
          placeholder="Medicine Name"
          value={medicine.medicineName}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="quantity"
          placeholder="Quantity"
          value={medicine.quantity}
          onChange={handleChange}
          required
        />

        <input
          type="date"
          name="expiryDate"
          value={medicine.expiryDate}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="supplier"
          placeholder="Supplier"
          value={medicine.supplier}
          onChange={handleChange}
          required
        />

        <input
          type="number"
          name="price"
          placeholder="Price"
          value={medicine.price}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="location"
          placeholder="Storage Location"
          value={medicine.location}
          onChange={handleChange}
          required
        />

        <button type="submit">
          Add Medicine
        </button>

      </form>

      <h2>Medicine List</h2>

      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Stock</th>
            <th>Expiry</th>
            <th>Supplier</th>
            <th>Price</th>
            <th>Location</th>
          </tr>
        </thead>

        <tbody>
          {medicines.map((med) => (
            <tr key={med._id}>
              <td>{med.medicineName}</td>
              <td>{med.quantity}</td>
              <td>{new Date(med.expiryDate).toLocaleDateString()}</td>
              <td>{med.supplier}</td>
              <td>₹{med.price}</td>
              <td>{med.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Medicine;