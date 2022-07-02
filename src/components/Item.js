import ItemCount from './ItemCount';
import './Item.css';

function Item({producto},{precio}) {
  return (
  <div className = "Card">
    <h4>{producto}</h4>
    <p>{precio}</p>
    <ItemCount stock = {6} initial = {1} />
   <button>Ver descripción</button>
  </div>

  );
}

export default Item;