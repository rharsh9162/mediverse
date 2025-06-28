# 🩺 MediVerse - AI Powered Doctor Appointment System

MediVerse is a full-stack MERN web application that allows patients to book appointments with doctors, get AI-generated medical receipts through an eDoctor feature, and manage appointments via a user dashboard.

![MediVerse Banner](public/mediverse-logo.jpg)

## 🔗 Live Links

- 🖥️ Frontend (Vercel): [https://mediverse-six.vercel.app/]
- 🚀 Backend (Render): [https://mediverse-glk5.onrender.com]

---

## ✨ Features

- ✅ User Registration & Login with unique User ID
- 🗓️ Book appointments with preferred doctors
- 🤖 eDoctor: AI-powered symptom checker using Cohere API
- 📋 View all past appointments in a clean dashboard
- 📱 Fully responsive and modern UI using Tailwind CSS

---

## 🛠️ Tech Stack

- **Frontend:** React.js, Tailwind CSS, Vite
- **Backend:** Node.js, Express.js
- **Database:** MongoDB (Atlas)
- **AI Integration:** Cohere Generate API
- **Deployment:** Vercel (frontend), Render (backend)

---

## 📁 Folder Structure

```
mediverse/
├── mediverse-backend/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── server.js
├── src/
│   ├── components/
│   ├── pages/
│   ├── App.jsx
│   ├── main.jsx
├── public/
├── .env
├── README.md
```

---

## 🚀 How to Run Locally

1. **Clone the repository:**
```bash
git clone https://github.com/rharsh9162/mediverse.git
cd mediverse
```

2. **Set up Backend:**
```bash
cd mediverse-backend
npm install
npm run dev
```

3. **Set up Frontend:**
```bash
cd ..
npm install
npm run dev
```

4. **Create `.env` files** with the following variables:

**Frontend `.env`:**
```ini
VITE_API_BASE_URL=https://mediverse-glk5.onrender.com/api
```

**Backend `.env`:**
```ini
PORT=10000
MONGO_URI=mongodb+srv://hrajj9162:Harsh9162@cluster0.70iduwy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
COHERE_API_KEY=EbAQR0pkYXyzUhrJHp6bZy3X7lmCDRQGQPlmW0Ur
```

---

## 🧪 API Endpoints

| Route                         | Method | Description                      |
|------------------------------|--------|----------------------------------|
| /api/users/create            | POST   | Register a new user              |
| /api/users/login             | POST   | Login using UserID               |
| /api/appointments            | POST   | Book an appointment              |
| /api/appointments/user/:id   | GET    | Get all appointments for user    |
| /api/edoctor                 | POST   | Get AI-generated diagnosis       |


## 🧠 Future Improvements

- Add Admin Panel for doctor management
- OTP verification for login
- SMS/email notifications for appointment reminders
- Chat with doctor feature (using WebSocket)

---

## 📬 Contact

Made by [Harsh Raj](https://github.com/rharsh9162)  
For questions: rharsh.9162@gmail.com
