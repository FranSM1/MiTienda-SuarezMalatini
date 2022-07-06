import Item from '../Item/Item';
import '../ItemListContainer/ItemListContainer.css'

function ItemList (props) {

  return(
    <div>
      {
                    props.productos.map(
                        i => <Item key={i.id} id={i.id} nombre={i.nombre} precio={i.precio}  imagen={i.img}/>
                    )
                }
    </div>
 ) ;
}
export default ItemList;

