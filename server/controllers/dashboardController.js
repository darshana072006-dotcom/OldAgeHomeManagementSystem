const Resident = require("../models/Resident");
const Appointment = require("../models/Appointment");
const Medicine = require("../models/Medicine");

const getDashboard = async (req, res) => {
  try {
    const totalResidents = await Resident.countDocuments();

    const criticalCases = await Resident.countDocuments({
      healthStatus: "Critical",
    });

    const appointments = await Appointment.countDocuments();

    const medicines = await Medicine.countDocuments();

    res.json({
      success: true,
      data: {
        totalResidents,
        criticalCases,
        appointments,
        medicines,
      },
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      message: err.message,
    });
  }
};

module.exports = { getDashboard };