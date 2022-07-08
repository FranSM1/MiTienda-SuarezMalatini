import { useState}  from  "react";
import Swal from 'sweetalert2'
import './ItemCount.css';

function ItemCount(props) {
  const [num, setNum] = useState(0)
    const { onAdd } = props;
  
  const agregar = () => { 
    if (num < props.stock){
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
    if (num >= props.initial) 
    setNum (num - 1 )
  }
  const guardar = (event) => setNum(event.target.value);

    const agregarCarrito = () =>{
        onAdd(num)
  }
  return (
    <>
  <p>{num}</p>
  <button onClick = {agregar}>+</button>
  <button onClick = {quitar}>-</button>
  <input type="text" class="form-control" value={num} onChange={guardar}/>
  <button  onClick = {agregarCarrito} >{num > 0 ? `Agregar al carrito` : `Elegí tu cantidad`}</button>
</>
  );
}

export default ItemCount;