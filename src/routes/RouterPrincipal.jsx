// src/routes/RouterPrincipal.jsx
import { BrowserRouter, Routes, Route, Link, Navigate } from 'react-router-dom';
import Home from '../views/Home';
import Componente1 from '../views/Componente1';
import Componente2 from '../views/Componente2';
import Error404 from '../views/Error404';
import RouterSubRutas from './RouterSubRutas';
import Persona from '../views/Persona'; // Importa el componente Persona

const RouterPrincipal = () => (
  <BrowserRouter>
    <nav>
      <Link to="/">Inicio</Link>
      <Link to="/componente1">Componente 1</Link>
      <Link to="/componente2">Componente 2</Link>
      <Link to="/subrutas">SubRutas</Link>
      <Link to="/persona">Persona</Link> {/* Enlace a Persona */}
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/componente1" element={<Componente1 />} />
      <Route path="/componente2" element={<Componente2 />} />
      <Route path="/subrutas/*" element={<RouterSubRutas />} />
      <Route path="/persona/:nombre/:apellido" element={<Persona />} />
      <Route path="/persona/:nombre" element={<Persona />} />
      <Route path="/persona" element={<Persona />} />
      <Route path="/navegar" element={<Navigate to="/persona/TuNombre/TuApellido" />} />
      <Route path="*" element={<Error404 />} />
    </Routes>
  </BrowserRouter>
);

export default RouterPrincipal;
