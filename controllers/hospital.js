import mongoose from "mongoose";
import Hospital from "../models/hospital.js";
import { locationToCoordinates } from "../utils/locationToCoordinates.js";
import { sortByLocation } from "../utils/sortByLocation.js";

export const getAllHospitals = async (req, res) => {
  try {
    const hospitals = await Hospital.find();

    return res.status(200).json(hospitals);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};

export const getAllHospitalsInProximity = async (req, res) => {
  const { currentLocation } = req.body;

  try {
    const hospitals = await Hospital.find();

    const sortedHospitals = sortByLocation(hospitals, currentLocation);
  } catch (error) {}
};

export const getHospitalById = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Not a valid ID" });
  }

  try {
    const hospital = await Hospital.findOne({ _id: id });

    if (!hospital) {
      return res.status(401).json({ message: "No hospital with this ID" });
    }

    return res.status(200).json(hospital);
  } catch (error) {
    return res.status(500).json({ message: error });
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

    const newHospital = new Hospital({
      name,
      rating,
      location,
      coordinates,
      contact,
      departments,
    });

    await newHospital.save();

    return res.status(200).json(newHospital);
  } catch (error) {
    return res.status(500).json({ message: error });
  }
};
