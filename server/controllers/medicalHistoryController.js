const MedicalHistory = require("../models/MedicalHistory");

const addMedicalHistory = async (req, res) => {
  try {
    const history = await MedicalHistory.create(req.body);

    res.status(201).json({
      success: true,
      message: "Medical History Added Successfully",
      data: history,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  addMedicalHistory,
};