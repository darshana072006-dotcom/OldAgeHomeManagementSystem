const mongoose = require("mongoose");

const healthRecordSchema = new mongoose.Schema(
  {
    residentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resident",
      required: true,
    },

    bloodPressure: {
      type: String,
      required: true,
    },

    sugarLevel: {
      type: String,
      required: true,
    },

    temperature: {
      type: String,
      required: true,
    },

    pulseRate: {
      type: String,
      required: true,
    },

    weight: {
      type: String,
      required: true,
    },

    doctorNotes: {
      type: String,
      default: "",
    },

    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HealthRecord", healthRecordSchema);