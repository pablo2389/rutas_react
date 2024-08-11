import React from 'react';
import { Link } from 'react-router-dom';

function Posteos() {
  // Array de posteos
  const posteos = [
    { id: 1, title: 'Primer Posteo', content: 'Contenido del primer posteo' },
    { id: 2, title: 'Segundo Posteo', content: 'Contenido del segundo posteo' },
    // Agrega más posteos según sea necesario
  ];

  return (
    <div>
      <h1>Posteos</h1>
      <ul>
        {posteos.map((posteo) => (
          <li key={posteo.id}>
            <h2>{posteo.title}</h2>
            <p>{posteo.content}</p>
            <Link to={`/posteos/${posteo.id}`}>
              <button>Leer</button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posteos;
