import { useState } from "react";
import { Link } from "react-router-dom";

export default function Contact() {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setMessageSent(true);
  };

  return (
    <div>
      <h1>Contacto</h1>
      {messageSent ? (
        <div>
          <p>Mensaje enviado con éxito</p>
          <Link to="/">Volver a la página de inicio</Link>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <label>
            Mensaje:
            <textarea required />
          </label>
          <button type="submit">Enviar</button>
        </form>
      )}
    </div>
  );
}
