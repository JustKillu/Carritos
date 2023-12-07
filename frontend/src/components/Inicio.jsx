import React, { useEffect, useState } from 'react';

function Inicio() {
  const [modelos, setModelos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/modelos')
      .then(response => response.json())
      .then(data => setModelos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      <h1>Inicio</h1>
      {modelos ? (
        <div>
          <h2>Modelos:</h2>
          <pre>{JSON.stringify(modelos, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando modelos...</p>
      )}
    </div>
  );
}

export default Inicio;
