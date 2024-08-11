import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Posteos from './components/Posteos';
import Crear from './components/Crear';
import Navbar from './components/Navbar';
import PosteoDetalle from './components/PosteoDetalle';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/posteos" element={<Posteos />} />
        <Route path="/crear" element={<Crear />} />
        <Route path="/posteos/:id" element={<PosteoDetalle />} />
      </Routes>
    </Router>
  );
}

export default App;
