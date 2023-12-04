import React, { useEffect, useState } from 'react';
import './App.css'; 

function Modelos() {
  const [modelos, setModelos] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/modelos')
      .then(response => response.json())
      .then(data => setModelos(data));
  }, []);

  return (
    <div className="modelos">
      {modelos.map(modelo => (
        <div key={modelo.id} className="modelo-card">
          <h2>{modelo.Modelo}</h2>
          <p>Precio: {modelo.Precio}</p>
          <p>Fecha: {modelo.Fecha}</p>
        </div>
      ))}
    </div>
  );
}

export default Modelos;
