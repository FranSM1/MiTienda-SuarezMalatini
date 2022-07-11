import ItemCount from '../ItemCount/ItemCount'
import './Item.css';
import { Link } from "react-router-dom";

function Item(props) {
  const onAdd = (cantidad) => {
    alert("agregaste" + cantidad + "items de este articulo")
  }
  return (
<div className = "Card">
  <h3>{props.nombre}</h3>
  <p>{props.precio}</p>
  <img src={props.imagen} alt="" />
  <ItemCount stock = {6} initial = {1}  onAdd={onAdd}/>
  <button>
  <Link to={`/item${props.id}`}>Ver detalle del producto</Link>
  </button>
</div>

  );
  }

export default Item;