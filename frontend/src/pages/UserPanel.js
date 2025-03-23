import React from 'react';

const UserPanel = () => {
  return (
    <div className="user-panel-container">
      <h2>Panel de Usuarios Internos</h2>
      <p>Gestión de archivos, presupuestos y contratos.</p>
      <button>Cargar Documento</button>
      <button>Ver Presupuestos</button>
      <button>Acceder a Contratos</button>
    </div>
  );
};

export default UserPanel;
