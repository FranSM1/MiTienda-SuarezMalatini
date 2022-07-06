import { useState , useEffect } from 'react';
import ItemList from '../ItemList/ItemList';
import './ItemListContainer.css'



function ItemListContainer() {
 const [info , setInfo] = useState([])
  
   useEffect( () =>{
    
      setTimeout(
          ()=>{
              fetch("./articulos.json")
                  .then(resp => resp.json())
                  .then(data => setInfo(data))
          },3000
      )
   }, [] );
   console.log(info)
  return (
    <header className = "card ">
    <ItemList productos={info} />
    </header>
  );// && es un if que nos dice que si es true(cuando tiene algo adentro) ejecute el metodo
}
  export default ItemListContainer;

