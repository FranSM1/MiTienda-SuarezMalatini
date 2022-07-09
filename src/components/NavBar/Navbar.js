import CartWidget from '../CartWidget/CartWidget';
import './Navbar.css';

function Navbar() {
  return (
  <header  >
     <h1 className = " titulo-page">Lolo <span>Deportes</span></h1>
     <div className="nav-bar">
      <input type="image" img src={process.env.PUBLIC_URL + '/lolo.jpg'} alt="logo" width="90"/>
    <li><a href="/tienda">Tienda</a></li>
    <li><a href="/nosotros">Nosostros</a></li>
    <li><a href="/contactos">Contactos</a></li> 
    <CartWidget/>
    </div>
  </header>
  );
}

export default Navbar;