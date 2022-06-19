import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import 'react-icons/fa';
import Home from './Pages/Index'
import About from './Pages/About'
import Services from './Pages/Services'
import Contact from './Pages/Contact'
import Signup from './Pages/Signup'


function App() {
  return (
    <div className="gradient-background">
    <Router>
      <Navbar/>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/About" element={<About />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/Contact" element={<Contact />} />
        <Route exact path="/Signup" element={<Signup />} />
      </Routes>
      
    </Router>
    </div>
  );
}                                             

export default App;
