const express = require("express");
const router = express.Router();

const {
  getResidents,
  getResidentById,
  addResident,
  updateResident,
  deleteResident,
} = require("../controllers/residentController");

router.get("/", getResidents);

router.get("/:id", getResidentById);

router.post("/", addResident);

router.put("/:id", updateResident);

router.delete("/:id", deleteResident);

module.exports = router;