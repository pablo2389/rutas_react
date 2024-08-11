import React from 'react';
import { useParams } from 'react-router-dom';

function PosteoDetalle() {
  const { id } = useParams();

  React.useEffect(() => {
    console.log(`Este es el posteo ${id} utilizado`);
  }, [id]);

  return (
    <div>
      <h1>Detalle del Posteo</h1>
      <p>Este es el posteo {id} utilizado.</p>
    </div>
  );
}

export default PosteoDetalle;
