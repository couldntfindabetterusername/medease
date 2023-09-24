import express from "express";

import { getAllHospitals, addHospital } from "../controllers/hospital.js";

const router = express.Router();

router.get("/", getAllHospitals);
router.post("/", addHospital);

export default router;
