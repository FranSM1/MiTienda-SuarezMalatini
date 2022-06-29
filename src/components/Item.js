import Cantidad from './Cantidad';
import './Item.css';

function Item({producto},{precio}) {
  return (
  <div className = "Card">
    <h4>{producto}</h4>
    <p>{precio}</p>
    <Cantidad/>
   <button>Ver descripción</button>
  </div>

  );
}

export default Item;