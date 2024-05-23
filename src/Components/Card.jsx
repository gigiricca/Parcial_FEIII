import React from 'react'

function Card({ persona }) {
  if (!persona) {
    return <div>No hay datos disponibles</div>;
  }

  const { nombre, peli } = persona;

  return (
    <div>
      <h2>Hola {nombre}!</h2>
      <p>Nos alegra saber que tu peli favorita es: {peli}</p>
    </div>
  );
};

export default Card;