// == Import
import { Route, Routes } from 'react-router-dom';
import Header from '../Header';
import Skills from '../Skills';
import Home from '../Home';
import PortFolio from '../PortFolio';
import './styles.css';
import Contact from '../Contact';

// == Composant
const App = () => (
    <div className="app">
       <Header />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/compétences" element={<Skills />} />
      <Route path="/portfolio" element={<PortFolio />} />
      <Route path="/contact" element={<Contact />} />
      </Routes>
      
    </div>
  );


// == Export
export default App;
