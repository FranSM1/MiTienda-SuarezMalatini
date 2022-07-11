import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';
import { NavLink } from 'react-router-dom'
function Navbar() {
  return (
  <header  >
     <h1 className = " titulo-page">Lolo <span>Deportes</span></h1>
     <div className="nav-bar">
      <input type="image" img src={process.env.PUBLIC_URL + '/lolo.jpg'} alt="logo" width="90"/>
    <li>< NavLink activeClassName='active' to="/tienda">Tienda</NavLink></li>
    <li><NavLink activeClassName='active' to="/nosotros">Nosostros</NavLink></li>
    <li><NavLink activeClassName='active' to="/contactos">Contactos</NavLink></li> 
    <CartWidget/>
    </div>
  </header>
  );
}

export default Navbar;