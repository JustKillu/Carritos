import React, { useEffect, useState } from 'react';
import '../components/styles/Modelos.css';
function Modelos() {
  const [modelos, setModelos] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/modelos')
      .then(response => response.json())
      .then(data => setModelos(data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div className='wrapper'>
      <div className='Head'>
     <div className='Back'></div>
     <div className="Car"></div>
     <div className="Car2"></div>
      <h1 className='titulo'>Autos en Venta</h1>
     </div>
    <div className='Modeloscard'>
      <div className='content'>
      <h1>Modelos</h1>
      {modelos ? (
        <div>
          <h2>Modelos:</h2>
          <pre>{JSON.stringify(modelos, null, 2)}</pre>
        </div>
      ) : (
        <p>Cargando modelos...</p>
      )}
      </div>
      
    </div>
    </div>
  );
}

export default Modelos;