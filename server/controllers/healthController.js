const HealthRecord = require("../models/HealthRecord");

// Add Health Record
const addHealthRecord = async (req, res) => {
  try {
    const healthRecord = await HealthRecord.create(req.body);

    res.status(201).json({
      success: true,
      message: "Health Record Added Successfully",
      data: healthRecord,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get All Health Records
const getHealthRecords = async (req, res) => {
  try {
    const healthRecords = await HealthRecord.find().populate("residentId");

    res.status(200).json({
      success: true,
      data: healthRecords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Health Records by Resident ID
const getHealthRecordsByResident = async (req, res) => {
  try {
    const healthRecords = await HealthRecord.find({
      residentId: req.params.residentId,
    }).populate("residentId");

    res.status(200).json({
      success: true,
      data: healthRecords,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addHealthRecord,
  getHealthRecords,
  getHealthRecordsByResident,
};