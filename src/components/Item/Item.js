import ItemCount from '../ItemCount/ItemCount'
import './Item.css';
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer"
function Item(props) {
  return (
<div className = "Card">
  <h3>{props.nombre}</h3>
  <p>{props.precio}</p>
  <img src={props.imagen} alt="" />
  <ItemCount stock = {6} initial = {1} />
 <ItemDetailContainer/>
</div>

  );
  }

export default Item;