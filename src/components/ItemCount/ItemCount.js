import { useState}  from  "react";
import Swal from 'sweetalert2'
import './ItemCount.css';

function ItemCount({initial ,  stock , }) {
  const [num, setNum] = useState(0)
  const agregar = () => { 
    if (num < stock){
    setNum (num + 1 )
  }
  else{
    Swal.fire({
  title: 'Atencion!',
  text: 'No hay mas Stock Disponible!',
  icon: 'warning',
  timer: 2000
})
  }
  }
  const quitar = () => {  
    if (num >= initial) 
    setNum (num - 1 )
  }
  const onAdd = () => {
    console.log(`se agregan ${num} unidades `)
  }
  return (
    <>
  <p>{num}</p>
  <button onClick = {agregar}>+</button>
  <button onClick = {quitar}>-</button>
  <button  onClick = {onAdd} >{num > 0 ? `Agregar al carrito` : `Elegí tu cantidad`}</button>
</>
  );
}

export default ItemCount;