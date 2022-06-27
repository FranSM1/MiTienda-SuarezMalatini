import { useState}  from  "react";
import './Cantidad.css';

function Cantidad() {
  const [num, setNum] = useState(0)
  const agregar = () => { 
    setNum (num + 1 )
  }
  const quitar = () => { 
    if (num >0) 
    setNum (num - 1 )
  }
  return (
    <>
  <p>{num}</p>
  <button onClick = {agregar}>+</button>
  <button onClick = {quitar}>-</button>
</>
  );
}

export default Cantidad;