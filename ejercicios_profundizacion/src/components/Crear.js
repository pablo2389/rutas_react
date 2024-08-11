import React, { useState } from 'react';

function Crear() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica para crear un nuevo posteo
    console.log('Nuevo posteo:', { title, content });
    // Resetea los campos del formulario
    setTitle('');
    setContent('');
  };

  return (
    <div>
      <h1>Crear un nuevo posteo</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Título:</label>
          <input
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <div>
          <label>Contenido:</label>
          <textarea
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />
        </div>
        <button type="submit">Crear</button>
      </form>
    </div>
  );
}

export default Crear;
