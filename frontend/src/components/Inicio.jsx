import React, { useEffect, useState } from 'react';
import Video from '../assets/Video.mp4';

import '../inicio.css';
function Inicio() {

  return (
    <div>
      <div className='Videoparallax'>
      <video autoPlay loop muted className='video1'>
        <source src={Video} type="video/mp4" />
      </video>
      </div>
      <div className='section'>
      <h1>Seamos veloces!</h1>
      <p>
        Los autos deportivos son un estilo de vida que se basa en el uso de
        tecnología para mejorar la velocidad, la eficiencia y la seguridad.
      </p>
      </div>
    
      </div>
  );
}

export default Inicio;