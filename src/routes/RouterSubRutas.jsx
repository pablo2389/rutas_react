import InicioSubRuta from '../subrutas/InicioSubRuta';
import SubRuta1 from '../subrutas/SubRuta1';
import SubRuta2 from '../subrutas/SubRuta2';


const RouterSubRutas = () => (
  <div>
    <nav>
      <Link to="inicio">Inicio SubRuta</Link>
      <Link to="subruta1">SubRuta 1</Link>
      <Link to="subruta2">SubRuta 2</Link>
    </nav>
    <Outlet />
    <Routes>
      <Route path="inicio" element={<InicioSubRuta />} />
      <Route path="subruta1" element={<SubRuta1 />} />
      <Route path="subruta2" element={<SubRuta2 />} />
    </Routes>
  </div>
);

export default RouterSubRutas;
