import { useEffect, useState } from 'react';
import Item from './Item';


function ItemList() {
  const [info , setInfo] = useState([])
  
  useEffect(()=>{
    setTimeout(() => 
    fetch('articulos.json')
    .then((resp)=> resp.json()) // respuesta del fetch
    .then((art)=> setInfo(art)
    ),3000
    );} // lo que sale del .then anterior
  ,[])
  return (
    <header className = "card ">
    {info && info.map(i => <Item producto={i.nombre} precio={i.precio} />)} 
    </header>
  );// && es un if que nos dice que si es true(cuando tiene algo adentro) ejecute el metodo
}
  
  export default ItemList;

