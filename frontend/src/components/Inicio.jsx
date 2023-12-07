import React, { useEffect, useState } from 'react';

function Inicio() {
  console.log('El componente Inicio se ha renderizado');
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
