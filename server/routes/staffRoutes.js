const express = require("express");
const router = express.Router();

const {
  addStaff,
  getStaff,
} = require("../controllers/staffController");

router.get("/", getStaff);
router.post("/", addStaff);

module.exports = router;