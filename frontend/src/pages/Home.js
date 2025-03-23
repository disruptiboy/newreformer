import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-container">
      <h1>Bienvenido a Reformer Spain SA</h1>
      <p>Renueva tu espacio con estilo y calidad.</p>
      <div className="home-buttons">
        <Link to="/projects" className="button">Reformas</Link>
        <Link to="/budget" className="button">Solicitar Presupuesto</Link>
        <Link to="/user" className="button">Acceso de Usuarios</Link>
      </div>
    </div>
  );
};

export default Home;
