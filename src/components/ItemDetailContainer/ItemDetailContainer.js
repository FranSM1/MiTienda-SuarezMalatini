import './ItemDetailContainer.css';
import {  useState } from 'react';

import ItemDetail from '../ItemDetail/ItemDetail';
//import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [ producto, setProducto ] = useState([])
  //const params = useParams();
  

 const fetchProducto =() => {
  fetch('../articulos.json')
  .then((response) =>{return response.json()})
  .then ((data) => {
    const productoFetch = data.map((articulo)=> {
      return {
        id : articulo.id,
        nombre : articulo.nombre,
        precio : articulo.precio,
        descripcion : articulo.desc,
        imagen : articulo.img,
      }
      })
      setProducto(productoFetch)})

    }

  return (
    <div>
      <button onClick = {fetchProducto}> Ver Detalles
      </button>
      <ItemDetail producto = {producto}/>
    </div>
  )
}


export default ItemDetailContainer;