import express from "express";

import {
  getAllHospitals,
  addHospital,
  getHospitalById,
} from "../controllers/hospital.js";

const router = express.Router();

router.get("/", getAllHospitals);
router.get("/:id", getHospitalById);
router.post("/", addHospital);

export default router;
