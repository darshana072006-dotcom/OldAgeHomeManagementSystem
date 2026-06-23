const express = require("express");
const router = express.Router();

const {
  addHealthRecord,
  getHealthRecords,
  getHealthRecordsByResident,
} = require("../controllers/healthController");

// Add Health Record
router.post("/", addHealthRecord);

// Get All Health Records
router.get("/", getHealthRecords);

// Get Health Records of a Resident
router.get("/resident/:residentId", getHealthRecordsByResident);

module.exports = router;