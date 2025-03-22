import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Budget from './pages/Budget';
import UserPanel from './pages/UserPanel';
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/budget" element={<Budget />} />
        <Route path="/user" element={<UserPanel />} />
      </Routes>
    </Router>
  );
}

export default App;
