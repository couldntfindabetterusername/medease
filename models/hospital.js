import mongoose from "mongoose";

const hospitalSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
  },
  location: {
    type: String,
    required: true,
  },
  coordinates: {
    type: [Number],
    required: true,
  },
  contact: {
    phone: {
      type: String,
      required: true,
    },
    email: {
      type: String,
    },
    website: {
      type: String,
    },
  },
  departments: {
    type: [String],
    required: true,
  },
});

export default mongoose.model("Hospital", hospitalSchema);
