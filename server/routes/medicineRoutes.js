const express = require("express");
const router = express.Router();

const {
  addMedicine,
  getMedicines,
} = require("../controllers/medicineController");

// Get All Medicines
router.get("/", getMedicines);

// Add Medicine
router.post("/", addMedicine);

module.exports = router;