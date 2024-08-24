import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  return (
    <Router>
      <div className="bg-[#E0F7FA] min-h-screen">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/signup" element={<SignUp /> }/>
          <Route path="/login" element={<Login/>}/>




           
        </Routes>
      </div>
    </Router>
  );
}

export default App;
