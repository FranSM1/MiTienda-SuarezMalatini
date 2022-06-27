 import Cantidad from './Cantidad';
import './Card.css';

function Card({producto},{precio}) {
  return (
  <div className = "Card">
    <h4>{producto}</h4>
    <p>{precio}</p>
    <Cantidad/>
  </div>

  );
}

export default Card;