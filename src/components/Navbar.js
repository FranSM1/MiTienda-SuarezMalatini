import CartWidget from './CartWidget';
import './Navbar.css';

function Navbar() {
  return (
  <header  >
     <h1 className = " titulo-page">Lolo <span>Deportes</span></h1>
     <div className="nav-bar">
      <input type="image" img src={process.env.PUBLIC_URL + '/lolo.jpg'} alt="logo" width="90"/>
    <li> Tienda </li>
    <li href = "index.html/#nos">Nosostros</li>
    <li>Contactos</li>
    <CartWidget/>
    </div>
  </header>
  );
}

export default Navbar;