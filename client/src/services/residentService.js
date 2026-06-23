import axios from "axios";

const API_URL = "http://localhost:5000/api/residents";

// Add Resident
export const addResident = async (residentData) => {
  return await axios.post(API_URL, residentData);
};

// Get All Residents
export const getResidents = async () => {
  return await axios.get(API_URL);
};

// Delete Resident
export const deleteResident = async (id) => {
  return await axios.delete(`${API_URL}/${id}`);
};