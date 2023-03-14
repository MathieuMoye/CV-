import { NavLink } from 'react-router-dom';

const Navbar = () => (
  <div className="navbar-link">
    <NavLink
    className="navbar-link-item" to="/">Accueil</NavLink>
    <NavLink className="navbar-link-item" to="/compétences">Compétences</NavLink>
    <NavLink className="navbar-link-item" to="/portfolio">PortFolio</NavLink>
    <NavLink className="navbar-link-item"  to="/contact">Me contacter</NavLink>
  </div>
  
);

export default Navbar;
