import mongoose, { mongo } from "mongoose";

const appointmentSchema = new mongoose.Schema({
  patient: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Patient",
    required: true,
  },
  doctor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Doctor",
    required: true,
  },
  department: {
    type: String,
    required: true,
  },
  slotDate: {
    type: Date,
    required: true,
  },
  slotTime: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Appointment", appointmentSchema);
