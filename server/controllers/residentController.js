const Resident = require("../models/Resident");

// Get All Residents
const getResidents = async (req, res) => {
  try {
    const residents = await Resident.find();

    res.status(200).json({
      success: true,
      data: residents,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Single Resident
const getResidentById = async (req, res) => {
  try {
    const resident = await Resident.findById(req.params.id);

    if (!resident) {
      return res.status(404).json({
        success: false,
        message: "Resident not found",
      });
    }

    res.status(200).json({
      success: true,
      data: resident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Resident
const addResident = async (req, res) => {
  try {
    const resident = await Resident.create(req.body);

    res.status(201).json({
      success: true,
      message: "Resident Added Successfully",
      data: resident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Resident
const updateResident = async (req, res) => {
  try {
    const resident = await Resident.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    res.status(200).json({
      success: true,
      data: resident,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Resident
const deleteResident = async (req, res) => {
  try {
    await Resident.findByIdAndDelete(req.params.id);

    res.status(200).json({
      success: true,
      message: "Resident Deleted Successfully",
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getResidents,
  getResidentById,
  addResident,
  updateResident,
  deleteResident,
};