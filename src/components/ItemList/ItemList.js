import Item from '../Item/Item';
import '../ItemListContainer/ItemListContainer.css'

function ItemList (props) {

  return(
    <div className='card'>
      {
                    props.productos.map(
                        i => <Item  id={i.id} nombre={i.nombre} precio={i.precio}  imagen={i.img}/>
                    )
                }
    </div>
 ) ;
}
export default ItemList;

