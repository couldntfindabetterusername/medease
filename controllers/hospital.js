import Hospital from "../models/hospital.js";
import { locationToCoordinates } from "../utils/locationToCoordinates.js";

export const getAllHospitals = async (req, res) => {
  try {
  } catch (error) {
    return res.status(400).json({ message: error });
  }
};

export const addHospital = async (req, res) => {
  const { name, rating, location, contact, departments } = req.body;

  if (!name || !rating || !location || !contact || !departments) {
    return res.status(400).json({ message: "Enter all fields correctly" });
  }

  try {
    const hosp = await Hospital.findOne({ name: name, location: location });

    if (hosp) {
      return res.status(401).json({ message: "Hospital alredy exist" });
    }

    const coordinates = await locationToCoordinates(location);
    // console.log(coordinates);
    return res.json(coordinates);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
