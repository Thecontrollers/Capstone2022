import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Schedule from './components/pages/Schedule';
import Teams from './components/pages/Teams';
import Staff from './components/pages/Staff';
import Merchandise from './components/pages/Merchandise';


function App() {
  return (
      <>
        <Navbar />
        <Routes>
          <Route path="/" element ={<Home />} />
          <Route path="Schedule" element = {<Schedule />} />
          <Route path="Teams" element ={<Teams />}   /> 
          <Route path="Staff" element ={<Staff />} />
          <Route path="Merchandise" element={<Merchandise/>} />
        </Routes>
      </>
  );
}

export default App;
