import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
function ItemDetail({producto}) {
  return (
     <div>
            Informacion del producto
            <img src={producto.imagen} alt={producto.nombre} width="400" />
            <h1>{producto.titulo}</h1>
            <h2>{producto.descripcion}</h2>
            <h3>$ {producto.precio}</h3>
            <h4>Stock: {producto.stock}</h4>
            <ItemCount stock={producto.stock} initial={1} />
        </div>
    )
}

export default ItemDetail;