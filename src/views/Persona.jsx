import React, { useState } from 'react';

const Persona = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [nombreCompleto, setNombreCompleto] = useState('');

  const handleNombreChange = (e) => setNombre(e.target.value);
  const handleApellidoChange = (e) => setApellido(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    setNombreCompleto(`${nombre} ${apellido}`);
  };

  const handleReset = () => {
    setNombre('');
    setApellido('');
    setNombreCompleto('');
  };

  return (
    <div>
      <h1>Tu nombre es: {nombreCompleto}</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Nombre"
          value={nombre}
          onChange={handleNombreChange}
        />
        <input
          type="text"
          placeholder="Apellido"
          value={apellido}
          onChange={handleApellidoChange}
        />
        <button type="submit">Enviar</button>
        <button type="button" onClick={handleReset}>Reiniciar</button>
      </form>
    </div>
  );
};

export default Persona;
