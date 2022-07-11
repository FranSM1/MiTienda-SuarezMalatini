import './ItemDetail.css';
import ItemCount from '../ItemCount/ItemCount';
import { Link } from "react-router-dom";
function ItemDetail({producto}) {
  
  return (
     <div>
            Informacion del producto
            <img src={producto.img} alt={producto.nombre} width="400" />
            <h1>{producto.titulo}</h1>
            <h2>{producto.desc}</h2>
            <h3>$ {producto.precio}</h3>
            <h4>Stock: {producto.stock}</h4>
            <ItemCount stock={producto.stock} initial={1} />
        <Link to={"/cart"}>Finalizar Compra</Link>
      <Link to={"/"}>Inicio</Link>
        </div>
    )
}

export default ItemDetail;