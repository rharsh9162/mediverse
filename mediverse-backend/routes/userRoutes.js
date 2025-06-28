const express = require("express");
const router = express.Router();
const { createUser, loginUser, getUserAppointments } = require("../controllers/userController");


// ✅ Add this line to log every route call
router.use((req, res, next) => {
  console.log(`🔁 Route hit: ${req.method} ${req.originalUrl}`);
  next();
});

router.post("/create", createUser);
router.post("/login", loginUser);
router.get("/appointments/:userId", getUserAppointments);
router.get("/test", (req, res) => {
  res.send("User route working");
});


module.exports = router;
