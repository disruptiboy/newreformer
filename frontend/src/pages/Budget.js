import React, { useState } from 'react';

const Budget = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    details: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert('Presupuesto enviado con éxito');
  };

  return (
    <div className="budget-container">
      <h2>Solicitar Presupuesto</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Nombre:</label>
        <input type="text" id="name" name="name" onChange={handleChange} required />

        <label htmlFor="email">Correo:</label>
        <input type="email" id="email" name="email" onChange={handleChange} required />

        <label htmlFor="details">Detalles:</label>
        <textarea id="details" name="details" onChange={handleChange} required />

        <button type="submit">Enviar</button>
      </form>
    </div>
  );
};

export default Budget;
