import Card from './Card';
import './ItemListContainer.css'

function ItemListContainer() {
  return (
    <header className = "card ">
     <Card producto="malla1" precio="$1000"/>
     <Card producto="malla2" precio="$2000"/>
     <Card producto="malla3" precio="$3000"/>
     <Card producto="malla4" precio="$4000"/>
    </header>
  );
}

export default ItemListContainer;