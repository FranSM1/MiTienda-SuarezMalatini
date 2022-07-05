import ItemCount from '../ItemCount/ItemCount'


import './Item.css';

function Item(props) {
  return (
  <div className = "Card">
<h3>{props.nombre}</h3>
<p>{props.precio}</p>

    <ItemCount stock = {6} initial = {1} />
  
   <button>Ver descripción</button>
  </div>

  );
}

export default Item;