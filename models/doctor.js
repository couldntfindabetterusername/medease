import mongoose from "mongoose";

const doctorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  hospital: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Hospital",
  },
  specialization: {
    type: String,
    required: true,
  },
  availableDays: {
    type: [
      {
        type: String,
        enum: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
    ],
  },
});

export default mongoose.model("Doctor", doctorSchema);
