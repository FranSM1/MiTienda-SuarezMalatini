
import './Body.css'
import Item from '../Item/Item';

function Body() {


  return (
    <section className = "cuerpo">
      <h3 className="nos"> Te brindamos atencion personalizada y las mejores ofertas para que solo tengas que ponerte en acción </h3>
      <div className= "titulo-productos">
       <h3>Nuestros Productos</h3>
        
      </div>
      <div>
        <Item/>
      
      </div>
      <div className = "medios-de-pago">
        <h4>Medios de pago</h4>
        <li>Mercado Pago</li>
        <li>Tarjetas</li>
      </div>
    </section>
  );
}
export default Body;