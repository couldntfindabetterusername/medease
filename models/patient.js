import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  phone: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
  },
});

export default mongoose.model("Patient", patientSchema);
