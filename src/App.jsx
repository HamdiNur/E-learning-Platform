import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import AdminDashboard from './components/AdminDashboard/AdminDashboard';
import InstructorDashboard from './components/InstructorDashboard/InstructorDashboard';
import StudentDashboard from './components/StudentDashboard/StudentDashboard';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <Router>
      <div className="bg-background min-h-screen">
        <Navbar />
        <Routes>
          {/* Replace the inner Routes with Route components */}
          {/* <Route path="/" element={<StudentDashboard />} /> */}
          {/* <Route path='/' element={ <InstructorDashboard />} /> */}

          {/* <Route path="/" element={<AdminDashboard />} /> */}
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} /> 
        </Routes>
      </div>
    </Router>
  );
}

export default App;
