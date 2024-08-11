// src/components/CrearPosteo.js
import React, { useState } from 'react';

const CrearPosteo = () => {
  const [titulo, setTitulo] = useState('');
  const [contenido, setContenido] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Nuevo posteo creado:', { titulo, contenido });
    // Aquí puedes agregar lógica para enviar el nuevo posteo al backend
  };

  return (
    <div>
      <h1>Crear Nuevo Posteo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={titulo}
            onChange={(e) => setTitulo(e.target.value)}
          />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea
            value={contenido}
            onChange={(e) => setContenido(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CrearPosteo;
