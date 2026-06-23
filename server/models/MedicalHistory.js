const mongoose = require("mongoose");

const medicalHistorySchema = new mongoose.Schema(
  {
    residentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Resident",
      required: true,
    },
    disease: {
      type: String,
      required: true,
    },
    treatment: {
      type: String,
      required: true,
    },
    medicines: {
      type: String,
      required: true,
    },
    doctorName: {
      type: String,
      required: true,
    },
    visitDate: {
      type: Date,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("MedicalHistory", medicalHistorySchema);