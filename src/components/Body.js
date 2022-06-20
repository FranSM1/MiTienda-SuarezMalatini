import './Body.css'
import Card from './Card'

function Body() {
  return (
    <section className = "cuerpo">
      <div className= "nosotros">
        <h3 className="nos">Nosotros</h3>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad recusandae corporis possimus sint laborum earum inventore aspernatur similique, quo, dolore laboriosam dignissimos est et nostrum placeat tempora rem eligendi.
        Veniam vero laborum, vitae mollitia minus velit sunt delectus perferendis, eos cumque et dolores modi fuga nulla ex dignissimos nostrum, voluptatum ipsam facere suscipit. Perspiciatis repellat sit quaerat doloribus recusandae!
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Mollitia ad recusandae corporis possimus sint laborum earum inventore aspernatur similique, quo, dolore laboriosam dignissimos est et nostrum placeat tempora rem eligendi.
        Veniam vero laborum, vitae mollitia minus velit sunt delectus perferendis, eos cumque et dolores modi fuga nulla ex dignissimos nostrum, voluptatum ipsam facere suscipit. Perspiciatis repellat sit quaerat doloribus recusandae!</p>
        
      </div>
      <div>
        <Card/>
        <Card/>
        <Card/>
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