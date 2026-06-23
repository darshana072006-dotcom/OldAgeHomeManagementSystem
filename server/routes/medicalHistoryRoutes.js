const express = require("express");
const router = express.Router();

const {
  addMedicalHistory,
} = require("../controllers/medicalHistoryController");

router.post("/", addMedicalHistory);

module.exports = router;