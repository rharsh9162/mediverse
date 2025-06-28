import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'; // adjust the path if needed
import Home from './pages/Home';
import BookAppointment from './pages/BookAppointment';
import EDoctor from './pages/EDoctor';
import Login from './pages/Login';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';

function App() {
  return (
    <Router>
      <Navbar /> {/* Ensure this is placed outside Routes */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/book" element={<BookAppointment />} />
        <Route path="/edoctor" element={<EDoctor />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard/:userId" element={<UserDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
