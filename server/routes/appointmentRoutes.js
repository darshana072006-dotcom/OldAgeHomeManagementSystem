const express = require("express");
const router = express.Router();

const controller = require("../controllers/appointmentController");

console.log("Appointment Controller:", controller);

router.get("/", controller.getAppointments);
router.post("/", controller.addAppointment);

module.exports = router;