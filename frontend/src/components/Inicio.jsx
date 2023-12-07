import React, { useEffect, useState } from 'react';
import Video from '../assets/Video.mp4';
import '../inicio.css';
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
      <video autoPlay loop muted className='video1'>
        <source src={Video} type="video/mp4" />
      </video>
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