import React from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Login from './components/Login';
// import hide from './components/hide';
import Pool from './components/Pool';
// import Tasveer from './components/Tasveer';
// import dynamicDivs from './components/dynamicDivs';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Createpool from './components/Createpool';

function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Navbar />
        {/* Other components or elements */}
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        {/* <Route path="/hide" element={<hide />} /> */}
        <Route path="/Pool" element={<Pool />} />
        <Route path="/Signup" element={<Signup />} />
        <Route path="/Createpool" element={<Createpool />} />
        {/* <Route path="/Tasveer" element={<Tasveer/>} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
