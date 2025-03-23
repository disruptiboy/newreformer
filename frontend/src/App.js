import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home'; // Asegúrate de que Home.js esté en src/pages/
import Projects from './pages/Projects'; // Asegúrate de que Projects.js esté en src/pages/
import Budget from './pages/Budget'; // Asegúrate de que el nombre del archivo y la importación coincidan.
import UserPanel from './pages/UserPanel'; // Asegúrate de que UserPanel.js esté en src/pages/
import './App.css'; // Asegúrate de que App.css esté en src/

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
