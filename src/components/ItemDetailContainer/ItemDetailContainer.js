import './ItemDetailContainer.css';
import ItemDetail from '../ItemDetail/ItemDetail';
import { useEffect, useState } from 'react';
function ItemDetailContainer() {

  const [info , setInfo] = useState({})
  
  useEffect(()=>{
    setTimeout(() => 
    fetch('./articulos.json')
    .then((resp)=> resp.json())
    .then((prod)=> setInfo(prod[0])
    ),3000
    );} ,[])

  return (
    <div>
    <ItemDetail producto={info} /> 
    </div>
  );
}
  
  export default ItemDetailContainer;