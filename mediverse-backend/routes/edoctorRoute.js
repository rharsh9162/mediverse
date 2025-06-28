const express = require("express");
const router = express.Router();
const { generateMedicalReceipt } = require("../controllers/edoctorController");

router.post("/", generateMedicalReceipt); // POST /api/edoctor

module.exports = router;
