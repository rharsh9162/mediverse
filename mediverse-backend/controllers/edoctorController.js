// controllers/edoctorController.js

exports.generateMedicalReceipt = async (req, res) => {
  const { name, symptoms } = req.body;

  if (!name || !symptoms) {
    return res.status(400).json({ error: "Name and symptoms are required" });
  }

  const receipt = {
    name,
    age: "25", // Optional: You can add an input for age if needed
    diagnosis: "Viral Upper Respiratory Tract Infection (URTI)",
    medicines: [
      {
        name: "Paracetamol 500mg",
        dosage: "1 tablet every 6 hours after food",
        duration: "5 days",
      },
      {
        name: "Benadryl Cough Syrup",
        dosage: "10ml twice daily",
        duration: "5 days",
      },
    ],
    precautions: [
      "Drink warm fluids",
      "Avoid cold weather exposure",
      "Rest adequately",
      "Use a steam inhaler twice a day",
    ],
    nextSteps: "Consult a physician if symptoms persist beyond 5 days or worsen.",
  };

  console.log("🟢 Sending detailed receipt:", receipt);
  res.status(200).json(receipt);
};
