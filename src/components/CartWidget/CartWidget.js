
    import '../NavBar/Navbar.css';

function CartWidget() {
  return (
  <button id="boton-carrito">
      <span class="iconify" data-icon="emojione:shopping-cart" data-inline="false"></span><span
        id="contador-carrito">0</span>
    </button>

  );
}

export default CartWidget;